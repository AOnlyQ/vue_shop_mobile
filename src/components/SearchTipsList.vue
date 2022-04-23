<template>
  <div>
    <van-list finished-text="没有更多了" :finished="finished">
      <van-cell
        @click="cellClick(item)"
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
  },
  methods: {
    cellClick (val) {
      this.$emit('cellClick', val)
    }
  }
}
</script>
<style lang="less" scoped>
</style>
