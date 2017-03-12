#!/usr/bin/env node
'use strict'

require('shelljs/global')
const commander = require('commander')
const fs = require('fs')
const path = require('path')
const util = require('../util')
const page = require('../route-page/page')
const route = require('../route-page/route')
const sideNavTemplate = fs.readFileSync(path.join(__dirname, './sidenavTemplate.vue'), 'utf8')

commander
  .version('0.0.1')
  .option('-f, --config-file <configFile>', 'sidenav的配置文件路径')
  .parse(process.argv)

const sideNavConfig = require(commander.configFile || './config.js')

// 渲染sidenav
var sidenavContent = util.parse(sideNavTemplate, {
  sidenav: sideNavConfig
})

fs.writeFileSync(path.resolve(__dirname, '../../src/views/common/SideNav.vue'), sidenavContent)

// 创建route文件和page文件
var pathConfig = sideNavConfig.map((item) => {
  item.children = item.children.map((item) => {
    if (item.link[0] === '/') {
      item.link = item.link.slice(1)
    }
    return item.link
  })
  return item
})
pathConfig.forEach((module) => {
  page.makeDirAndTouchFile({
    base: 'views/pages',
    paths: module.children
  })
  route.makeDirAndTouchFile({
    base: 'router/routes',
    paths: module.children,
    moduleName: util.convertNameToCamelCasing(module.name)
  })
})
