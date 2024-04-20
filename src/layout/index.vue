<script setup lang="ts">
import { ref } from 'vue';

// 当前路由
const active = ref('Dis');

// 徽标
const badge = ref(5);

</script>
<template>
  <section class="layout">
    <!-- 主体 -->
    <main>
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
        <van-tabbar-item icon="wap-home" to="/">问题大厅</van-tabbar-item>
        <van-tabbar-item icon="comment" :badge="badge">
          消息
        </van-tabbar-item>
        <van-tabbar-item icon="contact" to="/personalCenter">我的</van-tabbar-item>
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
