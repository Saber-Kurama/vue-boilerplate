import { $utils } from '@helper'
import types from './types'

const {getter, action, mutation} = $utils.importStoreTypes(types).{{name}}

/**
 * initial state
 * @user [object]
 *
 */
const state = {
  name: ''
}

/**
 * getters
 */
const getters = {
  [getter.name]: state => state.name
}

/**
 * actions
 */
const actions = {
  [action.updateName] ({ commit, state }, name) {
    commit(mutation.updateName, { name })
  }
}

/**
 * mutations
 */
const mutations = {
  [mutation.updateName] (state, name) {
    state.name = name
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
