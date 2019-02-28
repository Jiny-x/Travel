<template>
  <div class="like">
    <div class="like-head">
      <span class="iconfont like-icon">&#xe641;</span><span>猜你喜欢</span>
    </div>
    <ul class="item-list-wrapper">
      <li class="item-wrapper border-bottom" v-for="item of sight" :key="item.id">
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
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeLike',
  data () {
    return {
      sight: [
        {
          id: '0009',
          title: '重庆欢乐海底世界',
          price: '110',
          seat: '渝中区',
          hits: '900',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1609/2b/2b0dd15479a86c86a3.img.jpg_200x200_d4d013fb.jpg'
        },
        {
          id: '0001',
          title: '重庆园博园',
          price: '4.3',
          seat: '渝中区',
          hits: '900',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1711/c7/c79ecb5075f17c53a3.img.jpg_250x250_e5ff093e.jpg'
        },
        {
          id: '0002',
          title: '重庆欢乐谷',
          price: '150',
          seat: '渝中区',
          hits: '800',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1805/ad/ad507355a167f587a3.img.jpg_250x250_608b4e13.jpg'
        },
        {
          id: '0003',
          title: '武隆天坑地缝国家地质公园',
          price: '48',
          seat: '渝中区',
          hits: '750',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1505/be/be4802e10f3b3107.water.jpg_250x250_45ab93e6.jpg'
        },
        {
          id: '0004',
          title: '重庆长江索道',
          price: '28',
          seat: '渝中区',
          hits: '700',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1805/ad/ad507355a167f587a3.img.jpg_250x250_608b4e13.jpg'
        },
        {
          id: '0005',
          title: '洪崖洞',
          price: '48',
          seat: '渝中区',
          hits: '650',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1409/12/ed83b9bb54ccc7ff1f0989a7ebc2e312.jpg_250x250_fa63b5e9.jpg'
        },
        {
          id: '0006',
          title: '重庆两江夜游',
          price: '108',
          seat: '渝中区',
          hits: '600',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1810/36/36ed80c6e147d019a3.img.png_250x250_d039f35c.png'
        },
        {
          id: '0007',
          title: '梦幻奥陶纪',
          price: '48',
          seat: '渝中区',
          hits: '560',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1505/be/be4802e10f3b3107.water.jpg_250x250_45ab93e6.jpg'
        }
      ],
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
