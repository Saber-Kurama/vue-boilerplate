const files = require.context('.', true, /\.svg$/){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

const modules = {}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

files.keys().forEach((key) => {
  if (key === './index.js') return{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  modules[key.replace(/(\.\/|\.svg)/g, '')] = files(key){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
})
export default modules
