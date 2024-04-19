<script setup lang="ts">
import { ref } from 'vue';
const value = ref('');
const active = ref(true);
interface Tech {
  name: string;
  description: string;
}
const myArray = ref<Tech[]>([
  { name: '全部', description: '全部' },
  { name: '后端', description: '后端' },
  { name: '前端', description: '前端' },
  { name: '移动开发', description: '移动开发' },
  { name: '编程语言', description: '编程语言' },
  { name: 'Java', description: 'Java' },
  { name: 'Python', description: 'Python' },
  { name: '人工智能', description: '人工智能' },
  { name: 'AiGC', description: 'AiGC' },
  { name: '大数据', description: '大数据' },
  { name: '数据库', description: '数据库' },
  { name: '数据结构与算法', description: '数据结构与算法' },
  { name: '音视频', description: '音视频' },
  { name: '云原生', description: '云原生' },
  { name: '云平台', description: '云平台' },
  { name: '前沿技术', description: '前沿技术' }
]);

interface List {
  like: number;
  read: number;
  handle: boolean;
  views: number;
  title: string;
  desc: string;
  tags: string[];
  userName: string;
  time: string;
}
const ListData = ref<List[]>([
  {
    like: 30,
    read: 25,
    handle: false,
    views: 10,
    title:
      'html video.js 播放 ftp形式的视频链接地址html video.js 播放 ftp形式的视频链接地址html video.js 播放 ftp形式的视频链接地址html video.js 播放 ftp形式的视频链接地址',
    desc: 'ftp形式的视频地址形如：file://192.168.x.xx/xxxx/xxx/xxxx/xxxx/xxxx.mp4',
    tags: ['前端', 'vue3', 'cesium'],
    userName: 'fruge365',
    time: '49秒前提问'
  },
  {
    like: 30,
    read: 25,
    handle: true,
    views: 10,
    title: 'html video.js 播放 ftp形式的视频链接地址',
    desc: 'ftp形式的视频地址形如：file://192.168.x.xx/xxxx/xxx/xxxx/xxxx/xxxx.mp4xxxxxxxxxxxxxxxxxxxhtml video.js 播放 ftp形式的视频链接地址',
    tags: ['前端', 'vue3', 'cesium'],
    userName: 'fruge365',
    time: '今天 12：01提问'
  },
  {
    like: 30,
    read: 25,
    handle: true,
    views: 10,
    title: 'html video.js 播放 ftp形式的视频链接地址放 ftp形式的视频链接地放 ftp形式的视频链接地放 ftp形式的视频链接地',
    desc: '',
    tags: ['前端', 'vue3', 'cesium'],
    userName: 'fruge365',
    time: '今天 12：01提问'
  },
  {
    like: 30,
    read: 25,
    handle: false,
    views: 10,
    title:
      'html video.js 播放 ftp形式的视频链接地址html video.js 播放 ftp形式的视频链接地址html video.js 播放 ftp形式的视频链接地址html video.js 播放 ftp形式的视频链接地址',
    desc: 'ftp形式的视频地址形如：file://192.168.x.xx/xxxx/xxx/xxxx/xxxx/xxxx.mp4',
    tags: ['前端', 'vue3', 'cesium'],
    userName: 'fruge365',
    time: '49秒前提问'
  },
  {
    like: 30,
    read: 25,
    handle: true,
    views: 10,
    title: 'html video.js 播放 ftp形式的视频链接地址',
    desc: 'ftp形式的视频地址形如：file://192.168.x.xx/xxxx/xxx/xxxx/xxxx/xxxx.mp4xxxxxxxxxxxxxxxxxxxhtml video.js 播放 ftp形式的视频链接地址',
    tags: ['前端', 'vue3', 'cesium'],
    userName: 'fruge365',
    time: '今天 12：01提问'
  },
  {
    like: 30,
    read: 25,
    handle: true,
    views: 10,
    title: 'html video.js 播放 ftp形式的视频链接地址放 ftp形式的视频链接地放 ftp形式的视频链接地放 ftp形式的视频链接地',
    desc: '',
    tags: ['前端', 'vue3', 'cesium'],
    userName: 'fruge365',
    time: '今天 12：01提问'
  },
  {
    like: 30,
    read: 25,
    handle: false,
    views: 10,
    title:
      'html video.js 播放 ftp形式的视频链接地址html video.js 播放 ftp形式的视频链接地址html video.js 播放 ftp形式的视频链接地址html video.js 播放 ftp形式的视频链接地址',
    desc: 'ftp形式的视频地址形如：file://192.168.x.xx/xxxx/xxx/xxxx/xxxx/xxxx.mp4',
    tags: ['前端', 'vue3', 'cesium'],
    userName: 'fruge365',
    time: '49秒前提问'
  },
  {
    like: 30,
    read: 25,
    handle: true,
    views: 10,
    title: 'html video.js 播放 ftp形式的视频链接地址',
    desc: 'ftp形式的视频地址形如：file://192.168.x.xx/xxxx/xxx/xxxx/xxxx/xxxx.mp4xxxxxxxxxxxxxxxxxxxhtml video.js 播放 ftp形式的视频链接地址',
    tags: ['前端', 'vue3', 'cesium'],
    userName: 'fruge365',
    time: '今天 12：01提问'
  },
  {
    like: 30,
    read: 25,
    handle: true,
    views: 10,
    title: 'html video.js 播放 ftp形式的视频链接地址放 ftp形式的视频链接地放 ftp形式的视频链接地放 ftp形式的视频链接地',
    desc: '',
    tags: ['前端', 'vue3', 'cesium'],
    userName: 'fruge365',
    time: '今天 12：01提问'
  },
  {
    like: 30,
    read: 25,
    handle: false,
    views: 10,
    title:
      'html video.js 播放 ftp形式的视频链接地址html video.js 播放 ftp形式的视频链接地址html video.js 播放 ftp形式的视频链接地址html video.js 播放 ftp形式的视频链接地址',
    desc: 'ftp形式的视频地址形如：file://192.168.x.xx/xxxx/xxx/xxxx/xxxx/xxxx.mp4',
    tags: ['前端', 'vue3', 'cesium'],
    userName: 'fruge365',
    time: '49秒前提问'
  },
  {
    like: 30,
    read: 25,
    handle: true,
    views: 10,
    title: 'html video.js 播放 ftp形式的视频链接地址',
    desc: 'ftp形式的视频地址形如：file://192.168.x.xx/xxxx/xxx/xxxx/xxxx/xxxx.mp4xxxxxxxxxxxxxxxxxxxhtml video.js 播放 ftp形式的视频链接地址',
    tags: ['前端', 'vue3', 'cesium'],
    userName: 'fruge365',
    time: '今天 12：01提问'
  },
  {
    like: 30,
    read: 25,
    handle: true,
    views: 10,
    title: 'html video.js 播放 ftp形式的视频链接地址放 ftp形式的视频链接地放 ftp形式的视频链接地放 ftp形式的视频链接地',
    desc: '',
    tags: ['前端', 'vue3', 'cesium'],
    userName: 'fruge365',
    time: '今天 12：01提问'
  }
]);
</script>
<template>
  <div class="Index">
    <!-- 搜索框 -->
    <van-search v-model="value" shape="round" background="#4fc08d" placeholder="请输入搜索关键词" />
    <!-- 轮播图 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
    </van-swipe>
    <!-- 菜单栏 -->
    <van-tabs v-model:active="active" swipeable>
      <van-tab v-for="(item, index) in myArray" :title="item.name" :key="index">
        <div class="card" v-for="(item1, index1) in ListData" :key="index1">
          <div class="top">
            <span class="like">{{ item1.like }}点赞</span>&emsp; <span class="read">{{ item1.like }}阅读</span>&emsp;
            <span class="handle" v-if="item1.handle == true">
              <van-button type="success" size="mini" round icon="success">已解决</van-button>
            </span>
            <span class="handle" v-if="item1.handle == false">
              <!-- <van-button type="warning" size="mini" round icon="cross">未解决</van-button> -->
              {{ item1.views }}浏览
            </span>
          </div>
          <div class="content">
            <div class="title">{{ item1.title }}</div>
            <div class="desc">{{ item1.desc }}</div>
            <span class="tags" v-for="(item2, index2) in item1.tags" :index="index2">
              <van-button type="primary" size="mini" plain>{{ item2 }}</van-button
              >&emsp;
            </span>
          </div>
          <div class="footer">
            <span class="username">{{ item1.userName }}</span
            >&emsp;
            <span class="time">{{ item1.time }}</span>
          </div>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<style lang="less" scoped>
.Index {
  margin-bottom: 50px;
  .card {
    width: 96%;
    margin: 5px auto;
    background-color: white;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    padding: 15px;
    box-sizing: border-box;
    overflow: hidden;
    font-size: 13px;

    .top {
      color: gray;
      font-size: 14px;
      display: flex;
      align-items: center;
      .like {
        color: black;
      }
      .read {
      }
      .handle {
        button {
          height: 20px;
        }
      }
    }
    .content {
      .title {
        color: #3385d0;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        word-break: break-all;
        line-height: 25px;
        font-size: 15px;
      }
      .desc {
        font-size: 14px;
        color: #787c7f;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        word-break: break-all;
        line-height: 20px;
      }
      .tags {
        button {
          height: 20px;
        }
      }
    }
    .footer {
      font-size: 12px;
      float: right;
      .username {
        color: green;
      }
      .time {
        color: gray;
      }
    }
  }
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  }
  ::v-deep .van-tabs__wrap {
    position: sticky;
    top: 0;
    z-index: 1;
  }
}
</style>
