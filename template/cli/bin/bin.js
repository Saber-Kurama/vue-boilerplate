#!/usr/bin/env node
'use strict'

const program = require('commander')
const utils = require('../lib/utils')
const pageService = require('../lib/page')
const componentService = require('../lib/component')
const storeService = require('../lib/store')
const Tree = require('../lib/nav/tree')
const fs = require('fs')
const inquirer = require('inquirer')


program
  .version('0.0.1')
  .usage('[commands] [name] [options]')

program
  .command('page [name]')
  .description('add page file in development environment')
  .option('-x, --complex', 'If the module is complex')
  .option('-c, --common', 'If the page is common page, like login')
  .action((name, options) => {
    if (!name) {
      utils.error('Error: name is required')
      return
    }

    if (options.common && name.split('/').length !== 1) {
      utils.error('Error: when create a common page. page path should be a filename, not a directory')
      return
    }

    if (!utils.checkInRoot()) return

    pageService.createPage({
      isCommonPage: options.common,
      pagePath: pageService.uniformPagePath(name),
      isComplex: options.complex
    })
  })

program
  .command('component [name]')
  .description('add component file in development environment')
  .option("-x, --complex", "If the module is complex")
  .option("-g, --global", "If the component is a global component")
  .action(function (name, options) {
    if (!name) {
      utils.error('Error: name is required')
      return
    }

    if (!utils.checkInRoot()) return

    componentService.createComponent({
      name: componentService.uniformComponentName(name),
      isComplex: options.complex,
      isGlobal: options.global
    })
  });

program
  .command('store [name]')
  .description('add store file in development environment')
  .action(function (name, options) {
    if (!name) {
      utils.error('Error: name is required')
      return
    }

    if (!utils.checkInRoot()) return

    storeService.createStore({
      name: storeService.uniformStoreName(name)
    })
  });

program
  .command('nav [action] [path]')
  .description('根据所给路径生成相对应的导航')
  .action((action, path) => {
    if (action !== 'add' && action !== 'migrate' && action !== 'delete') {
      utils.error('error：请输入正确的指令')
      console.log('vt nav add path - 根据路径生成导航栏')
      console.log('vt nav migrate - 根据 path.json 文件迁移导航栏')
      console.log('vt nav delete path - 根据路径删除对应导航')
    } else if (action !== 'migrate' && !path) {
      utils.error('error: 必须制定一个路径，且用 / 分离')
    } else {
      const pathObj = JSON.parse(fs.readFileSync('./cli/lib/nav/path.json'))
      const tree = new Tree(pathObj)
      switch (action) {
        case 'add':
          const pathArr = path.split('/')
          const unsignedData = tree.checkTree(pathArr)
          const inquirerQues = []
          unsignedData.forEach(pathData => {
            inquirerQues.push(utils.initQuestionZhLabel(pathData))
            inquirerQues.push(utils.initQuestionEnLabel(pathData))
            inquirerQues.push(utils.initQuestionIcon(pathData))
          })
          inquirer.prompt(inquirerQues).then(ans => {
            Object.keys(ans).forEach(key => {
              tree.addToMap(key, ans[key])
            })
            tree.addToTree(pathArr)
            tree.generateSideNavTree()
            utils.writeNavFiles(tree)
          }).catch(err => {
            utils.error(err)
          })
          break
        case 'delete':
          tree.deleteRawDataNode(path)
          tree.generateSideNavTree()
          utils.writeNavFiles(tree)
          break
        case 'migrate':
          tree.generateSideNavTree()
          utils.writeNavFiles(tree)
      }
    }
  })

program.parse(process.argv)
