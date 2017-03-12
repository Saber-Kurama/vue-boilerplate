const path = require('path')
const fs = require('fs')
const util = require('../util')

let pageTemplate = fs.readFileSync(path.join(__dirname, './templates/pageTemplate.vue'), 'utf8')
let pageIndexTemplate = fs.readFileSync(path.join(__dirname, './templates/pageIndexTemplate.js'), 'utf8')

// 创建page目录下的js和vue文件
function touchPageFiles ({base, path}) {
  path = util.supplementPath(path)
  let jsFile = util.resolve(base + path + '/index.js')
  let vueFile = util.resolve(base + path + '/page.vue')
  let sections = path.split('/')
  let pageName = sections[sections.length - 1]
  util.createFileIfNotExist(jsFile, pageIndexTemplate)
  util.createFileIfNotExist(vueFile, util.parse(pageTemplate, {pageName}))
}

// 创建page目录和目录下的文件
function makeDirAndTouchFile ({base, paths}) {
  paths.forEach((path) => {
    util.makeDirByTargetRoute({base, path})
    touchPageFiles({base, path})
  })
}

module.exports = {
  touchPageFiles,
  makeDirAndTouchFile
}