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
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        autoplay: 0
      },
      iconList: [
        {
          id: '0101',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
          desc: '景点门票',
          url: ''
        },
        {
          id: '0102',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
          desc: '一日游',
          url: ''
        },
        {
          id: '0103',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
          desc: '重庆必游',
          url: ''
        },
        {
          id: '0104',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/bd/9f7b9b2b60c1502.png',
          desc: '踏青赏花',
          url: ''
        },
        {
          id: '0105',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/fa/2548667cb6e902.png',
          desc: '室内场馆',
          url: ''
        },
        {
          id: '0106',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/89/55083b0f1951f302.png',
          desc: '两江夜游',
          url: ''
        },
        {
          id: '0107',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/96/c70f1e85ae4a4f02.png',
          desc: '神秘武隆',
          url: ''
        },
        {
          id: '0108',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/ab/6f7d6e44963c9302.png',
          desc: '泡温泉',
          url: ''
        },
        {
          id: '0109',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/97/02f5043b51b2102.png',
          desc: '奥陶记',
          url: ''
        }
      ]
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
