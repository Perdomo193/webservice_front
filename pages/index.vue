<template>
	<div>
		<vo-header></vo-header>
		<vo-filter></vo-filter>
		<vo-footer></vo-footer>
	</div>
</template>
<script>
import VoHeader from '../components/header-vo.vue'
import VoFooter from '../components/footer-vo.vue'
import VoFilter from '../components/exercise-one.vue'
  
export default {
	name: 'PageIndex',
	components: {
		VoHeader,
		VoFooter,
		VoFilter
	}
}
</script>
