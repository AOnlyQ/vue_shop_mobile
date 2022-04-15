<template>
  <div>
    <van-dropdown-menu>
      <van-dropdown-item title="综合" disabled />
      <van-dropdown-item v-model="value1" :options="option1" />
      <van-dropdown-item v-model="value2" :options="option2" />
    </van-dropdown-menu>
    <van-empty v-if="isEmpty" image="search" description="暂无商品" />
    <Products v-else :goodsList="goodsList" />
  </div>
</template>
<script>
import Products from '@/components/Products'
export default {
  props: ['filterCategory', 'goodsList'],
  components: { Products },
  data () {
    return {
      isEmpty: false,
      value1: 0,
      value2: 'a',
      option1: [
        { text: '全部商品', value: 0 },
        { text: '新款商品', value: 1 },
        { text: '活动商品', value: 2 }
      ],
      option2: [
        { text: '默认排序', value: 'a' },
        { text: '好评排序', value: 'b' },
        { text: '销量排序', value: 'c' }
      ]
    }
  },
  methods: {
    created () {
      console.log(
        'filterCategory',
        this.filterCategory,
        'goodsList',
        this.goodsList
      )
    }
  }
}
</script>
