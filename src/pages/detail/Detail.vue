<template>
  <div class="detail">
    <detail-header></detail-header>
    <detail-banner :sightName="sightName" :bannerImg="bannerImg" :sightImgs="sightImgs"></detail-banner>
    <detail-inforamtion></detail-inforamtion>
    <detail-tickets :tickets="tickets"></detail-tickets>
  </div>
</template>

<script>
import axios from 'axios'
import DetailHeader from './components/Header'
import DetailBanner from './components/Banner'
import DetailInforamtion from './components/Information'
import DetailTickets from './components/tickets'

export default {
  name: 'Detail',
  data () {
    return {
      sightName: '',
      bannerImg: '',
      sightImgs: [],
      tickets: []
    }
  },
  components: {
    DetailBanner,
    DetailInforamtion,
    DetailTickets,
    DetailHeader
  },
  methods: {
    getDetailInfo () {
      axios.get('/api/detail.json').then(this.getDetailInfoSucc)
    },
    getDetailInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.sightName = data.sightName
        this.bannerImg = data.bannerImg
        this.sightImgs = data.sightImgs
        this.tickets = data.ticketsList.tickets
      }
    }
  },
  created () {
    this.getDetailInfo()
  }
}
</script>

<style lang="stylus" scoped>
  .detail
    background: #f5f5f5
</style>
