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
  props: {
    weekendSight: Array
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
