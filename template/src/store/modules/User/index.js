import { $page, $utils } from '@helper'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import types from './types'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

const {getter, action, mutation} = $utils.importStoreTypes(types).user{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

/**
 * initial state
 * @user [object]
 *
 */
const state = {
  user: null
}

/**
 * getters
 */
const getters = {
  [getter.user]: state => state.user
}

/**
 * actions
 */
const actions = {
  [action.fetch] ({ commit, state }) {
    return $page.user.getUserInfo().then((user) => {
      commit(mutation.update, {
        user
      })
    }){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  }
}

/**
 * mutations
 */
const mutations = {
  [mutation.update] (state, user) {
    state.user = user{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
