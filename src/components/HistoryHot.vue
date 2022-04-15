<template>
  <div class="history-hot">
    <div class="his-hot">
      <div class="hd">
        <h4>历史记录</h4>
        <van-icon name="delete-o" />
      </div>
      <div class="bd">
        <van-tag
          plain
          type="default"
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
          v-for="(item, index) in searchHotData"
          :key="index"
          >{{ item.keyword }}</van-tag
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['searchHistoryData', 'searchHotData'],
  data () {
    return {}
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
