<script setup>
import { ref } from 'vue'

defineProps({
  msg: String
})
</script>

<template>

		<head>
			<meta charset="utf-8" />
			<title></title>
			<link rel="stylesheet" href="css/index.css" />
		</head>
		<body>
			<div id="app">
				
				<div id="left">
					<span class="toplogo">
						<router-link to="#">
							<svg viewBox="0 0 24 24" role="presentation" style="width: 1.5rem; height: 1.5rem;">
								<path d="M9,13H15V19H18V10L12,5.5L6,10V19H9V13M4,21V9L12,3L20,9V21H4Z" style="fill: currentcolor;">
								</path>
							</svg>
						</router-link>
					</span>
					<div class="centerlogo">
						<router-link to="#">
							<span class="logo"><!-- 主页 -->
								<svg viewBox="0 0 24 24" role="presentation" style="width: 1.5rem; height: 1.5rem;">
									<path d="M9,13H15V19H18V10L12,5.5L6,10V19H9V13M4,21V9L12,3L20,9V21H4Z" style="fill: currentcolor;">
									</path>
								</svg>
							</span>
						</router-link>
						<router-link to="#game" @click.prevent="updateSection"> <!-- onclick="updateSection(event)" -->
							<span class="logo"><!-- 赛事 -->
								<svg viewBox="0 0 24 24" role="presentation" style="width: 1.5rem; height: 1.5rem;">
									<path d="M9,13H15V19H18V10L12,5.5L6,10V19H9V13M4,21V9L12,3L20,9V21H4Z" style="fill: currentcolor;">
									</path>
								</svg>
							</span>
						</router-link>
						<router-link to="#admin">
							<span class="logo"><!-- 管理 -->
								<svg role="presentation" style="width: 1.5rem; height: 1.5rem;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
									<path d="M944.48 552.458667l-182.357333 330.666666a73.792 73.792 0 0 1-64.565334 38.325334h-362.133333a73.792 73.792 0 0 1-64.565333-38.325334l-182.357334-330.666666a75.338667 75.338667 0 0 1 0-72.682667l182.357334-330.666667a73.792 73.792 0 0 1 64.565333-38.325333h362.133333a73.792 73.792 0 0 1 64.565334 38.325333l182.357333 330.666667a75.338667 75.338667 0 0 1 0 72.682667z m-55.989333-31.146667a10.773333 10.773333 0 0 0 0-10.378667l-182.037334-330.666666a10.517333 10.517333 0 0 0-9.205333-5.482667H335.733333a10.517333 10.517333 0 0 0-9.205333 5.482667l-182.037333 330.666666a10.773333 10.773333 0 0 0 0 10.378667l182.037333 330.666667a10.517333 10.517333 0 0 0 9.205333 5.472h361.514667a10.517333 10.517333 0 0 0 9.205333-5.472l182.037334-330.666667zM513.738667 682.666667c-94.261333 0-170.666667-76.405333-170.666667-170.666667s76.405333-170.666667 170.666667-170.666667c94.250667 0 170.666667 76.405333 170.666666 170.666667s-76.416 170.666667-170.666666 170.666667z m0-64c58.912 0 106.666667-47.754667 106.666666-106.666667s-47.754667-106.666667-106.666666-106.666667-106.666667 47.754667-106.666667 106.666667 47.754667 106.666667 106.666667 106.666667z">
									</path>
								</svg>
							</span>
						</router-link>
						</div>
					<div class="endlogo">
						<router-link to="">
							<span class="logo">
								<svg viewBox="0 0 24 24" role="presentation" style="width: 1.5rem; height: 1.5rem;">
									<path d="M9,13H15V19H18V10L12,5.5L6,10V19H9V13M4,21V9L12,3L20,9V21H4Z" style="fill: currentcolor;">
									</path>
								</svg>
							</span>
						</router-link>
						<router-link to="#">
							<span class="logo">
								<svg viewBox="0 0 24 24" role="presentation" style="width: 1.5rem; height: 1.5rem;">
									<path d="M9,13H15V19H18V10L12,5.5L6,10V19H9V13M4,21V9L12,3L20,9V21H4Z" style="fill: currentcolor;">
									</path>
								</svg>
							</span>
						</router-link>
					</div>
				</div>
				
				<div id="main">
					<div class="header">
						<span class="title">
							<svg viewBox="0 0 24 24" role="presentation" style="width: 2.5rem; height: 2.5rem;">
								<path d="M9,13H15V19H18V10L12,5.5L6,10V19H9V13M4,21V9L12,3L20,9V21H4Z" style="fill: currentcolor;">
								</path>
							</svg>ZJBC<span style="color: aqua;">::</span>CTF
						</span>
						
					</div>
					<div style="display: flex;margin-top: 85px;height: 100vh;width: 100%;">
					<div class="homecenter">
						<div class="message">
							<div class="pad10">
								<span class="title text">test title</span><div></div>
								<span class="read text"><router-view></router-view>test message ttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt</span>
								<div class="text">
									<span style="padding-left: 4.5px;padding-right: 4.5px;border-radius: 12px;color: aqua;background-color: #a1a1a1;margin-right: 1%;font-size: 1rem;">{{ABC.slice(0,1)}}</span>{{ABC}}发布于xxxxxxxxxxxxxx<a style="float: right;color:aqua;text-decoration: none;" href="#">查看详情>>></a>
								</div>
							</div>
						</div>		
					</div>
					<div class="saishing">
						<span class="text" style="color: aqua;font-size: 2rem;">进行中...</span>
						<div class="bisai">
							<div class="picture">
								<svg viewBox="0 0 24 24" role="presentation" style="    width: 4.5rem;height: 4.5rem;">
									<path d="M9,13H15V19H18V10L12,5.5L6,10V19H9V13M4,21V9L12,3L20,9V21H4Z" style="fill: currentcolor;">
									</path>
								</svg>
							</div>
							<span class="text">>{{abc}}</span><!-- test赛事 -->
							<span class="text">xxxx-xx-xx  xxxx-xx-xx</span>
						</div>
					</div>
					</div>
				</div>
				
				
			</div>
		</body>
	
	
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
