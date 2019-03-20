<template>
  <div class="sight-imgs">
    <div class="sight-img-header boder-bottom">
      <h1 class="title">景区图片</h1>
      <div class="back-icon iconfont" @click="backRouter">&#xe624;</div>
    </div>
    <div class="sight-imgs-wrapper" ref="wrapper">
      <div class="sight-content">
        <div class="img-wrapper" v-for="(item, index) of sightImgs" :key="index" ref="img">
          <img class="img" @click="imgClick" @touchstart="imgTouch" :src="item">
        </div>
      </div>
    </div>
    <fade-animation><common-gallery v-if="galleryShow" @close="imgClick" :sightImgs="sightImgs" :imgIndex="imgIndex">
    </common-gallery></fade-animation>
  </div>
</template>

<script>
import CommonGallery from 'common/gallery/Gallery'
import FadeAnimation from 'common/fade/FadeAnimation'
import Bscroll from 'better-scroll'

export default {
  name: 'DetailSightImgs',
  data () {
    return {
      galleryShow: false,
      imgIndex: 0,
      sightImgs: []
    }
  },
  components: {
    CommonGallery,
    FadeAnimation
  },
  methods: {
    backRouter () {
      this.$router.go(-1)
    },
    imgClick () {
      this.galleryShow = !this.galleryShow
    },
    imgTouch (e) {
      this.$refs.img.forEach((item, index) => {
        let _this = this
        item.onclick = function () {
          _this.imgIndex = index
        }
      })
    }
  },
  created () {
    this.$bus.on('imgShow', (imgs) => {
      this.sightImgs = imgs
    })
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper, {click: true})
  },
  deactivated () {
    this.$bus.off('imgShow')
  }
}
</script>

<style lang="stylus" scoped>
  .sight-img-header
    position: relative
    height: .86rem
    .title
      font-size: .32rem
      line-height: .86rem
      text-align: center
    .back-icon
      position: absolute
      top: 0
      left: .2rem
      line-height: .86rem
      font-size: .36rem
      font-weight: bold
  .sight-imgs-wrapper
    overflow: hidden
    position: absolute
    top: .86rem
    left: 0
    bottom: 0
    right: 0
    .sight-content
      display: flex
      flex-wrap: wrap
      padding: .1rem .1rem 0
      background: #f5f5f5
      .img-wrapper
        box-sizing: border-box
        width: 50%
        height: 0
        padding: .04rem .04rem 34.28%
        .img
          width: 100%
</style>
