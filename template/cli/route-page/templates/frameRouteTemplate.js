import Frame from '@views/Frame'

export default [{
  path: '/',
  component: Frame,
  children: [
  {{#each paths}}
    {
      path: '{{this}}',
      component: resolve => require(['../../views/pages/{{this}}'], resolve)
    }{{#unless @last}},{{/unless}}
  {{/each}}
  ]
}]

