export default [{
  path: '{{route}}',
  component: component: resolve => require(['../../views/pages/{{route}}'], resolve)
}]

