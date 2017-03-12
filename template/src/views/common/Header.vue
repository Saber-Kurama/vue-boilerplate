<template>
  <header class="header">
    <h1 class="logo">
      <a href="javascript:;">
        <img src="../../assets/images/logo.png" alt="dji">
        <span class="title">{{ name }}</span>
      </a>
    </h1>
    <a href="javascript:;" class="menu" @click="toggleMenu" >
      <span></span>
    </a>

    <div class="operate">
      <a href="javascript:;" class="account">
        <icon name="account"></icon>
        <span>\{{user.username}}</span>
        <span class="caret"></span>
      </a>
      <ul class="dropmenu">
        {{#i18n}}
        <li>
          <a @click="lang('zh')" href="javascript:;">中文</a>
          |
          <a @click="lang('en')" href="javascript:;">English</a>
        </li>
        {{/i18n}}
        <li>
          <a href="javascript:;" @click="logout">注销</a>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
import Vue from 'vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import Cookies from 'js-cookie'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import { $page } from '@helper'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import { mapGetters } from 'vuex'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import types from '@store/types'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
export default {
  name: 'header',
  data () {
    return {
    }
  },
  components: {
  },
  computed: {
    // or: this.$store.getters[types.user.getter.user]
    ...mapGetters({
      'user': types.user.getter.user{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    })
  },
  methods: {
    lang (lang) {
      Cookies.set('language', lang){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
      Vue.config.lang = lang{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    },
    toggleMenu () {
      let app = document.getElementById('app'){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
      app.className = !app.className ? 'menu-expand' : ''{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    },
    logout () {
      return $page.user.logout().then(result => {
        Cookies.remove('isLogin'){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
        this.$router.push('/login'){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
      })
    }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}
</script>
