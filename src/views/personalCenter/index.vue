<script setup lang="ts">
import { ref, reactive } from 'vue';
const imgUrl = ref('https://img2.woyaogexing.com/2021/06/04/bc180642bdd0489f865c03efd6ebc324!400x400.jpeg');
//  修改头像
const userCircle = ref(false);
const afterRead = (file: any) => {
  // 此时可以自行将文件上传至服务器
  console.log(file);
};
const userCircleFn = (val: boolean) => {
  userCircle.value = val
}
//  修改昵称
const idCard = ref(false);
const userName = ref('')
const idCardFn = (val: boolean) => {
  idCard.value = val
}
//  修改密码
const closedEye = ref(false);
interface closedEyeObject {
  newValue: string;
  oldValue: string;
}
const closedEyeObject: closedEyeObject = reactive({
  newValue: '',
  oldValue: '',
});
const closedEyeFn = (val: boolean) => {
  closedEye.value = val
}
//  退出
const close = ref(false);
const closeFn = (val: boolean) => {
  close.value = val
}


</script>
<template>
  <div class="personalCenter">
    <div class="userBox">
      <!-- 用户头像和用户名 -->
      <van-cell class="user">
        <template #title>
          <img :src="imgUrl" alt="" />
          <div>好好先生</div>
        </template>
      </van-cell>
    </div>
    <!-- 服务相关 -->
    <div class="serviceBox">
      <van-cell-group inset>
        <van-cell title="修改头像" icon="user-circle-o" is-link to="personalCenter" @click="userCircleFn(true)" />
      </van-cell-group>
      <van-cell-group inset>
        <van-cell title="修改昵称" icon="idcard" is-link to="personalCenter" @click="idCardFn(true)" />
      </van-cell-group>
      <van-cell-group inset>
        <van-cell title="修改密码" icon="closed-eye" is-link to="personalCenter" @click="closedEyeFn(true)" />
      </van-cell-group>
      <van-cell-group inset>
        <van-cell title="退出" icon="close" is-link to="personalCenter" @click="closeFn(true)" />
      </van-cell-group>
    </div>
    <!-- 修改头像 -->
    <van-dialog v-model:show="userCircle" title="修改头像" show-cancel-button>
      <van-uploader :after-read="afterRead" class="imgUP" />
    </van-dialog>
    <!-- 修改昵称 -->
    <van-dialog v-model:show="idCard" title="修改昵称" show-cancel-button>
      <van-cell-group inset>
        <van-field v-model="userName" label="新昵称" placeholder="请输入新昵称" />
      </van-cell-group>
    </van-dialog>
    <!-- 修改密码 -->
    <van-dialog v-model:show="closedEye" title="修改密码" show-cancel-button>
      <van-cell-group inset>
        <van-field v-model="closedEyeObject.oldValue" label="旧密码" placeholder="请输入旧密码" />
        <van-field v-model="closedEyeObject.newValue" label="新密码" placeholder="请输入新密码" />
      </van-cell-group>
    </van-dialog>
    <!-- 退出 -->
    <van-dialog v-model:show="close" title="确认退出吗？" show-cancel-button>
    </van-dialog>
  </div>
</template>
<style lang="less" scoped>
.personalCenter {
  height: 100vh;
  background-color: #528fff;
  display: flex;
  flex-direction: column;

  .userBox {
    margin: 25px 0;
  }

  .userBox {
    .message {
      text-align: right;
      padding: 20px 20px 0 0;
    }

    :deep(.user) {
      align-items: center;
      color: #fff;
      font-weight: bold;
      font-size: 20px;
      background-color: unset;

      .van-cell__right-icon {
        color: #fff;
      }

      .van-cell__title {
        display: flex;
        align-items: center;
        flex-direction: column;
      }

      img {
        width: 100px;
        height: 100px;
        border-radius: 50px;
        margin: 10px;
      }
    }
  }

  .serviceBox {
    flex: 1;
    background-color: #f5f5f5;
    border-radius: 20px 20px 0 0;

    .van-cell-group {
      margin: 10px;
    }
  }

  .imgUP {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
