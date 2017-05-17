<template>
  <el-submenu v-if="isFolder(model)" :index="model.id">
    <template slot="title">
      <i v-if="model.icon" :class="`el-icon-${model.icon}`"></i>\{{$t(model.id)}}
    </template>
    <template v-for="nav in model.children">
      <el-menu-item v-if="!isFolder(nav)" :index="nav.id">\{{$t(nav.id)}}</el-menu-item>
      <side-nav-node :model="nav"></side-nav-node>
    </template>
  </el-submenu>
</template>

<script>
export default {
  name: 'side-nav-node',
  props: {
    model: {
      type: Object,
      required: true,
      default: () => {
        return {}
      }
    }
  },
  methods: {
    isFolder (model) {
      return model.children && model.children.length{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}
</script>
