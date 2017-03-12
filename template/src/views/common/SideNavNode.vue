<template>
  <el-submenu v-if="isFolder(this.model)" :index="model.label">
    <template slot="title">
      <i v-if="model.icon" :class="'el-icon-' + model.icon"></i>\{{model.label}}
    </template>
    <template v-for="nav in model.children">
      <el-menu-item v-if="!isFolder(nav)" :index="nav.url">\{{nav.label}}</el-menu-item>
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
