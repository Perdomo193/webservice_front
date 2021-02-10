<template>
	<div>
		<vo-header></vo-header>
		<vo-shapes></vo-shapes>
		<vo-footer></vo-footer>
	</div>
</template>
<script>
import VoHeader from '../components/header-vo.vue'
import VoFooter from '../components/footer-vo.vue'
import VoShapes from '../components/exercise-two.vue'

export default {
	name: 'PageShapes',
	components: {
		VoHeader,
		VoFooter,
		VoShapes
	}
}
</script>
