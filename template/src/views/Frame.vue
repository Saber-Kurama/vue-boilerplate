<template>
  <div class="page-frame">
    <header-component></header-component>
    <div class="frame-content">
      <side-nav></side-nav>
      <main>
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>
<script>
import SideNav from './common/SideNav'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import HeaderComponent from './common/Header'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export default{
  name: 'Frame',
  props: {
  },
  data () {
    return {
    }
  },
  created () {
  },
  components: {
    SideNav,
    HeaderComponent{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  },
  methods: {
  }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}
</script>

<style lang="scss">
.page-frame {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  .frame-content {
    flex: 1;
    display: flex;
  }
  main {
    flex: 1;
  }
}
</style>
