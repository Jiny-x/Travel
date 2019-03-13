<template>
  <div class="search">
    <div class="search-wrapper">
      <input class="search-input" type="text" placeholder="输入城市" v-model="inputValue">
    </div>
    <div class="list-wrapper" v-show="this.inputValue" ref="listWrapwer">
      <ul>
        <li class="item border-bottom" v-for="(item,index) of this.valueList" :key="index" @click="cityClick(item.name)">{{ item.name }}</li>
        <li class="item" v-show="noValue">未找到匹配项</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'

export default {
  name: 'CitySearch',
  data () {
    return {
      inputValue: '',
      valueList: [],
      timer: null,
      noValue: false
    }
  },
  props: {
    cities: Object
  },
  methods: {
    cityClick (city) {
      this.$store.commit('changeCity', city)
      this.$router.push('/')
      this.inputValue = ''
    }
  },
  watch: {
    inputValue () {
      if (!this.inputValue) {
        this.valueList = []
        return
      }
      if (this.timer) {
        clearTimeout(this.timer)
      }
      this.timer = setTimeout(() => {
        const wordList = []
        for (let i in this.cities) {
          this.cities[i].forEach((item) => {
            if (item.spell.indexOf(this.inputValue) > -1 ||
              item.name.indexOf(this.inputValue) > -1) {
              wordList.push(item)
            }
          })
        }
        this.valueList = wordList
        if (!this.valueList.length) {
          this.noValue = !this.valueList.length
        }
      }, 100)
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.listWrapwer, {click: true})
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .search
    .search-wrapper
      height: .86rem
      line-height: .86rem
      background: $bgColor
      text-align: center
      .search-input
        box-sizing: border-box
        width: 95%
        height: .6rem
        padding: .2rem
        border-radius: .06rem
        text-align: center
      .search-input::-webkit-input-placeholder
        color: #ccc
    .list-wrapper
      position: absolute
      overflow: hidden
      top: 1.72rem
      left: 0
      right: 0
      bottom: 0
      width: 100%
      background: #ffffff
      z-index: 1
      .item
        padding: .2rem .28rem

</style>
