import Vue from 'vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import _ from 'lodash'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import Router from 'vue-router'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import beforeEachHooks from './beforeEachHooks'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import RoutesMapConfig from './routes'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import commonRoutesMap from './commonRoutes'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

Vue.use(Router){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

const routerInstance = new Router({
  mode: 'history',
  linkActiveClass: 'active',
  scrollBehavior: () => ({ y: 0 }),
  routes: RoutesMapConfig.concat(commonRoutesMap){{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

_.values(beforeEachHooks).forEach((hook) => {
  routerInstance.beforeEach(hook){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
})

export default routerInstance
