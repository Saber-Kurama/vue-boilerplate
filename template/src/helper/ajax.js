import Request from 'superagent'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import $q from 'q'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import _ from 'lodash'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

const defaultHeader = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
}

// const defaultOptions = {}
function requestHandle (url, method = 'get', params = {}, query = {}, op = {}) {
  let defer = $q.defer(){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  // op = _.assignIn({}, defaultOptions, op)
  Request(method, url)
    .set(defaultHeader)
    .query(query)
    // .type('form')
    .send(params)
    .end((err, res) => {
      if (res && (res.unauthorized || res.statusCode === 401)) {
        window.location.href = '/login'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
      }
      if (err) {
        defer.reject(err){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
      } else if (res.body && !res.body.status) {
        defer.resolve(res.body)
      } else {
        defer.reject(res.body){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
      }
    })

  return defer.promise{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
}

var res = {
  ajax: requestHandle
}

res = _.assignIn(res, {
  post: function (url, params, op) {
    return res.ajax(url, 'post', params, op){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  },
  get: function (url, query, op) {
    return res.ajax(url, 'get', {}, query, op){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  },
  put: function (url, params, op) {
    return res.ajax(url, 'PUT', params, op){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  },
  patch: function (url, params, op) {
    return res.ajax(url, 'PATCH', params, op){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  },
  delete: function (url, params, op) {
    return res.ajax(url, 'DELETE', params, op){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  },
  create: function (url, params, op) {
    return res.ajax(url, 'post', params, op){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  }
})

export default res

