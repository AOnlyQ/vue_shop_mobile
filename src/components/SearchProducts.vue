<template>
  <div>
    <van-dropdown-menu>
      <van-dropdown-item title="综合" disabled />
      <!-- v-model指定van-dropdown-item的选中项 -->
      <van-dropdown-item v-model="categoryVal" :options="filterCategory" />
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
      value2: 'a',
      // 分类下拉菜单当前项
      categoryVal: '',
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
  },
  mounted () {
    console.log('执行了beforeUpdated')
    // eslint-disable-next-line no-unused-vars
    const arr = this.filterCategory.map((item) => {
      if (item.checked) {
        this.categoryVal = item.value
      }
    })
    console.log('this.categoryVal', this.categoryVal)
  }
}
</script>
