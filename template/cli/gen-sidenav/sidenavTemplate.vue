<template>
  <div class="sidenav">
    {{#sidenav}}
      <ul class="sndnav">
        <li>
          <a href="javascript:;">
            {{label}}
            <span class="caret"></span>
          </a>
          <ul>
            {{#children}}
              <li>
                <router-link to="{{link}}">
                  <span>{{label}}</span>
                </router-link>
              </li>
            {{/children}}
          </ul>
        </li>
      </ul>
    {{/sidenav}}
  </div>
</template>

<script>
export default {
  name: 'side-nav',
  data () {
    return {
    }
  },
  mounted () {
    this.bindEvent()
  },
  methods: {
    bindEvent () {
      let titles = document.querySelectorAll('.nav-wrap .title')
      for (let i = 0; i < titles.length; i++) {
        titles[i].addEventListener('click', this.toggleMenu, false)
      }
    },
    toggleMenu (e) {
      e.target.parentNode.className = e.target.parentNode.className === 'nav-wrap' ? 'nav-wrap nav-collapse' : 'nav-wrap'
    }
  }
}
</script>

<style lang="scss">
@import "../../assets/scss/variables.scss";
</style>
