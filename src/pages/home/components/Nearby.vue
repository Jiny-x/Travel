<template>
  <ul class="near-wrapper">
    <li class="near-list near-list-border">
      <span class="iconfont near-list-icon">&#xe63e;</span>
      <span class="near-list-title">附近</span>
    </li>
    <li class="near-list">
      <span class="iconfont near-list-icon">&#xe633;</span>
      <span class="near-list-title">必游榜单</span>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'HomeNearby'
}
</script>

<style lang="stylus" scoped>
  .near-wrapper
    width: 100%
    height: .98rem
    background: #fff
    color: #212121
    border-top: solid .02rem #e0e0e0
    .near-list
      position: relative
      float: left
      width: 50%
      height: .98rem
      line-height: .98rem
      text-align: center
      .near-list-icon
        color: #616161
        font-size: .32rem
    .near-list-border::after
      position: absolute
      content: ''
      width: .02rem
      height: 100%
      right: 0
      background: #e0e0e0
</style>
