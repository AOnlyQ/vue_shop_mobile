<template>
  <div>
    <van-goods-action>
      <van-goods-action-icon
        :icon="isCollected ? 'star' : 'star-o'"
        :text="isCollected ? '已收藏' : '未收藏'"
        :color="isCollected ? 'darkred' : '#666'"
        @click="isCollected = !isCollected"
      />
      <van-goods-action-icon icon="cart-o" text="购物车" badge="5" />

      <van-goods-action-button
        type="warning"
        text="加入购物车"
        @click="addToCart"
      />
      <van-goods-action-button type="danger" text="立即购买" />
    </van-goods-action>
  </div>
</template>

<script>
export default {
  props: ['badge'],
  data () {
    return {
      isCollected: false
    }
  },
  methods: {
    addToCart () {
      this.$emit('addToCart')
    }
  }
}
</script>
