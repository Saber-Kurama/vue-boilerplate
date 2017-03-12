import Frame from '@views/Frame'

export default [{
  path: '/',
  component: Frame,
  children: [
    {
      path: 'demo/form',
      meta: {
        title: '表单页'
      },
      component: resolve => require(['../../views/pages/demo/Form'], resolve)
    },
    {
      path: 'demo/list',
      meta: {
        title: '列表'
      },
      component: resolve => require(['../../views/pages/demo/List'], resolve)
    }
  ]
}]
