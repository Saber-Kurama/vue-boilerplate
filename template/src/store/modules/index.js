const files = require.context('.', true, /\/index\.js$/){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
const modules = {}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

function checkDirModule (path) {
  let sections = path.split('/'){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  return sections.length === 3 && sections[sections.length - 1] === 'index.js'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
}

files.keys().forEach((key) => {
  if (checkDirModule(key)) {
    modules[key.split('/')[1]] = files(key).default{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  }
})

export default modules{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
