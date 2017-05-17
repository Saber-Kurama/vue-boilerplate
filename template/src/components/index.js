import globalComponents from '@components/_global'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export const globalComponentsRegister = function () {
  globalComponents.register(){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
