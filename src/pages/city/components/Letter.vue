<template>
  <div class="letter-wrapper">
    <div class="letter"
      v-for="(item, index) of letter"
      :key="index"
      :ref="item"
      @click="letterClick"
      @touchstart.prevent="touchEnter"
      @touchmove="touchMove"
      @touchend="touchLeave">{{ item }}</div>
  </div>
</template>

<script>
export default {
  name: 'CityLetter',
  data () {
    return {
      touchStatus: false,
      topOffset: 0,
      timer: null
    }
  },
  props: {
    cities: Object
  },
  computed: {
    letter () {
      const letter = []
      for (let i in this.cities) {
        letter.push(i)
      }
      return letter
    }
  },
  updated () {
    this.topOffset = this.$refs['A'][0].offsetTop
  },
  methods: {
    letterClick (e) {
      this.$emit('letterClick', e.target.innerText)
    },
    touchEnter (e) {
      this.touchStatus = true
    },
    touchMove (e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          const touchTop = e.touches[0].clientY - 86
          const index = Math.floor((touchTop - this.topOffset) / 16)
          if (index >= 0 && index < this.letter.length) {
            this.$emit('letterClick', this.letter[index])
          }
        }, 16)
      }
    },
    touchLeave () {
      this.touchStatus = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl';
  .letter-wrapper
    display: flex
    flex-direction: column
    justify-content: center
    position: absolute
    top: 1.72rem
    right: 0
    bottom: 0
    width: .4rem
    min-height: 10.2rem
    color: $bgColor
    .letter
      font-size: .24rem
      line-height: .32rem
      text-align: center
</style>
