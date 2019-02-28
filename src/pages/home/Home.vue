<template>
    <div id="home">
        <home-header></home-header>
        <home-swiper></home-swiper>
        <home-icons></home-icons>
        <home-nearby></home-nearby>
        <home-weekhot></home-weekhot>
        <home-like></home-like>
        <home-weekend></home-weekend>
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
  }
}
</script>

<style>
  #home {
    background: #f5f5f5;
  }
</style>
