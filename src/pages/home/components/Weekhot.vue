<template>
  <div class="weekhot-wrapper">
    <div class="weekhot-head">
      <div class="weekhot-title-wrapper">
        <span class="weekhot-title-icon iconfont">&#xe664;</span>
        <h3 class="weekhot-title">本周热门榜单</h3>
      </div>
      <div class="all-list">
        全部榜单<span class="all-list-icon iconfont">&#xe624;</span>
      </div>
    </div>
    <ul class="weekhot-item-wrapper">
      <li class="weekhot-item" v-for="item of sight" :key="item.id">
        <img class="weekhot-item-img" :src="item.imgUrl">
        <h5 class="weekhot-tiem-title">{{item.title}}</h5>
        <div class="price-wrapper">
          <span class="price">¥{{item.price}}</span><span class="price-state">起</span>
        </div>
        <div class="weekhot-top" v-if="item.topIconShow">
          <img :src="item.topIcon">
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekhot',
  data () {
    return {
      sight: [
        {
          id: '0001',
          title: '重庆园博园',
          price: '4.3',
          hits: '900',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1711/c7/c79ecb5075f17c53a3.img.jpg_250x250_e5ff093e.jpg'
        },
        {
          id: '0002',
          title: '重庆欢乐谷',
          price: '150',
          hits: '800',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1805/ad/ad507355a167f587a3.img.jpg_250x250_608b4e13.jpg'
        },
        {
          id: '0003',
          title: '武隆天坑地缝国家地质公园',
          price: '48',
          hits: '750',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1505/be/be4802e10f3b3107.water.jpg_250x250_45ab93e6.jpg'
        },
        {
          id: '0004',
          title: '重庆长江索道',
          price: '28',
          hits: '700',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1805/ad/ad507355a167f587a3.img.jpg_250x250_608b4e13.jpg'
        },
        {
          id: '0005',
          title: '洪崖洞',
          price: '48',
          hits: '650',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1409/12/ed83b9bb54ccc7ff1f0989a7ebc2e312.jpg_250x250_fa63b5e9.jpg'
        },
        {
          id: '0006',
          title: '重庆两江夜游',
          price: '108',
          hits: '600',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1810/36/36ed80c6e147d019a3.img.png_250x250_d039f35c.png'
        },
        {
          id: '0007',
          title: '梦幻奥陶纪',
          price: '48',
          hits: '560',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1505/be/be4802e10f3b3107.water.jpg_250x250_45ab93e6.jpg'
        }
      ],
      topIconList: [
        'http://img1.qunarzz.com/piao/fusion/1710/ab/159673b63e6ca702.png',
        'http://img1.qunarzz.com/piao/fusion/1710/2d/36d0c4adaebbbc02.png',
        'http://img1.qunarzz.com/piao/fusion/1710/67/edc47ffef9e96b02.png'
      ]
    }
  },
  mounted () {
    this.topFilter()
  },
  methods: {
    topFilter: function () {
      this.sight.forEach((item, index) => {
        if (index <= 2) {
          let listItem = this.sight[index]
          listItem.topIconShow = true
          listItem.topIcon = this.topIconList[index]
          this.sight.splice(index, 1, listItem)
        }
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  @import '~styles/varibles.styl'
  .weekhot-wrapper
    background: #fff
    margin-top: .2rem
    .weekhot-head
      height: .94rem
      line-height: .94rem
      text-align: center
      .weekhot-title-wrapper
        float: left
        margin-left: .2rem
        .weekhot-title-icon
          color: #ff8643
        .weekhot-title
          display: inline-block
          font-size: .32rem
      .all-list
        float: right
        margin-right: .2rem
        font-size: .24rem
        color: #616161
        .all-list-icon
          display: inline-block
          font-size: .24rem
          transform: rotate(180deg)
    .weekhot-item-wrapper
      width: 100%
      padding: .04rem 0 .2rem
      overflow-x: scroll
      white-space: nowrap
      text-align: center
      .weekhot-item
        position: relative
        display: inline-block
        width: 2rem
        margin: 0 .06rem
        .weekhot-item-img
          width: 100%
        .weekhot-tiem-title
          ellipsis()
        .weekhot-tiem-title
          padding: .12rem 0
          font-size: .24rem
          color: #212121
        .price
          color: $priceColor
        .price-state
          font-size: .24rem
          color: #616161
        .weekhot-top
          position: absolute
          top: -.04rem
          left: 0
          height: .4rem
          img
            height: .4rem
      .weekhot-item:first-child
        margin-left: .24rem
      .weekhot-item:last-child
        margin-right: .24rem
</style>
