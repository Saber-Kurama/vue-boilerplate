const fs = require('fs')
const path = require('path')
const utils = require('../utils')
const jsonFormat = require('json-format')

const globalComponentsConfigPath = path.resolve(process.cwd(), 'src/components/_global/globals.json')

var componentTemplate = fs.readFileSync(path.join(__dirname, 'templates/component.vue'), 'utf8')
var componentIndexTemplate = fs.readFileSync(path.join(__dirname, 'templates/index.js'), 'utf8')
var globalComponentsConfig = require(globalComponentsConfigPath)

function uniformComponentName (name) {
  let sections = name.split('-')
  sections = sections.map((item, index) => {
    return item[0].toUpperCase() + item.slice(1)
  })
  return sections.join('')
}

// 将驼峰式名字转换成满足html标签的标签名
function uniformTagName (name) {
  let sections = name.match(/([A-Z][a-z]*|[a-z]*)/g)
  sections = sections.filter(item => item).map((item) => {
    return item.toLowerCase()
  })
  return sections.join('-')
}

function createComponent ({name, isComplex, isGlobal}) {
  let base = process.cwd()
  let tagName = uniformTagName(name)
  if (fs.existsSync(path.resolve(process.cwd(), 'src/components/name'))) {
    utils.error(`component ${name} already exist!`)
    return
  }
  utils.makedirInfoNotExist(`${base}/src/components/${name}`)
  utils.createFileIfNotExist({
    path: `${base}/src/components/${name}/index.js`,
    defaultContent: utils.compileTemplate({
      template: componentIndexTemplate,
      data: {
        name
      }
    })
  })
  utils.createFileIfNotExist({
    path: `${base}/src/components/${name}/${name}.vue`,
    defaultContent: utils.compileTemplate({
      template: componentTemplate,
      data: {
        name
      }
    })
  })
  if (isComplex) {
    utils.makedirInfoNotExist(`${base}/src/components/${name}/partials`)
    utils.makedirInfoNotExist(`${base}/src/components/${name}/constants`)
  }
  if (isGlobal) {
    let match = globalComponentsConfig.find((item) => {
      return item.tag === tagName
    })
    if (match) {
      utils.error(`global component ${tagName} already exist`)
      return
    }
    globalComponentsConfig.push({
      tag: tagName,
      dir: name
    })
    utils.writeFileSyncJson({
      path: globalComponentsConfigPath,
      json: globalComponentsConfig
    })
    utils.info(`component ${tagName} is registered as global component`)
  }
}

module.exports = {
  uniformComponentName,
  createComponent
}
