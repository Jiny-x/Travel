<template>
  <div class="gallery" @click="galleryClick">
    <div class="gallery-img">
      <swiper :options="swiperOptions">
        <swiper-slide v-for="(item, index) of sightImgs" :key="index">
          <img class="img" :src="item">
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonGallery',
  data () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observer: true,
        observeParents: true,
        initialSlide: 1,
        speed: 150
      }
    }
  },
  props: {
    sightImgs: {
      type: Array
    },
    imgIndex: Number
  },
  methods: {
    galleryClick () {
      this.$emit('close')
    }
  },
  watch: {
    imgIndex: function () {
      this.swiperOptions.initialSlide = this.imgIndex
      console.log(this.swiperOptions.initialSlide)
    }
  }
}
</script>

<style lang="stylus" scoped>
  .gallery-img >>> .swiper-container
    overflow: inherit
  .gallery
    display: flex
    flex-direction: column
    justify-content: center
    position: fixed
    top: 0
    right: 0
    bottom: 0
    left: 0
    background: #000
    .gallery-img
      width: 100%
      height: 0
      padding-bottom: 68.57%
      .img
        width: 100%
    .swiper-pagination
      bottom: -2rem
      color: #fff
</style>
