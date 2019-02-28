<template>
  <div class="weekend">
    <div class="weekend-head">周末去哪儿</div>
    <ul class="item-list-wrapper">
      <li class="weekend-item-wrapper" v-for="item of weekendSight" :key="item.id">
        <div class="img-wrapper">
          <img :src="item.imgUrl">
        </div>
        <div class="title">{{ item.title }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data () {
    return {
      weekendSight: [
        {
          id: '0001',
          title: '重庆夜景大赏',
          message: '',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1812/4c/33ad31d025fef.jpg_r_640x214_7821b813.jpg'
        },
        {
          id: '0002',
          title: '重庆优质汤泉',
          message: '',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1505/5f/276ed6784d25ee.jpg_r_640x214_2193082e.jpg'
        },
        {
          id: '0003',
          title: '重庆必打卡',
          message: '',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1505/53/4bcd11cc3a5374.jpg_r_640x214_988a4cee.jpg'
        },
        {
          id: '0004',
          title: '重庆大美古镇',
          message: '',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1505/48/f117e9b3bf582a.jpg_r_640x214_b8145711.jpg'
        },
        {
          id: '0005',
          title: '本地人带你耍',
          message: '',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1506/1e/f97881dbd07520.jpg_r_640x214_f8c25916.jpg'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .weekend-head
    height: .8rem
    margin-left: .28rem
    line-height: .8rem
  .weekend-item-wrapper
    background: #fff
    .img-wrapper
      overflow: hidden
      height: 0
      padding-bottom: 37.4375%
      img
        width: 100%
    .title
      height: .8rem
      line-height: .8rem
      padding-left: .24rem
</style>
