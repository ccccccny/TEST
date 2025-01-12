<template>
	<!-- <hr style="margin-top: 80px;" /> -->
	<div style="display: flex; flex-direction: column; margin-top: 80px; <!-- height: 100vh -->; width: calc(100vw);background-color: #2b2c2c;border-bottom-right-radius: 6px;">
	        <!-- <Accordion :accordionItems='pageData'> -->
		<!-- <div class="hrshuiping"><hr /></div> -->
		<!-- <div class="hrshuiping" style="width: 100%;height: 1px;background-color: aliceblue;margin-left: 13px;"></div> -->
		<div style="display: flex; flex-direction: row; width: 100%;background-color: #2b2c2c;border-bottom-right-radius: 6px;">
			<Accordion v-if="allmessages" style="<!-- margin-top: 5%; -->" :items="allmessages.gaming" />
			
			
			<div class="mingao" style="width: 1px;height: 100vh;"></div>
		</div>
	</div>
</template>

<script>
	import Accordion from '../components/Accordion.vue';
	export default {
		name:'game',
		props: {
		    allmessages: Object,
			// gaming: Array,
		},
	    components: {
	        Accordion
	    },
	    data() {
	        return {
	          // items: [
	          //   { title: 'Section 1', content: 'Content for section 1' },
	          //   { title: 'Section 2', content: 'Content for section 2' },
	          //   { title: 'Section 3', content: 'Content for section 3' },
	          // ],
			  // items: allmessages.gaming
	        };
	      },
	    };
</script>

<style>
</style>