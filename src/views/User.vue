<template>
  <div>
    <van-row @click="openModal">
      <van-col span="6">
        <img :src="avatarSrc" alt="" />
      </van-col>
      <van-col span="15">{{ nickname }}</van-col>
      <van-col span="3">
        <van-icon name="arrow" />
      </van-col>
    </van-row>
    <van-grid :column-num="3" square>
      <van-grid-item icon="photo-o" text="文字" />
      <van-grid-item icon="photo-o" text="文字" />
      <van-grid-item icon="photo-o" text="文字" />
      <van-grid-item icon="photo-o" text="文字" />
    </van-grid>
    <transition name="van-fade">
      <div class="login-modal" v-if="isShowModal">
        <div class="close-modal" @click="isShowModal = !isShowModal"></div>
        <van-form @submit="onSubmit" class="login-form">
          <van-field
            v-model="username"
            name="用户名"
            label="用户名"
            placeholder="用户名"
            :rules="[{ required: true, message: '请填写用户名' }]"
          />
          <van-field
            v-model="password"
            type="password"
            name="密码"
            label="密码"
            placeholder="密码"
            :rules="[{ required: true, message: '请填写密码' }]"
          />
          <div style="margin: 16px">
            <van-button round block type="info" native-type="submit">
              提交
            </van-button>
          </div>
        </van-form>
      </div>
    </transition>
  </div>
</template>

<script>
import { GoLogin } from '@/request/api.js'
export default {
  data () {
    return {
      avatarSrc: require('@/assets/avatar.jpg'),
      username: '',
      password: '',
      isShowModal: false,
      nickname: '用户登录'
    }
  },
  created () {
    // 组件刚创建的时候需要判断用户有没有登录，获取localStorage有没有token值
    // 如果有token,就表示登录，就应该填上用户信息
    const token = localStorage.getItem('token')
    if (token) {
      const userInfo = JSON.parse(localStorage.getItem('userInfo'))
      this.nickname = userInfo.nickname
      this.avatar = userInfo.avatar
    }
  },
  methods: {
    onSubmit (values) {
      const username = values['用户名']
      const pwd = values['密码']

      // 发起请求
      GoLogin({
        username,
        pwd
      }).then((res) => {
        console.log(res)

        if (res.errno === 0) {
          console.log(res)
          /* 1、提示登录成功 */
          this.$toast.success('登录成功')
          /* 2、保存token 和userInfo到localStorage */
          localStorage.setItem('token', res.data.token)
          localStorage.setItem('userInfo', JSON.stringify(res.data.userInfo))
          /* 3、1秒后关闭模态窗口 */
          setTimeout(() => {
            this.isShowModal = !this.isShowModal
            /* 4、更新用户昵称和用户头像 */
            this.nickname = res.data.userInfo.nickname
            this.avatar = res.data.userInfo.avatar
          }, 1000)
        }
      })
    },
    openModal () {
      const token = localStorage.getItem('token')
      if (token) {
        return
      }
      this.isShowModal = !this.isShowModal
    }
  }
}
</script>
<style lang="less" scoped>
.login-modal {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;

  z-index: 99;
  .login-form {
    background-color: #fff;
    width: 90%;
    position: absolute;
    left: 50%;
    top: 35%;
    margin-left: -45%;
    padding-bottom: 0.1rem;
  }
  .close-modal {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
}
.van-row {
  padding: 0.2rem 4%;
  background: #333;
  color: #fff;
  .van-col {
    line-height: 0.7rem;
    font-size: 0.18rem;
    img {
      width: 0.7rem;
      border-radius: 50%;
      display: block;
    }
    &:last-child {
      text-align: right;
    }
  }
}
</style>
