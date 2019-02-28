<template>
    <div id="home">
        <home-header :city="city"></home-header>
        <home-swiper :swiperList="swiperList"></home-swiper>
        <home-icons :iconList="iconList"></home-icons>
        <home-nearby></home-nearby>
        <home-weekhot :topList="topList"></home-weekhot>
        <home-like :sight="sight"></home-like>
        <home-weekend :weekendSight="weekendSight"></home-weekend>
    </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeNearby from './components/Nearby'
import HomeWeekhot from './components/Weekhot'
import HomeLike from './components/Like'
import HomeWeekend from './components/Weekend'
import axios from 'axios'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeNearby,
    HomeWeekhot,
    HomeLike,
    HomeWeekend
  },
  data () {
    return {
      city: '',
      swiperList: [],
      iconList: [],
      topList: [],
      sight: [],
      weekendSight: []
    }
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/index.json').then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.city = data.city
        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.topList = data.topList
        this.sight = data.sight
        this.weekendSight = data.weekendSight
      }
    }
  },
  mounted () {
    this.getHomeInfo()
  }
}
</script>

<style>
  #home {
    background: #f5f5f5;
  }
</style>
