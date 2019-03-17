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
      <router-link tag="li" :to="'/detail/' + item.id" class="weekhot-item" v-for="(item, index) of topList" :key="item.id">
        <img class="weekhot-item-img" :src="item.imgUrl">
        <h5 class="weekhot-tiem-title">{{item.title}}</h5>
        <div class="price-wrapper">
          <span class="price">¥{{item.price}}</span><span class="price-state">起</span>
        </div>
        <div class="weekhot-top" v-if="index < 3">
          <img :src="topIconList[index]">
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekhot',
  props: {
    topList: Array
  },
  data () {
    return {
      topSight: [],
      topIconList: [
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
