/**
 * label: 左侧导航栏的名字
 * icon: 左侧导航栏菜单组的图标，组件已自动加入前缀 `el-icon`，可选项请查阅 http://element.eleme.io/#/zh-CN/component/icon
 * url: 点击后的路由跳转，注意这是唯一索引不可重复，仅限于 menu item。
 * children: 次级菜单数组
 */

const SIDENAV = [
  {
    label: 'Demo',
    icon: 'setting',
    children: [
      {
        label: '表单',
        url: '/demo/form'
      },
      {
        label: '列表',
        url: '/demo/list'
      }
    ]
  },
  {
    label: '个人信息',
    icon: 'menu',
    children: [
      {
        label: '基本信息',
        url: '/personal/two'
      },
      {
        label: '职务信息',
        url: '/personal/three'
      },
      {
        label: '绩效信息',
        url: '/personal/'
      },
      {
        label: '考勤信息',
        url: '/personal/four',
        children: [
          {
            label: '薪酬维护',
            url: '/personal/five',
            children: [
              {
                label: '个人社保(CHN)',
                url: '/personal/six'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    label: '其他选项',
    icon: 'menu',
    children: [
      {
        label: '基本选项',
        url: '/personal1/two'
      },
      {
        label: '职务选项',
        url: '/personal1/three'
      },
      {
        label: '绩效选项',
        url: '/personal1/'
      },
      {
        label: '考勤选项',
        url: '/personal1/four'
      }
    ]
  }
]

module.exports = SIDENAV
