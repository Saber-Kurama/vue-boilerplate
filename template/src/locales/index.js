import zh from './zh'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import en from './en'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import eleEN from 'element-ui/lib/locale/lang/en'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import eleZH from 'element-ui/lib/locale/lang/zh-CN'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

var locale = {}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
function addLang (key, a, b) {
  locale[key] = Object.assign(a, b){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
}
addLang('zh', zh, eleZH){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
addLang('en', en, eleEN){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export default locale
