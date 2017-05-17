const Handlebars = require('handlebars')
const fs = require('fs')
const chalk = require('chalk')
const jsonFormat = require('json-format')

function compileTemplate ({template, data}) {
  var tmp = Handlebars.compile(template)
  return tmp(data)
}

function parsePath (path) {
  return path.split('/').filter(p => p)
}

function error (msg) {
  console.log(chalk.red(msg))
}

function info (msg) {
  console.log(chalk.green(msg))
}

function checkInRoot () {
  let path = process.cwd()
  let result = fs.existsSync(`${path}/cli`) && fs.existsSync(`${path}/src`) && fs.existsSync(`${path}/build`) && fs.existsSync(`${path}/src/views`)
  if (!result) {
    console.log(chalk.red('Error: vt commands can only be used in root directory!'))
  }
  return result
}

function makeDirByArray ({base, files}) {
  let fullFileName = base
  files.forEach((fileName, index) => {
    fullFileName += `/${fileName}`
    if (!fs.existsSync(fullFileName)) {
      fs.mkdirSync(fullFileName)
      console.log('make directory: ', chalk.green(fullFileName))
    } else {
      console.log('directory: ', chalk.red.underline(fullFileName), 'already exist！')
    }
  })
}

function makeDirByPath ({base, path}) {
  let sections = parsePath(path)
  makeDirByArray({base, files: sections})
}

function createFileIfNotExist ({path, defaultContent}) {
  if (!fs.existsSync(path)) {
    fs.openSync(path, 'w')
    fs.writeFileSync(path, defaultContent)
    console.log('create file: ', chalk.blue(path))
    return true
  } else {
    console.log('file: ', chalk.red.underline(path), 'already exist！')
    return false
  }
}

function writeFileSyncJson ({path, json}) {
  fs.writeFileSync(path, jsonFormat(json))
}

function makedirInfoNotExist (dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir)
    console.log('make directory: ', chalk.green(dir))
  } else {
    console.log('directory: ', chalk.red.underline(dir), 'already exist！')
  }
}

function initQuestionZhLabel (path) {
  let obj = {
    type: 'input',
    name: `${path}-zhLabel`,
    message: `${path} 导航的名称是什么`
  }
  return obj
}

function initQuestionEnLabel (path) {
  let obj = {
    type: 'input',
    name: `${path}-enLabel`,
    message: `The Engilsh name of the ${path} `
  }
  return obj
}

function initQuestionIcon (path) {
  let obj = {
    type: 'list',
    name: `${path}-icon`,
    message: `${path} 导航的图标是什么`,
    choices: ['document', 'menu', 'message', 'setting'],
    default () {
      return 'menu'
    }
  }
  return obj
}

function writeNavFiles (tree) {
  fs.writeFileSync('./cli/lib/nav/path.json', JSON.stringify(tree.rawData, null, '\t'))
  fs.writeFileSync('./src/constants/sideNav.json', JSON.stringify(tree.sideNavTree, null, '\t'))
  fs.writeFileSync('./src/locales/nav/zh.json', JSON.stringify(tree.locales.zhLabel, null, '\t'))
  fs.writeFileSync('./src/locales/nav/en.json', JSON.stringify(tree.locales.enLabel, null, '\t'))
  console.log(chalk.green('导航栏配置完成'))
}

module.exports = {
  compileTemplate,
  parsePath,
  info,
  error,
  checkInRoot,
  makeDirByArray,
  makeDirByPath,
  createFileIfNotExist,
  makedirInfoNotExist,
  writeFileSyncJson,
  initQuestionIcon,
  initQuestionEnLabel,
  initQuestionZhLabel,
  writeNavFiles
}
