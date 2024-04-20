<template>
  <van-nav-bar title="问题发布" left-text="返回" left-arrow @click-left="onClickLeft" />

  <div class="content">
    <div class="content_item">
      <div class="content_item_title">填写详细描述</div>
      <van-cell-group inset>
        <van-field
          v-model="message"
          rows="10"
          autosize
          placeholder="请描述你的问题"
          label-align="top"
          type="textarea"
          maxlength="50"
          show-word-limit
        />
      </van-cell-group>
    </div>

    <div class="content_item">
      <div class="content_item_title">
        图片上传
        <span class="tips">最多添加9张照片</span>
      </div>
      <van-uploader v-model="fileList" multiple :max-count="9" />
    </div>

    <div class="content_item">
      <div class="content_item_title">选择标签</div>
      <div class="content_item_choose">
        <el-select
          v-model="value"
          multiple
          filterable
          allow-create
          size="large"
          default-first-option
          :reserve-keyword="false"
          placeholder="选择标签"
          style="width: 80%,height:42px;margin-right:5px"
        >
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
        <van-button type="default" icon="plus" size="small" @click="onChoose" />
      </div>

      <br />
      <van-tag v-for="i in tagpanelList" type="warning" size="large" style="margin: 6px" @click="outTagpanel(i)">{{ i }}</van-tag>
    </div>
    <van-floating-panel v-if="tagpanel" v-model:height="height" :anchors="anchors">
      <div class="panel_title">
        <div>历史标签</div>
        <van-button type="primary" size="mini" @click="tagpanel = !tagpanel">确认</van-button>
      </div>

      <div style="text-align: center; padding: 15px">
        <van-tag
          v-for="i in 100"
          :plain="tagpanelList.find((_) => _ == `标签${i}`)"
          type="primary"
          size="large"
          style="margin: 6px"
          >标签{{ i }}</van-tag
        >
      </div>
    </van-floating-panel>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const tagpanel = ref(false);
const message = ref('');
const fileList = ref([
  { url: 'https://fastly.jsdelivr.net/npm/@vant/assets/leaf.jpeg' },
  // Uploader 根据文件后缀来判断是否为图片文件
  // 如果图片 URL 中不包含类型信息，可以添加 isImage 标记来声明
  { url: 'https://cloud-image', isImage: true }
]);

const anchors = [100, Math.round(0.4 * window.innerHeight), Math.round(0.7 * window.innerHeight)];
const height = ref(anchors[0]);
const tagpanelList = ref<string[]>([]);
// const pushtagpanel = (i) => {
//   if (tagpanelList.value.find((_) => _ == i)) {
//     tagpanelList.value = tagpanelList.value.filter((_) => _ != i);
//   } else {
//     tagpanelList.value.push(i);
//   }
// };

const onClickLeft = () => history.back();
const outTagpanel = (i) => {
  tagpanelList.value = tagpanelList.value.filter((_) => _ != i);
  value.value = value.value.filter((_) => _ != i);
};

const value = ref<string[]>([]);
const options = [
  {
    value: 'HTML',
    label: 'HTML'
  },
  {
    value: 'CSS',
    label: 'CSS'
  },
  {
    value: 'JavaScript',
    label: 'JavaScript'
  },
  {
    value: 'JavaScript1',
    label: 'JavaScript1'
  },
  {
    value: 'JavaScript2',
    label: 'JavaScript2'
  },
  {
    value: 'JavaScript3',
    label: 'JavaScript3'
  },
  {
    value: 'JavaScript4',
    label: 'JavaScript4'
  }
];
const onChoose = () => {
  tagpanelList.value = Array.from(new Set([...tagpanelList.value, ...value.value]));
  value.value = []
};
</script>

<style lang="less" scoped>
.content_item {
  background: white;
  padding: 10px;
  border-radius: 20px;
  margin-bottom: 20px;
}
.panel_title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px 0 10px;
}
.content_item_title {
  font-size: 16px;
  font-weight: 800;
  color: #6b6969;
  margin-bottom: 10px;
}
.content_item_choose {
  display: flex;
  align-items: center;
}
.content {
  padding: 10px;
  height: calc(100% - 100px);
  overflow-y: auto;
  background-color: #ffffff54;
}
.tips {
  color: #6b6969;
  font-size: 12px;
}
</style>
