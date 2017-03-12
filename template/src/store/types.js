// all types
let allTypes = {
  user: {
    action: {
      fetch: 'fetch'
    },
    getter: {
      user: 'user'
    },
    mutation: {
      update: 'update'
    }
  }
}

function setPath (obj, path = [], value) {
  if (!path || !path.length) {
    return obj{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  }

  if (!obj) {
    obj = {}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  }

  let child = obj{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  let leafPathName = path.pop(){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

  path.forEach((pathName) => {
    if (!child[pathName]) {
      child[pathName] = {}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    }

    child = child[pathName]{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  })
  child[leafPathName] = value{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

  return obj{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
}

function namespacesLeafType (types, ancestors = [], sep = '.') {
  for (let key in types) {
    let value = types[key]{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    let newAncestors = ancestors.slice(){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

    newAncestors.push(key){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

    if (!value) {
      continue{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    }

    if (typeof value === 'string') {
      let path = newAncestors.slice(){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
      newAncestors.push(value){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
      let namespaceValue = newAncestors.join(sep){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

      setPath(allTypes, path, namespaceValue){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    } else {
      namespacesLeafType(value, newAncestors){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    }
  }

  return allTypes{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
}

allTypes = namespacesLeafType(allTypes){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
Object.freeze(allTypes){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

// console.log(allTypes)

export default allTypes{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
