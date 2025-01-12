import { createApp } from 'vue'; // 引入 Vue
import { createRouter, createWebHashHistory } from 'vue-router'; // 引入 Vue Router
import App from './App.vue'; // 引入根组件
import Home from './components/Home.vue'; // 引入主页组件
import Game from './components/Game.vue'; // 引入赛事组件
import Admin from './components/Admin.vue'; // 引入管理组件
import Accordion from './components/Accordion.vue'
import test from './components/test.vue';


// axios.defaults.withCredentials = true//保存cookie
// 定义路由
const routes = [
    { path: '/', 
		component: Home ,
		props: (route) => ({
			allmessages: route.meta.allmessages,
			postData: route.meta.postData,//无用
			gaming: route.meta.gaming,
		}),
	}, // 主页路由
	
    { path: '/game', 
		component: Game, 
		props: (route) => ({
			allmessages: route.meta.allmessages,
		}),
	}, // 赛事路由
    { path: '/admin', component: Admin }, // 管理路由
	{ path: '/test', component: test},
	
];



// 创建路由实例
const router = createRouter({
    history: createWebHashHistory(), // 使用哈希模式
    routes, // 路由配置
	
	
	scrollBehavior(to, from, savedPosition) {
	        // 如果路由有保存的滚动位置（例如浏览器的前进/后退按钮），则恢复
	        if (savedPosition) {
	            return savedPosition;
	        } else {
	            // 否则滚动到页面顶部
	            return { top: 0 , behavior: 'smooth'};
	        }
	    },
});

// 创建 Vue 应用
const app = createApp(App);

app.component('Accordion', Accordion);

// 使用路由
app.use(router);

// 挂载应用
app.mount('#app');