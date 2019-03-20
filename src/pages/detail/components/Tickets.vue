<template>
  <div class="tickets">
    <div class="tickets-head iconfont">
      <span class="goodIcon">&#xe618;</span><span class="title">超值推荐</span>
    </div>
    <div class="ticket-wrapper border-top" v-for="(item, index) of this.tickets" :key="index">
      <div class="ticket-title-wrapper">
        <h1 class="ticket-title">{{item.title}}</h1>
        <div class="time iconfont"><span>&#xe647;</span>{{item.time}}前可订明日</div>
      </div>
      <div class="ticket-price-wrapper">
        <div class="ticket-price"><em>¥</em>{{item.price}}</div>
        <button>预定</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailTickets',
  props: {
    tickets: Array
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'

  .tickets
    margin: .2rem 0 0
    background: #fff
    .tickets-head
      height: .86rem
      line-height: .86rem
      padding-left: .1rem
      .goodIcon
        margin: 0 0 0 .1rem
        padding: .06rem
        border-radius: 50%
        font-size: .2rem
        color: #fff
        background: #ff6e6e
      .title
        padding: 0 0 0 .2rem
        font-size: .32rem
    .ticket-wrapper::after
      content: ''
      display: block
      clear: both
    .ticket-wrapper
      display: flex
      flex-wrap: nowrap
      justify-content: space-between
      margin: 0 .2rem
      padding: .2rem 0
      .ticket-title-wrapper
        width: 80%
        .ticket-title
          font-size: .3rem
          display: -webkit-box
          overflow: hidden
          text-overflow: ellipsis
          -webkit-line-clamp: 2
          -webkit-box-orient: vertical
        .time
          padding: .24rem 0
          font-size: .24rem
          color: #616161
          span
            color: $bgColor
      .ticket-price-wrapper
        box-sizing: border-box
        width: 20%
        margin-left: .2rem
        text-align: center
        .ticket-price
          color: #ffab1e
          font-size: .4rem
          font-weight: bold
          em
            font-size: .24rem
        button
          height: .6rem
          line-height: .6rem
          padding: 0 24%
          border-radius: .08rem
          font-weight: bold
          color: #ffffff
          background: #ffab1e

</style>
