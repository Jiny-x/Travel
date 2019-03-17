<template>
  <div class="head-wrapper" v-show="showHead" :style="style">
    <router-link to="/">
      <div class="iconfont back-left">&#xe624;</div>
    </router-link>
    <h3 class="head-title">重庆长江索道</h3>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showHead: true,
      style: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      const top = document.documentElement.scrollTop
      if (top > 30) {
        this.showHead = true
        let opacity = top / 200
        this.style = opacity > 1 ? 1 : {opacity}
      } else {
        this.showHead = false
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  },
  deactivated () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .head-wrapper
    position: fixed
    top: 0
    z-index: 1
    width: 100%
    height: .86rem
    line-height: .86rem
    text-align: center
    color: #fff
    background: $bgColor
    .back-left
      width: .64rem
      font-size: .36rem
      font-weight: bold
      color: #fff
      position: absolute
      left: .16rem
    .head-title
      font-size: .32rem
</style>
