<template>
	<div>
		<header-vo></header-vo>
Hijo de mil putas
<!--	<div class="d-flex flex-row bd-highlight mb-3 bg-info">
		<div class="p-2 bd-highlight">
			<vo-load></vo-load>
		</div>
	</div>
-->
	</div>
</template>

<script>
import HeaderVo from '../components/header-vo.vue'
//import VoCircle from "./process/process";
//import VoLoad from "./process/upload"

export default {
	components: {
		HeaderVo,
//		VoCircle,
//		VoLoad,
	},
	data: function () {
		return {
			profilepic: null,
			todos: null,
		};
	},
};
</script>

<style>
</style>
