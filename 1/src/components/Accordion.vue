<template>
  <div class="accordion">
    <div
      v-for="(item, index) in items"
      :key="index"
      class="accordion-item"
      :class="{ active: activeIndex === index }"
    >
      <div class="accordion-header" @click="toggle(index)"><!-- 显示比赛海报及各种信息 -->
	  <img v-if="!item.img" src="../assets/haibao.png" alt="haibao" style="height: 100%;" /> <!-- None使用默认海报 -->
	  <img v-if="item.img" :src=item.img alt="haibao" style="height: 100%;" /> <!-- 不是None，使用指定海报 -->
        <div class="text">{{ item.title }}{{ item.time }}</div>
		
      </div>
      <transition name="slide"><!-- 显示进入比赛等按钮 -->
        <div v-if="activeIndex === index" class="accordion-content">
          <div class="content-inner">
            {{ item.content }}
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'Accordion',
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  setup() {
    const activeIndex = ref(null);

    const toggle = (index) => {
      activeIndex.value = activeIndex.value === index ? null : index;
    };

    return {
      activeIndex,
      toggle,
    };
  },
};
</script>

<style scoped>
.accordion {
  /* width: 100%; */
  width: 60vw;
  margin-left: 9vw;
  padding-left: 10px;
}

.accordion-item {
  border: 1px solid #ccc;
  margin-bottom: 5px;
}

/* .accordion-header {
  padding: 10px;
  background-color: #f1f1f1;
  cursor: pointer;
} */

.accordion-header{
	display: flex;
	background-color: #4d4f4f;
	/* margin-bottom: auto; */
	/* margin-bottom: 1vh; */
	/* margin-left: 15%; */
    width: 100%;
	height: 170px;
	border-radius: 5px;
	/* border: 1px solid greenyellow; */
}

.accordion-content {
  overflow: hidden;
}

.content-inner {
  padding: 10px;
  background-color: #fff;
}

.accordion-item.active .accordion-header { /* 点击改变颜色 */
  /* background-color: #ddd; */
  background-color: #959595;
}

/* 过渡效果 */
.slide-enter-active,
.slide-leave-active {
  transition: max-height 0.5s ease-out;
}

.slide-enter-from,
.slide-leave-to {
  max-height: 0;
}

.slide-enter-to,
.slide-leave-from {
  max-height: 100px; /* 展开时的高度 */
}
</style>