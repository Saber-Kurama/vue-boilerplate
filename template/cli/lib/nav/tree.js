const _ = require('lodash')

class Tree {
  constructor (data) {
    this._sideNavMap = {}
    this._deleteDataIndex = []
    this.rawData = data
    this.sideNavTree = []
    this.locales = {
      zhLabel: {},
      enLabel: {}
    }
  }

  _deleteRawDataNode (nodeId) {
    console.log('被删除的导航栏有', nodeId)
    for (let i = 0; i < this.rawData.length; i++) {
      let datum = data[i]
      if (datum.parent === nodeId) {
        this._deleteRawDataNode(datum.id)
      } else if (datum.id === nodeId) {
        this._deleteDataIndex.push(i)
      }
    }
  }

  addToTree (arg) {
    let idArr = this.generateIDArr(this.rawData)
    let currentID = ''
    let parentID = ''
    arg.forEach(ele => {
      currentID = `${currentID}/${ele}`
      if (idArr.indexOf(currentID) === -1) {
        this.rawData.push({
          id: currentID,
          zhLabel: this._sideNavMap[currentID].zhLabel,
          enLabel: this._sideNavMap[currentID].enLabel,
          icon: this._sideNavMap[currentID].icon,
          parent: parentID
        })
      }
      parentID = `${parentID}/${ele}`
    })
  }

  addToMap (key, value) {
    const [key1, key2] = key.split('-')
    this._sideNavMap[key1] = this._sideNavMap[key1] || {}
    this._sideNavMap[key1][key2] = value
  }

  checkTree (arg) {
    let idArr = this.generateIDArr(this.rawData)
    let unsignedData = []
    let currentID = ''
    arg.forEach(ele => {
      currentID = `${currentID}/${ele}`
      if (idArr.indexOf(currentID) === -1) {
        unsignedData.push(currentID)
      }
    })
    return unsignedData
  }

  generateIDArr (data) {
    let idArr = []
    data.forEach(ele => {
      idArr.push(ele.id)
    })
    return idArr
  }

  generateSideNavTree () {
    let idToNodeMap = {}
    let data = _.cloneDeep(this.rawData)
    let rootArr = []
    data.forEach(datum => {
      datum.children = []
      idToNodeMap[datum.id] = datum
      if (datum.parent === '') {
        delete datum.parent
        rootArr.push(datum)
      } else {
        let parentNode = idToNodeMap[datum.parent]
        delete datum.parent
        parentNode.children.push(datum)
      }
    })
    this.sideNavTree = rootArr
    this.generateLocales()
  }

  generateLocales () {
    Object.keys(this.locales).forEach(locale => {
      this.rawData.forEach(ele => {
        this.locales[locale][ele.id] = ele[locale]
      })
    })
  }

  deleteRawDataNode (nodeId) {
    let data = _.cloneDeep(this.rawData)
    let newData = []
    this._deleteRawDataNode(`/${nodeId}`)
    if (this._deleteDataIndex.length === 0) {
      console.log('没有找到对应要删除的路径')
    } else {
      for (let i = 0; i < data.length; i++) {
        if (this._deleteDataIndex.indexOf(i) === -1) {
          newData.push(data[i])
        }
      }
      this.rawData = newData
    }
  }
}

module.exports = Tree
