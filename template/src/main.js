import Vue from 'vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}


import App from './App'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import store from './store/index'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import router from './router'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

Vue.config.productionTip = false{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

// element ui
import ElementUI from 'element-ui'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import 'element-ui/lib/theme-default/index.css'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
Vue.use(ElementUI){{#if_eq lintConfig "airbnb"}};{{/if_eq}}


{{#i18n}}
// i18n
import Cookies from 'js-cookie'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import VueI18n from 'vue-i18n'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import locales from './locales'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
const browserLanguage = (window.navigator.language || window.navigator.browserLanguage).split('-')[0]{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
const lang = Cookies.get('lang') || browserLanguage in locales ? browserLanguage : 'en'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
Vue.use(VueI18n){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
Vue.config.lang = lang{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
Object.keys(locales).forEach(function (lang) {
  Vue.locale(lang, locales[lang]){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
})
{{/i18n}}


// Filter
import Filters from './filters'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
for (let key in Filters) {
  Vue.filter(key, Filters[key]){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
}

// global components
import Icon from '@components/Icon'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
Vue.component('icon', Icon){{#if_eq lintConfig "airbnb"}};{{/if_eq}}



/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
