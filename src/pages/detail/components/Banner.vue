<template>
  <div class="banner">
    <div class="detail-banner-wrapper">
      <div class="banner-img-wrapper" @click="imgClick">
        <img class="banner-img" :src="bannerImg">
      </div>
      <div class="img-icon iconfont"><span class="icon">&#xe63b;</span><span class="num">{{imgsLength}}</span></div>
      <div class="img-title">{{sightName}}</div>
      <router-link to="/">
        <div class="detail-back iconfont">&#xe624;</div>
      </router-link>
    </div>
  </div>
</template>

<script>
import CommonGallery from 'common/gallery/Gallery'

export default {
  name: 'DetailBanner',
  data () {
    return {
      imgsLength: 1
    }
  },
  props: {
    sightName: String,
    bannerImg: String,
    sightImgs: Array
  },
  components: {
    CommonGallery
  },
  watch: {
    sightImgs (data) {
      this.imgsLength = data.length
    }
  },
  methods: {
    imgClick () {
      this.$router.push('/sightimgs')
    }
  },
  deactivated () {
    this.$bus.emit('imgShow', this.sightImgs)
  }
}
</script>

<style lang="stylus" scoped>
  .detail-banner-wrapper
    position: relative
    .banner-img-wrapper
      width: 100%
      padding-top: 55%
      .banner-img
        position: absolute
        top: 0
        width: 100%
    .img-icon
      position: absolute
      left: .26rem
      bottom: 1rem
      padding: .02rem .28rem
      border-radius: .2rem
      text-align: center
      color: #fff
      background: rgba(0, 0 , 0, .6)
      .icon
        display: inline-block
        vertical-align: middle
      .num
        font-size: .24rem
        padding-left: .1rem
        vertical-align: middle
    .img-title
      position: absolute
      bottom: .3rem
      left: .26rem
      font-size: .36rem
      color: #fff
    .detail-back
      // z-index: 1
      position: absolute
      top: .1rem
      left: .1rem
      padding: .2rem
      border-radius: 50%
      font-weight: bold
      color: #fff
      background: rgba(0, 0 , 0, .6)
</style>
