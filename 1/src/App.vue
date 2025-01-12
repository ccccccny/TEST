<template>
    <div id="app">
        <!-- 侧边栏 -->
        <Sidebar />

        <!-- 主内容区域 -->
        <div id="main">
            <div class="bg-hui">
                <div class="header">
                    <span class="title">
                        <svg viewBox="0 0 24 24" role="presentation" style="width: 2.5rem; height: 2.5rem;">
                            <path d="M9,13H15V19H18V10L12,5.5L6,10V19H9V13M4,21V9L12,3L20,9V21H4Z" style="fill: currentcolor;"></path>
                        </svg>TEST<span style="color: aqua;">::</span>CTF
                    </span>
                </div>
            </div>

            <!-- 路由匹配的组件会渲染在这里 -->
            <router-view :allmessages="allmessages" :postData="postData"></router-view>
        </div>
    </div>
</template>

<script>
import Sidebar from './components/Sidebar.vue'; // 引入侧边栏组件
import axios from 'axios';

export default {
    name: 'App', // 组件名称
    components: {
        Sidebar, // 注册侧边栏组件
    },
    data() {
        return {
            allmessages: null,
            postData: null,
            loading: false,
            error: null,
			gaming: null,
        };
    },
    created() {
        this.fetchGetData();
        this.fetchPostData();
		
    },
    methods: {
		
        // 发起 GET 请求
        async fetchGetData() {
            this.loading = true;
            this.error = null;
            try {
                const response = await axios.get('/api/data/messages',{timeout: 5000});
                this.allmessages = response.data;
            } catch (err) {
                this.error = err.message || '请求失败';
				console.log(err.message)
				
				setTimeout(() => {
				                    this.fetchGetData();
				                }, 1000); // 这里设置了1秒后再次尝试，可以根据实际情况调整间隔时间
            } finally {
                this.loading = false;
            }
			console.log(this.allmessages);
        },
        // 发起 POST 请求
        async fetchPostData() {
            this.loading = true;
            this.error = null;
            try {
                const response = await axios.post('/api/data/messages',{timeout: 5000});
                this.postData = response.data;
            } catch (err) {
                this.error = err.message || '请求失败';
				console.log(err.message)
				
				setTimeout(() => {
				                    this.fetchGetData();
				                }, 1000); // 这里设置了1秒后再次尝试，可以根据实际情况调整间隔时间
            } finally {
                this.loading = false;
            }
        },
    },
};
</script>