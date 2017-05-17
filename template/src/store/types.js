import { $utils } from '@helper'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

const files = require.context('.', true, /^\.\/modules.*\.json$/){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

var allTypesMap = {}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

files.keys().forEach((key) => {
  if (key.split('/').length === 4) {
    var moduleName = Object.keys(files(key))[0]{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    allTypesMap[moduleName] = $utils.importStoreTypes(files(key))[moduleName]{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  }
})

export default allTypesMap{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
