const fs = require('fs')
const path = require('path')
const utils = require('../utils')

var pageTemplate = fs.readFileSync(path.join(__dirname, 'templates/page.vue'), 'utf8')
var pageIndexTemplate = fs.readFileSync(path.join(__dirname, 'templates/index.js'), 'utf8')

var uniformPagePath = function (path) {
  if (/^\.\//.test(path)) {
    path = path.replace(/^\.\//, '')
  }
  if (/\.vue$/.test(path)) {
    path = path.replace(/\.vue$/, '')
  }
  let sections = path.split('/')
  sections[sections.length - 1] = uniformPageName(sections[sections.length - 1])
  return sections.join('/')
}

var uniformPageName = function (name) {
  let sections = name.split('-')
  sections = sections.map((item, index) => {
    return item[0].toUpperCase() + item.slice(1)
  })
  return sections.join('')
}

function calRelativePathToPage (pathNumber) {
  var result = ''
  while (pathNumber > 0) {
    result += '../'
    pathNumber --
  }
  return result
}

var createPage = function ({isCommonPage, pagePath, isComplex}) {
  let base = process.cwd()
  let paths = utils.parsePath(pagePath)
  let filename = paths[paths.length - 1]
  let defaultPageContent = utils.compileTemplate({
    template: pageTemplate,
    data: {
      name: filename,
      relativePath: calRelativePathToPage(paths.length + 1)
    }
  })
  if (isCommonPage) {
    utils.makedirInfoNotExist(`${base}/src/views/pages/common`)
    utils.createFileIfNotExist({
      path: `${base}/src/views/pages/common/${filename}.vue`,
      defaultContent: defaultPageContent
    })
  } else {
    if (isComplex) {
      utils.makeDirByPath({
        base: `${base}/src/views/pages`,
        path: pagePath
      })
      utils.makedirInfoNotExist(`${base}/src/views/pages/${pagePath}/partials`)
      utils.makedirInfoNotExist(`${base}/src/views/pages/${pagePath}/constants`)
      utils.createFileIfNotExist({
        path: `${base}/src/views/pages/${pagePath}/index.js`,
        defaultContent: utils.compileTemplate({
          template: pageIndexTemplate,
          data: {
            name: 'page'
          }
        })
      })
      utils.createFileIfNotExist({
        path: `${base}/src/views/pages/${pagePath}/page.vue`,
        defaultContent: utils.compileTemplate({
          template: pageTemplate,
          data: {
            name: filename,
            relativePath: calRelativePathToPage(paths.length + 2)
          }
        })
      })
    } else {
      if (paths.length > 1) {
        paths.pop()
        let parentPath = paths.join('/')
        utils.makeDirByPath({
          base: `${base}/src/views/pages`,
          path: parentPath
        })
      }
      defaultPageContent = utils.compileTemplate({
        template: pageTemplate,
        data: {
          name: filename,
          relativePath: calRelativePathToPage(paths.length + 2)
        }
      })
      utils.createFileIfNotExist({
        path: `${base}/src/views/pages/${pagePath}.vue`,
        defaultContent: defaultPageContent
      })
    }
  }
}

module.exports = {
  uniformPagePath,
  createPage
}
