const fs = require('fs')
const path = require('path')
const jsonFormat = require('json-format')
const utils = require('../utils')

var typesTemplate = fs.readFileSync(path.join(__dirname, 'templates/types.json'), 'utf8')
var indexTemplate = fs.readFileSync(path.join(__dirname, 'templates/index.js'), 'utf8')

function uniformStoreName (name) {
  let sections = name.split('-')
  sections = sections.map((item, index) => {
    return item[0].toUpperCase() + item.slice(1)
  })
  return sections.join('')
}

function createStore ({name}) {
  let base = process.cwd()
  utils.makedirInfoNotExist(`${base}/src/store/modules/${name}`)
  utils.createFileIfNotExist({
    path: `${base}/src/store/modules/${name}/index.js`,
    defaultContent: utils.compileTemplate({
      template: indexTemplate,
      data: {
        name
      }
    })
  })
  utils.createFileIfNotExist({
    path: `${base}/src/store/modules/${name}/types.json`,
    defaultContent: utils.compileTemplate({
      template: typesTemplate,
      data: {
        name
      }
    })
  })
}

module.exports = {
  uniformStoreName,
  createStore
}