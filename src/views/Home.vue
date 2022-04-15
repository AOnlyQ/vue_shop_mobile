<template>
  <div class="home">
    <van-search
      v-model="SearchVal"
      placeholder="请输入搜索关键词"
      shape="round"
      @click="$router.push('/home/searchPopup')"
    />
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="item in banner" :key="item.id">
        <!-- v-lazy="item.image_url"  -->
        <img :src="item.image_url" width="100%" />
      </van-swipe-item>
    </van-swipe>
    <transition name="van-slide-right">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import { GetHomeLists } from '@/request/api.js'
export default {
  name: 'Home',
  data () {
    return {
      SearchVal: '',
      banner: []
    }
  },
  components: {},
  created () {
    // console.log('crestes')
    GetHomeLists()
      .then((res) => {
        // console.log('res', res)
        const { banner } = res.data
        this.banner = banner
      })
      .catch((err) => {
        // console.log('Error')
        console.log(err)
      })
  },
  methods: {}
}
</script>
