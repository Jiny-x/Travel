<template>
    <div id="home">
        <home-header></home-header>
        <home-swiper></home-swiper>
        <home-icons></home-icons>
        <home-nearby></home-nearby>
        <home-weekhot></home-weekhot>
        <home-recommend></home-recommend>
    </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeNearby from './components/Nearby'
import HomeWeekhot from './components/Weekhot'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeNearby,
    HomeWeekhot
  }
}
</script>

<style>
  #home {
    background: #f5f5f5;
  }
</style>
