<template>
  <div class="sidenav">
    <el-menu router unique-opened>
      <template v-for="tab in sideNav">
        <side-nav-node :model="tab"></side-nav-node>
      </template>
    </el-menu>
  </div>
</template>

<script>
import SideNavNode from './SideNavNode'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import SIDENAV from '@constants/sideNav'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export default {
  name: 'side-nav',
  data () {
    return {
      sideNav: Object.freeze(SIDENAV){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    }
  },
  components: {
    SideNavNode
  }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}
</script>

<style lang="scss">
@import "../../assets/scss/variables.scss";
</style>
