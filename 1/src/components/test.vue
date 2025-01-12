<template>
  <div>
    <!-- 显示 GET 请求返回的数据 -->
    <div v-if="getData">
      <h2>GET 请求返回的数据：</h2>
      <pre>{{ getData }}</pre>
    </div>

    <!-- 显示 POST 请求返回的数据 -->
    <div v-if="postData">
      <h2>POST 请求返回的数据：</h2>
      <pre>{{ postData }}</pre>
    </div>

    <!-- 加载状态 -->
    <div v-if="loading">加载中...</div>

    <!-- 错误信息 -->
    <div v-if="error" style="color: red;">
      错误：{{ error }}
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      getData: null, // 存储 GET 请求返回的数据
      postData: null, // 存储 POST 请求返回的数据
      loading: false, // 加载状态
      error: null, // 错误信息
    };
  },
  created() {
    // 在组件创建时发起请求
    this.fetchGetData();
    this.fetchPostData();
  },
  methods: {
    // 发起 GET 请求
    async fetchGetData() {
      this.loading = true;
      this.error = null;
      try {
        const response = await axios.get('/api/data');
        this.getData = response.data;
      } catch (err) {
        this.error = err.message || '请求失败';
      } finally {
        this.loading = false;
      }
    },
    // 发起 POST 请求
    async fetchPostData() {
      this.loading = true;
      this.error = null;
      try {
        const response = await axios.post('/api/data', { name: 'John' });
        this.postData = response.data;
      } catch (err) {
        this.error = err.message || '请求失败';
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style>
/* 可以添加一些样式 */
pre {
  background-color: #f5f5f5;
  padding: 10px;
  border-radius: 5px;
}
</style>