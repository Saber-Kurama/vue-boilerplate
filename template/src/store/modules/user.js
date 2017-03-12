import allTypes from '../types'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import { $page } from '@helper'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

const {getter, action, mutation} = allTypes.user{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

/**
 * initial state
 * @user [object]
 *
 */
const state = {
  user: null{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}

/**
 * getters
 */
const getters = {
  [getter.user]: state => state.user{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
}

/**
 * actions
 */
const actions = {
  [action.fetch] ({ commit, state }) {
    return $page.user.getUserInfo().then((user) => {
      commit(mutation.update, {
        user
      }){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    })
  }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}

/**
 * mutations
 */
const mutations = {
  [mutation.update] (state, user) {
    state.user = user{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}

export default {
  state,
  getters,
  actions,
  mutations{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}
