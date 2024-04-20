<template>
  <van-nav-bar title="问题列表" left-text="返回" left-arrow @click-left="onClickLeft" />
  <div class="content">
    <van-list v-model:loading="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <div v-for="i in list" class="list_content">
        <div class="img_content">
          <img src="@/assets/images/toux.png" alt="" />
        </div>
        <div class="right_content van-hairline--bottom">
          <div class="right_content_title">问题标题</div>
          <div class="right_content_desc">系统邀请【小汪】加入群聊给你解答问题保你职场无忧</div>
          <div class="right_content_time">2024-4-15</div>
        </div>
      </div>
    </van-list>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface list {}
const list = ref<list[]>([]);
const loading = ref(false);
const finished = ref(false);

const onLoad = () => {
  // 异步更新数据
  // setTimeout 仅做示例，真实场景中一般为 ajax 请求
  setTimeout(() => {
    for (let i = 0; i < 10; i++) {
      list.value.push(list.value.length + 1);
    }

    // 加载状态结束
    loading.value = false;

    // 数据全部加载完成
    if (list.value.length >= 40) {
      finished.value = true;
    }
  }, 1000);
};

const onClickLeft = () => history.back();
</script>

<style lang="less" scoped>
:deep(.van-nav-bar) {
  background-color: inherit;
}
.content {
  padding: 10px;
  height: calc(100% - 100px);
  overflow-y: auto;
  background-color: #ffffffab;
}
.list_content {
  display: flex;
  margin-bottom: 10px;
  .img_content {
    padding: 0px 10px;
    width: 80px;
    border-radius: 80px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .right_content {
    position: relative;
    flex: 1;
    .right_content_title {
      color: #1d1c1c;
      font-size: 14px;
    }
    .right_content_desc {
      width: 280px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      position: absolute;
      bottom: 5px;
      right: 0;
      color: #6b6969;
      font-size: 12px;
    }
    .right_content_time {
      position: absolute;
      top: 0;
      right: 0;
      color: #6b6969;
      font-size: 12px;
    }
  }
}
</style>
