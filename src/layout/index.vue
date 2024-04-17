<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const active = ref('home');
const router = useRouter();

const JumpFn = (path: string) => {
  router.push(path);
};
</script>
<template>
  <section class="layout">
    <!-- 主体 -->
    <main v-waterMarker="{ text: '千锋教育版权所有', textColor: 'rgba(180, 180, 180, 0.4)' }">
      <section class="content">
        <router-view v-slot="{ Component }">
          <transition appear name="fade-transform" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
        <!-- </el-watermark> -->
      </section>
      <!-- 内容 -->
      <!-- 底部 -->
      <van-tabbar v-model="active">
        <van-tabbar-item name="wap-home" icon="wap-home" @click="JumpFn('/')">首页</van-tabbar-item>
        <van-tabbar-item name="like" icon="like" @click="JumpFn('/xxx')">关注</van-tabbar-item>
        <van-tabbar-item name="comment" icon="comment" @click="JumpFn('/xxx')">消息</van-tabbar-item>
        <van-tabbar-item name="contact" icon="contact" @click="JumpFn('/xxx')">我的</van-tabbar-item>
      </van-tabbar>
      <!-- 底部 -->
    </main>
    <!-- 主体 -->
  </section>
</template>
<style lang="less" scoped>
.layout {
  width: 100vw;
  height: 100vh;

  display: flex;

  // main
  main {
    flex: 1;
    overflow: hidden;
    background-color: #f0f2f5;

    // header
    header {
      width: 100%;
      height: 90px;
      background-color: green;
    }

    // content
    .content {
      width: 100%;
      height: 100%;
      //   margin: 20px auto;
      /* background-color: blue; */
      margin-bottom: 50px;
      overflow-x: hidden;
      // overflow-y: scroll;
    }

    // footer
    footer {
      width: 100%;
      height: 39px;
      background-color: #fff;
      font-size: 12px;
      border-top: 1px solid #e4e7ed;
      color: #00000073;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>
