<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <!-- <keep-alive>
      <router-view v-if="!$route.meta.noKeepAlive"></router-view>
    </keep-alive> -->
    <!-- <router-view v-if="$route.meta.noKeepAlive"></router-view> -->
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style>

</style>
