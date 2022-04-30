<template>
  <div>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="darkred">
      <van-swipe-item v-for="item in gallery" :key="item.id">
        <img :src="item.img_url" width="100%" alt="" />
      </van-swipe-item>
    </van-swipe>
    <Tips />
    <div class="info">
      <h3 class="title">{{ info.name }}</h3>
      <p class="goods-brief">{{ info.goods_brief }}</p>
      <div class="retail_price">{{ info.retail_price | RMBformat }}</div>
    </div>
    <van-cell title="展示弹出层" is-link @click="isSkuShow = true" />
    <div class="attribute">
      <h4>商品参数</h4>
      <ul>
        <li v-for="(item, index) in attribute" :key="index">
          <span>{{ item.name }}</span>
          <section class="van-ellipsis">{{ item.value }}</section>
        </li>
      </ul>
    </div>
    <div class="goods_desc" v-html="info.goods_desc"></div>
    <div class="title0">
      <span>常见问题</span>
    </div>
    <ul class="issue">
      <li v-for="item in issue" :key="item.id">
        <h3>{{ item.question }}</h3>
        <p>{{ item.answer }}</p>
      </li>
    </ul>
    <div class="title0">
      <span>相关产品</span>
    </div>
    <Products :goodsList="goodsList" />
    <van-sku
      ref="sku"
      v-model="isSkuShow"
      :sku="sku"
      :goods="goods"
      :hide-stock="sku.hide_stock"
    />
    <AppGoodAction @addToCart="addToCart" :badge="badge" />
  </div>
</template>
<script>
import {
  GetGoodsDetailData,
  GetGoodsRelatedData,
  GetGoodsCount
} from '@/request/api'
import Tips from '@/components/Tips'
import AppGoodAction from '@/components/AppGoodAction'

import Products from '@/components/Products'
export default {
  name: 'ProductDetail',
  components: { Tips, AppGoodAction, Products },
  data () {
    return {
      gallery: [],
      // 商品信息
      info: {},
      attribute: [],
      issue: [],
      goodsList: [],
      isSkuShow: false,
      sku: {
        tree: [],
        hide_stock: false,
        price: '',
        stock_num: 0
      },
      goods: {
        picture: ''
      },
      badge: 0
    }
  },
  created () {
    GetGoodsDetailData({
      id: this.$route.query.id
    }).then((res) => {
      if (res.errno === 0) {
        const { gallery, info } = res.data
        this.gallery = gallery
        this.info = res.data.info
        this.attribute = res.data.attribute
        this.issue = res.data.issue

        // sku数据
        this.goods.picture = info.list_pic_url
        this.sku.price = info.retail_price.toFixed(2)
        this.sku.stock_num = info.goods_number
      }
    })

    // 发送请求获取相关产品数据
    GetGoodsRelatedData({
      id: this.$route.query.id
    }).then((res) => {
      console.log('RelatedData', res.data)
      this.goodsList = res.data.goodsList
    })

    // 获取购物车产品数量
    GetGoodsCount().then((res) => {
      if (res.errno === 0) {
        this.badge = res.data.cartTotal.goodsCount
      }
    })
  },
  methods: {
    addToCart () {
      if (this.isSkuShow) {
        // 执行加入购物车
        /* 1、获取商品购买数量 */
        console.log(this.$refs.sku.getSkuData().selectedNum)
        /* 2、发送请求，添加到购物车 */
      } else {
        this.isSkuShow = true
      }
    }
  }
}
</script>
<style lang="less" scoped>
.info {
  background: #fff;
  text-align: center;
  padding: 0.2rem 0;
  border-bottom: 1px solid #ccc;

  h3 {
    font-weight: normal;
    font-size: 0.2rem;
    line-height: 0.5rem;
  }

  p {
    color: #999;
    font-size: 0.14rem;
    line-height: 0.3rem;
  }

  div {
    color: darkred;
    font-size: 0.14rem;
    line-height: 0.3rem;
  }
}
.attribute {
  margin-top: 0.2rem;
  background: #fff;
  padding: 0.2rem 4%;
  h4 {
    line-height: 0.5rem;
    font-weight: normal;
    font-size: 0.16rem;
    margin-bottom: 0.2rem;
  }
  ul {
    li {
      background: #efefef;
      line-height: 0.4rem;
      height: 0.4rem;
      margin-bottom: 0.1rem;
      border-radius: 4px;
      display: flex;
      justify-content: space-between;
      span {
        width: 30%;
        text-align: right;
      }
      section {
        flex: 1;
        padding-left: 0.2rem;
      }
    }
  }
}
/deep/ .goods_desc {
  img {
    max-width: 100%;
    display: block;
  }
}
// 标题结构样式
.title0 {
  width: 100%;
  background: #fff;
  height: 0.5rem;
  position: relative;
  &::before {
    content: '';
    width: 50%;
    height: 2px;
    background: #ccc;
    position: absolute;
    top: 50%;
    margin-top: -1px;
    left: 50%;
    margin-left: -25%;
  }
  span {
    width: 30%;
    position: relative;
    background: #fff;
    display: block;
    text-align: center;
    margin: 0 auto;
    height: 0.5rem;
    line-height: 0.5rem;
  }
}
.issue {
  padding: 0 4%;
  background: #fff;
  li {
    h3 {
      height: 0.3rem;
      line-height: 0.3rem;
      padding-left: 0.2rem;
      position: relative;
      font-weight: normal;
      &::before {
        content: '';
        width: 4px;
        height: 4px;
        background: darkred;
        display: inline-block;
        position: absolute;
        left: 0;
        top: 50%;
        margin-top: -2px;
      }
    }
    p {
      font-size: 0.12rem;
      line-height: 0.2rem;
      padding-left: 0.2rem;
    }
  }
}
/deep/ .van-goods-action {
  z-index: 99999;
}
</style>
