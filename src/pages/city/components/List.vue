<template>
  <div class="city-list-wrapper" ref="wrapper">
    <div>
      <div class="city hot-city">
        <div class="title">热门城市</div>
        <div class="item-wrapper">
          <div class="item" v-for="item of hotCities" :key="item.id" @click="cityClick(item.name)">{{ item.name }}</div>
        </div>
      </div>
      <div class="city" v-for="(item, key) of cities" :key="key" :ref="key">
        <div class="title">{{ key }}</div>
        <div class="item-wrapper">
          <div class="item" v-for="innerItem of item" :key="innerItem.id" @click="cityClick(innerItem.name)">{{ innerItem.name }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'List',
  props: {
    cities: Object,
    hotCities: Array,
    letter: String
  },
  methods: {
    cityClick (city) {
      this.$store.commit('changeCity', city)
      this.$router.push('/')
    }
  },
  watch: {
    letter () {
      if (this.letter) {
        const ele = this.$refs[this.letter][0]
        this.scroll.scrollToElement(ele)
      }
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper)
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl';
  .city-list-wrapper
    position: absolute
    top: 1.72rem
    right: 0
    bottom: 0
    left: 0
    overflow: hidden
    .title
      height: .6rem
      line-height: .6rem
      font-size: .24rem
      padding-left: .2rem
      background: #f5f5f5
    .item-wrapper
      position: relative
      overflow: hidden
      .item
        float: left
        box-sizing: border-box
        width: 33.33%
        height: .86rem
        line-height: .86rem
        text-align: center
        border-bottom: .02rem solid #ccc
        margin-bottom: -.02rem
        ellipsis()
    .item-wrapper::before
      content: ''
      position: absolute
      left: 33.33%
      width: .02rem
      height: 100%
      background: #ccc
    .item-wrapper::after
      content: ''
      position: absolute
      left: 66.66%
      width: .02rem
      height: 100%
      background: #ccc
</style>
