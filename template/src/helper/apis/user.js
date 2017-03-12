import $ajax from '../ajax'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import { serverUrl } from '../utils'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export default {
  login (data) {
    return $ajax.post(serverUrl('login'), data){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  },
  logout () {
    return $ajax.get(serverUrl('logout')){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  }
}
