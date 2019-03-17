<template>
  <div class="information">
    <div class="introduce">
      <div class="title">
        <h1>景点简介</h1>
        <span>开放时间、贴士</span>
      </div>
      <span class="goIcon iconfont">&#xe624;</span>
    </div>
    <div class="address iconfont border-top">
      <div class="address-name title">&#xe63e;重庆市渝中区新华路151号</div>
      <span class="goIcon">&#xe624;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailInformation'
}
</script>

<style lang="stylus" scoped>
  .information >>> .goIcon
    float: right
    transform: rotate(180deg)
  .information >>> .title
    float: left
  .information
    background: #fff
    .introduce
      padding: .2rem
      .goIcon
        line-height: .64rem
      .title
        padding-left: .1rem
        h1
          padding: 0 0 .1rem
          font-size: .28rem
        span
          font-size: .24rem
          color: #9e9e9e
    .introduce::after
      content: ''
      display: block
      clear: both
    .address
      margin: 0 .2rem
      padding: .43rem 0
      span
        display: inline-block
        margin-right: 0
    .address::after
      content: ''
      display: block
      clear: both
</style>
