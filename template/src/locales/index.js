import zh from './zh'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import en from './en'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import eleEN from 'element-ui/lib/locale/lang/en'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import eleZH from 'element-ui/lib/locale/lang/zh-CN'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import navEN from './nav/en.json'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import navZH from './nav/zh.json'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

var locale = {}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
function addLang (key, a, b, c) {
  locale[key] = Object.assign(a, b, c){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
}
addLang('zh', zh, eleZH, navZH){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
addLang('en', en, eleEN, navEN){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export default locale
