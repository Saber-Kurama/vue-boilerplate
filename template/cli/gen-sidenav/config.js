module.exports = [
  {
    label: '个人信息',
    name: 'personal-info',
    children: [
      {
        label: '基本信息',
        link: '/personal/info',
        name: 'personal-info-basic'
      },
      {
        label: '职务信息',
        link: '/personal/position',
        name: 'personal-info-position'
      },
      {
        label: '考勤信息',
        link: '/personal/clockin',
        name: 'personal-info-clockin'
      },
      {
        label: '绩效信息',
        link: '/personal/score',
        name: 'personal-info-score'
      },
      {
        label: '薪酬维护',
        link: '/personal/maintain',
        name: 'personal-info-maintain'
      },
      {
        label: '个人社保(CHN)',
        link: '/personal/social',
        name: 'personal-info-social'
      }
    ]
  },
  {
    label: '其他',
    name: 'other',
    children: [
      {
        label: '请假申请',
        link: '/other/leave',
        name: 'other-leave'
      },
      {
        label: 'GT论坛',
        link: '/other/position',
        name: 'other-gt-forum'
      }
    ] 
  }
]