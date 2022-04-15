<template>
  <ul>
    <li>
      <img :src="imgSrc" style="display: block" width="100%" alt="" />
      <div class="van-ellipsis">
        这是一段最多显示一行的文字，多余的内容会被省略
      </div>
      <div class="price">{{ 99 | RMBformat }}</div>
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
  }
}
</script>
<style lang="less" scoped>
ul {
  padding: 0.1rem 2%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
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
