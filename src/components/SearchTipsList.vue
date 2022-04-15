<template>
  <div>
    <van-list finished-text="没有更多了" :finished="finished">
      <van-cell
        v-for="(item, index) in searchTipsArr"
        :key="index"
        :title="item"
      />
    </van-list>
  </div>
</template>
<script>
export default {
  props: ['searchTipsArr'],
  data () {
    return {
      finished: true
    }
  }
}
</script>
<style lang="less" scoped>
</style>
