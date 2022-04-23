<template>
  <div class="history-hot">
    <div class="his-hot" v-if="isShowHistory">
      <div class="hd">
        <h4>历史记录</h4>
        <van-icon name="delete-o" @click="clearFn" />
      </div>
      <div class="bd">
        <van-tag
          plain
          type="default"
          @click="tagClick(item)"
          v-for="(item, index) in searchHistoryData"
          :key="index"
          >{{ item }}</van-tag
        >
      </div>
    </div>
    <div class="his-hot">
      <div class="hd">
        <h4>热门搜索</h4>
      </div>
      <div class="bd">
        <van-tag
          plain
          type="default"
          @click="tagClick(item.keyword)"
          v-for="(item, index) in searchHotData"
          :key="index"
          >{{ item.keyword }}</van-tag
        >
      </div>
    </div>
  </div>
</template>
<script>
import { ClearHistory } from '@/request/api.js'
export default {
  props: ['searchHistoryData', 'searchHotData'],
  data () {
    return {
      isShowHistory: true
    }
  },
  methods: {
    tagClick (val) {
      this.$emit('tagClick', val)
    },
    clearFn () {
      console.log('test')
      ClearHistory().then((res) => {
        if (res.errno === 0) {
          console.log(res)
          this.$toast.success('删除成功')
          // 隐藏历史记录
          setTimeout(() => {
            this.isShowHistory = false
          }, 1000)
        }
      })
    }
  }
}
</script>
<style lang="less" scoped>
.his-hot {
  background-color: #fff;
  margin-bottom: 0.2rem;

  padding: 0.1rem;
  .hd {
    padding-top: 2%;
    display: flex;
    justify-content: space-between;
    font-size: 0.22rem;
    margin-bottom: 0.08rem;
    h4 {
      font-size: 0.2rem;
    }
  }
  .van-tag {
    padding: 0.04rem;
    margin-right: 0.1rem;
    margin-bottom: 0.08rem;
  }
}
</style>
