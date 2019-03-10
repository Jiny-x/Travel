<template>
  <div class="head-wrapper">
    <router-link to="/">
      <div class="iconfont back-left">&#xe624;</div>
    </router-link>
    <h3 class="head-title">城市选择</h3>
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .head-wrapper
    position: relative
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
      left: 0
    .head-title
      font-size: .32rem
</style>
