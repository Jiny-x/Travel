<template>
  <div class="like">
    <div class="like-head">
      <span class="iconfont like-icon">&#xe641;</span><span>猜你喜欢</span>
    </div>
    <ul class="item-list-wrapper">
      <router-link tag="li" :to="'/Detail/' + item.id" class="item-wrapper border-bottom" v-for="item of sight" :key="item.id">
        <div class="item-img">
          <img :src="item.imgUrl">
          <div class="item-img-mes"></div>
        </div>
        <div class="item-message">
          <div class="item-title">{{ item.title }}</div>
          <div class="item-estimate">
            <div class="star">*****</div>
            <span>{{ item.hits }}条评论</span>
          </div>
          <div class="item-price">
            <div class="price-wrapper">
              <span>¥</span><span class="price">{{ item.price }}</span><span class="price-desc">起</span>
            </div>
            <div class="seat">{{ item.seat }}</div>
          </div>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeLike',
  props: {
    sight: Array
  },
  data () {
    return {
      ticketMessage: [
        'http://img1.qunarzz.com/piao/fusion/1710/ab/159673b63e6ca702.png',
        'http://img1.qunarzz.com/piao/fusion/1710/2d/36d0c4adaebbbc02.png',
        'http://img1.qunarzz.com/piao/fusion/1710/67/edc47ffef9e96b02.png'
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  @import '~styles/varibles.styl'
  .like
    margin-top: .2rem
    background: #fff
    .like-head
      height: .94rem
      line-height: .94rem
      font-size: .32rem
      .like-icon
        margin: 0 .1rem 0 .2rem
        color: #ff6052
    .item-wrapper
      margin-left: .24rem
      padding: .2rem .4rem .2rem 0
      .item-img
        float: left
        overflow: hidden
        width: 2rem
        height: 2rem
        img
          height: 100%
      .item-message
        overflow: hidden
        height: 2rem
        padding-left: .2rem
        .item-title
          padding-top: .2rem
          font-size: .32rem
          ellipsis()
        .item-estimate
          padding: .32rem 0
          .star
            display: inline-block
            margin-right: .4rem
          span
            font-size: .24rem
            color: #616161
        .item-price
          .price-wrapper
            float: left
            font-size: .28rem
            color: $priceColor
            .price
              font-size: .4rem
            .price-desc
              color: #616161
          .seat
            float: right
            display: inline-block
            color: #616161
</style>
