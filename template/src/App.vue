<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}
</script>
<style lang="scss">
@import "./assets/scss/style.scss";
</style>
