<template>
    <div style="display: flex; margin-top: 80px; padding-bottom: 10px; width: calc(100vw); background-color: #2b2c2c; border-bottom-right-radius: 6px;">
        <div v-if="allmessages" class="homecenter">
            <div class="message" v-for="(item,index) in allmessages.messages" :key="index">
                <div class="pad10">
                    <span class="title text">{{ item.title }}</span>
                    <div></div>
                    <span class="read text">{{ item.message }}</span>
                </div>
                <div class="text" style="margin-left: 5px; margin-right: 5px;">
                    <span style="padding-left: 3.5px; padding-right: 3.5px; border-radius: 12px; color: aqua; background-color: #a1a1a1; margin-right: 1%; font-size: 1rem;">{{ item.author.slice(0, 1) }}</span>{{ item.author }}发布于{{ item.publishDate }}
                    <a style="float: right; color: aqua; text-decoration: none;" :href="'#/messages/' + index">查看详情>>></a>
                </div>
            </div>
        </div>
        <div v-if="allmessages" class="saishing">
            <span class="text" style="color: aqua; font-size: 2rem;">进行中...</span>
            <div v-for="(item, index) in allmessages.gaming" :key="index" class="bisai">
                <div class="picture">
                    <svg viewBox="0 0 24 24" role="presentation" style="width: 4.5rem; height: 4.5rem;">
                        <path d="M9,13H15V19H18V10L12,5.5L6,10V19H9V13M4,21V9L12,3L20,9V21H4Z" style="fill: currentcolor;"></path>
                    </svg>
                </div>
                <span class="text">>{{ item.title }}</span>
                <span class="text">{{item.time}}</span>
            </div>
        </div>
        <div class="mingao" style="height: 100vh;"></div>
    </div>
</template>

<script>
export default {
    name: 'Home', // 组件名称
    props: {
        allmessages: Object,
        postData: Object,//无用
		// gaming: Array,
    },
    data() {
        return {
            abc: '12345', // 数据绑定
			// gaming: [{
			// 	'title':'123',
			// 	'time':'2024-15-12',
			// },
			// {
			// 	'title':'567',
			// 	'time':'2024-15-15',
			// }
			// ]
        };
    },
};
</script>