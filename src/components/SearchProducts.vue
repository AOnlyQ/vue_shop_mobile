<template>
  <div>
    <van-dropdown-menu>
      <van-dropdown-item title="综合" disabled />
      <!-- v-model指定van-dropdown-item的选中项 -->
      <van-dropdown-item
        title="分类"
        v-model="categoryVal"
        @change="categorychange"
        :options="filterCategory"
      />
      <van-dropdown-item
        title="价格"
        v-model="value2"
        :options="option2"
        @change="pricechange"
      />
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
      value2: 'desc',
      // 分类下拉菜单当前项
      categoryVal: '',
      option2: [
        { text: '价格由高到低', value: 'desc' },
        { text: '价格由低到高', value: 'asc' }
      ]
    }
  },
  methods: {
    categorychange (val) {
      // console.log('SearchProducts组件val', val)
      this.$emit('categoryChange', val)
    },
    pricechange (val) {
      this.$emit('priceChange', val)
    }
  },
  created () {
    console.log(
      'filterCategory',
      this.filterCategory,
      'goodsList',
      this.goodsList
    )
  },
  beforeUpdate () {
    // eslint-disable-next-line no-unused-vars
    const arr = this.filterCategory.map((item) => {
      if (item.checked) {
        this.categoryVal = item.value
      }
    })
  }
}
</script>
