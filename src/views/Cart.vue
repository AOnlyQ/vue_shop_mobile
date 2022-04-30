<template>
  <div>
    <Tips />

    <van-checkbox-group v-model="result">
      <van-checkbox name="a">
        <van-card
          num="2"
          price="2.00"
          title="商品标题"
          thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
        />
      </van-checkbox>
    </van-checkbox-group>

    <van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit">
      <van-checkbox v-model="checked">全选</van-checkbox>
      <template #tip>
        累计共<span>22</span>件商品，可点击
        <van-button type="primary" size="small">编辑</van-button>
        按钮进行商品数量修改
      </template>
    </van-submit-bar>
  </div>
</template>

<script>
import Tips from '@/components/Tips'
export default {
  data () {
    return {
      checked: [],
      result: ['a']
    }
  },
  components: {
    Tips
  },
  methods: {
    onSubmit () {}
  }
}
</script>

<style lang="less" scoped>
.van-submit-bar {
  bottom: 0.5rem;
}
</style>
