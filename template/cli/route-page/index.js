#!/usr/bin/env node
'use strict'

require('shelljs/global')
const commander = require('commander')
const page = require('./page')
const route = require('./route')

function list (val) {
  return val.split(',')
}

commander
  .version('0.0.1')
  .option('-p, --route-path <path>', '路由的前端路径，有多个路由时，通过逗号隔开，eg: a/b/c,c/g', list)
  .option('-f, --frame-route', '是否挂载在Frame组件下')
  .option('-m, --module-name <moduleName>', '模块名，用于给文件命名')
  .option('-a, --alias <alias>', '路由的别名')
  .parse(process.argv)

page.makeDirAndTouchFile({
  base: 'views/pages',
  paths: commander.routePath,
  frameRoute: commander.frameRoute
})
route.makeDirAndTouchFile({
  base: 'router/routes',
  paths: commander.routePath,
  moduleName: commander.moduleName
})
