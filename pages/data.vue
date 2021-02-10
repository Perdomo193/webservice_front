<template>
	<div>
		<vo-header></vo-header>
		<vo-footer></vo-footer>
	</div>
</template>
<script>
import VoHeader from '../components/header-vo.vue'
import VoFooter from '../components/footer-vo.vue'
  
export default {
	name: 'PageData',
	components: {
		VoHeader,
		VoFooter,
	}
}
</script>

