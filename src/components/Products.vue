<template>
  <ul>
    <li v-for="item in goodsList" :key="item.id">
      <img
        :src="item.list_pic_url"
        style="display: block"
        width="100%"
        alt=""
      />
      <div class="van-ellipsis">
        {{ item.name }}
      </div>
      <div class="price">{{ item.retail_price | RMBformat }}</div>
    </li>
  </ul>
</template>
<script>
export default {
  props: ['goodsList'],
  data () {
    return {
      imgSrc: require('@/assets/logo.png')
    }
  },
  mounted () {
    console.log('Products组件中this.goodsList', this.goodsList)
  }
}
</script>
<style lang="less" scoped>
ul {
  padding: 0.1rem 2%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  background-color: #efefef;
  li {
    width: 49%;
    margin-bottom: 0.1rem;
    background: #fff;
    text-align: center;
    line-height: 0.3rem;
    .price {
      color: darkred;
    }
  }
}
</style>
