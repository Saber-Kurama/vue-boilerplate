const path = require('path')
const fs = require('fs')
const util = require('../util')

let frameRouteTemplate = fs.readFileSync(path.join(__dirname, './templates/frameRouteTemplate.js'), 'utf8')

// 创建route文件
function makeDirAndTouchFile ({base, paths, moduleName}) {
  let defaultContent = util.parse(frameRouteTemplate, {
    paths
  })
  util.createFileIfNotExist(util.resolve(base + '/' + moduleName + '.js'), defaultContent)
}

module.exports = {
  makeDirAndTouchFile
}
