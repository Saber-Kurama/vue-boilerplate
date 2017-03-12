const files = require.context('.', true, /\.js$/){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

var routesMap = []{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

files.keys().forEach((key) => {
  if (key === './index.js') return{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  routesMap = routesMap.concat(files(key).default){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
})
export default routesMap
