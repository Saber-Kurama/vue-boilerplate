/*
* 注册全局组件，全局组件以配置文件的形式写到globals.json中
*/

import Vue from 'vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import globalComponentsConfig from './globals.json'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export default {
  register () {
    globalComponentsConfig.forEach((item) => {
      Vue.component(item.tag, require(`../../components/${item.dir}/index.js`)){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    }){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  }
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
