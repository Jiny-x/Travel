<template>
  <div class="icon-wrapper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img-wrapper">
            <img class="icon-img" :src="item.imgUrl">
          </div>
          <h4 class="icon-title">{{item.desc}}</h4>
        </div>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  props: {
    iconList: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        autoplay: 0
      }
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
.icon-wrapper >>> .swiper-container {
  height: 3.7rem
}
.icon-wrapper >>> .swiper-pagination-bullet {
  background: rgba(144,144,144,0.8);
  width: 6px;
  height: 6px;
}
.icon-wrapper >>> .swiper-pagination-bullet-active {
  background: rgba(0,175,190,.8);
}

.icon-wrapper >>> .swiper-pagination-bullets {
  bottom: .1rem;
}
.icon-wrapper {
  padding-top: 0.1rem;
  background: #fff;

  .icon {
    position: relative;
    float: left;
    width: 25%;
    height: 1.5rem;
    padding-top: 0.1rem;
    text-align: center;

    .icon-img-wrapper {
      display: inline-block;
      width: 1.1rem;
      height: 1.1rem;

      .icon-img {
        width: 1.1rem;
        height: 1.1rem;
        background: 0;
      }
    }

    .icon-title {
      background: 0;
      margin: 0.1rem auto 0;
      font-size: 0.28rem;
      color: #212121;
      ellipsis()
    }
  }
}
</style>
