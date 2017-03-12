/*
* 路由跳转权限控制
*/
import { $auth } from '@helper'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export default {
  // 检查登录态
  checkLoginAuth (to, from, next) {
    if (to.meta && to.meta.ignoreAuth) {
      next(){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    } else {
      if ($auth.checkSession()) {
        next(){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
      } else {
        next({
          path: '/login'
        }){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
      }
    }
  },
  // 检查页面权限
  checkPageAuth (to, from, next) {
    if (to.meta && to.meta.ignoreAuth) {
      next(){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    } else {
      // check user auth here....
      next(){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    }
  }
}
