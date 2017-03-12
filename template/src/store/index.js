import Vue from 'vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import Vuex from 'vuex'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import actions from './actions'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import getters from './getters'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import createLogger from 'vuex/dist/logger'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import createPersistedState from 'vuex-persistedstate'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

// modules
// import user from './modules/user'
import modules from './modules/index'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
// install
Vue.use(Vuex){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

const debug = process.env.NODE_ENV !== 'production'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export default new Vuex.Store({
  actions,
  getters,
  modules,
  strict: debug,
  plugins: debug ? [createLogger(), createPersistedState({
    key: '{{name}}_store'
  })] : [createPersistedState()]
})



