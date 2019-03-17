<template>
  <div class="tickets">
    <div class="tickets-head iconfont">
      <span class="goodIcon">&#xe618;</span><span class="title">超值推荐</span>
    </div>
    <div class="ticket-wrapper border-top">
      <div class="ticket-title-wrapper">
        <h1 class="ticket-title">长江索道往返索道票成人票</h1>
        <div class="time iconfont"><span>&#xe647;</span>23:59前可订明日</div>
      </div>
      <div class="ticket-price-wrapper">
        <div class="ticket-price"><em>¥</em>28.0</div>
        <button>预定</button>
      </div>
    </div>
    <div class="ticket-wrapper border-top">
      <div class="ticket-title-wrapper">
        <h1 class="ticket-title">长江索道往返索道票成人票</h1>
        <div class="time iconfont"><span>&#xe647;</span>23:59前可订明日</div>
      </div>
      <div class="ticket-price-wrapper">
        <div class="ticket-price"><em>¥</em>28.0</div>
        <button>预定</button>
      </div>
    </div>
    <div class="ticket-wrapper border-top">
      <div class="ticket-title-wrapper">
        <h1 class="ticket-title">长江索道往返索道票成人票</h1>
        <div class="time iconfont"><span>&#xe647;</span>23:59前可订明日</div>
      </div>
      <div class="ticket-price-wrapper">
        <div class="ticket-price"><em>¥</em>28.0</div>
        <button>预定</button>
      </div>
    </div>
    <div class="ticket-wrapper border-top">
      <div class="ticket-title-wrapper">
        <h1 class="ticket-title">长江索道往返索道票成人票</h1>
        <div class="time iconfont"><span>&#xe647;</span>23:59前可订明日</div>
      </div>
      <div class="ticket-price-wrapper">
        <div class="ticket-price"><em>¥</em>28.0</div>
        <button>预定</button>
      </div>
    </div>
    <div class="ticket-wrapper border-top">
      <div class="ticket-title-wrapper">
        <h1 class="ticket-title">长江索道往返索道票成人票</h1>
        <div class="time iconfont"><span>&#xe647;</span>23:59前可订明日</div>
      </div>
      <div class="ticket-price-wrapper">
        <div class="ticket-price"><em>¥</em>28.0</div>
        <button>预定</button>
      </div>
    </div>
    <div class="ticket-wrapper border-top">
      <div class="ticket-title-wrapper">
        <h1 class="ticket-title">长江索道往返索道票成人票</h1>
        <div class="time iconfont"><span>&#xe647;</span>23:59前可订明日</div>
      </div>
      <div class="ticket-price-wrapper">
        <div class="ticket-price"><em>¥</em>28.0</div>
        <button>预定</button>
      </div>
    </div>
    <div class="ticket-wrapper border-top">
      <div class="ticket-title-wrapper">
        <h1 class="ticket-title">长江索道往返索道票成人票</h1>
        <div class="time iconfont"><span>&#xe647;</span>23:59前可订明日</div>
      </div>
      <div class="ticket-price-wrapper">
        <div class="ticket-price"><em>¥</em>28.0</div>
        <button>预定</button>
      </div>
    </div>
    <div class="ticket-wrapper border-top">
      <div class="ticket-title-wrapper">
        <h1 class="ticket-title">长江索道往返索道票成人票</h1>
        <div class="time iconfont"><span>&#xe647;</span>23:59前可订明日</div>
      </div>
      <div class="ticket-price-wrapper">
        <div class="ticket-price"><em>¥</em>28.0</div>
        <button>预定</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailTickets'
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
      margin: 0 .2rem
      padding: .2rem 0
      .ticket-title-wrapper
        float: left
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
        float: right
        text-align: center
        .ticket-price
          color: #ff9716
          font-size: .4rem
          font-weight: bold
          em
            font-size: .24rem
        button
          padding: .1rem .4rem
          border-radius: .08rem
          font-weight: bold
          color: #ffffff
          background: #ff9716

</style>
