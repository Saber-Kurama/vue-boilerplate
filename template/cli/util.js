const Handlebars = require('handlebars')
const path = require('path')
const fs = require('fs')

Handlebars.registerHelper('ifHasChildren', function(v1, options) {
  if(v1 && v1.length) {
    return options.fn(this);
  }
  return options.inverse(this);
});

function supplementPath (path) {
  return (path[0] !== '/' ? '/' : '') + path
}

function parse (template, data) {
  var tmp = Handlebars.compile(template)
  return tmp(data)
}

function createFileIfNotExist (path, defaultContent) {
  if (!fs.existsSync(path)) {
    fs.openSync(path, 'w')
    fs.writeFileSync(path, defaultContent)
    console.log('create file: ', path)
  }
}

function parseTargetRoutePath(path) {
  var sections = path.split('/')
  sections.filter((section) => {
    return !!section
  })
  return sections
}

function makeDirByArray ({base = 'views/pages', files}) {
  let fullFileName = base
  files.forEach((fileName, index) => {
    fullFileName += `/${fileName}`
    if (!fs.existsSync(resolve(fullFileName))) {
      fs.mkdirSync(resolve(fullFileName))
      console.log('make directory: ', resolve(fullFileName))
    }
  })
}

function makeDirByTargetRoute ({base = 'views/pages', path}) {
  path = supplementPath(path)
  let sections = parseTargetRoutePath(path)
  makeDirByArray({base, files: sections})
}

function resolve (pathname) {
  return path.join(__dirname, '../src', pathname)
}

// xx-xx转成驼峰式
function convertNameToCamelCasing (name) {
  let sections = name.split('-')
  sections = sections.map((item, index) => {
    if (index !== 0) {
      return item[0].toUpperCase() + item.slice(1)
    } else {
      return item
    }
  })
  return sections.join('')
}

module.exports = {
  supplementPath,
  parse,
  createFileIfNotExist,
  parseTargetRoutePath,
  makeDirByArray,
  makeDirByTargetRoute,
  resolve,
  convertNameToCamelCasing
}