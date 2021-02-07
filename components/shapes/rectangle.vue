<template>
	<div class="">
		<b-container>
			<b-row class="text-left">
				<b-col>
					<h3 class="mt-4">Retangle</h3>
				</b-col>
				<b-col>
					<b-container>
						<b-row>
							<label for="rectangle_c_1">Vertice_a x</label>
						</b-row>
						<b-row>
							<b-form-input id="rectangle_c_1" style="" type="number" v-model="rectangle.c_1" placeholder="Center X"></b-form-input>
						</b-row>
					</b-container>
				</b-col>
				<b-col>
					<b-container >
						<b-row>
							<label for="rectangle_c_2">Vertice_a y</label>
						</b-row>
						<b-row>
							<b-form-input for="rectangle_c_2" style="" type="number" v-model="rectangle.c_2" placeholder="Center X"></b-form-input>
						</b-row>
					</b-container>
				</b-col>
				<b-col>
					<b-container>
						<b-row>
							<label for="rectangle_c_3">Vertice_b x</label>
						</b-row>
						<b-row>
							<b-form-input  for="input-none" style="" type="number" v-model="rectangle.c_3" placeholder="Center X"></b-form-input>
						</b-row>
					</b-container>
				</b-col>
				<b-col>
					<b-container>
						<b-row>
							<label for="rectangle_c_3">Vertice_b y</label>
						</b-row>
						<b-row>
							<b-form-input for="input-none" style="" type="number" v-model="rectangle.c_4" placeholder="Center X"></b-form-input>
						</b-row>
					</b-container>
				</b-col>
				<b-col class="pt-4">	
					<b-button @click="send" variant="success">Button</b-button>
				</b-col>
			</b-row>
		</b-container>
	</div>
</template>

<script>
import axios from 'axios'

export default {
	name: "VoRectangle",
	data: function () {
		return {
			rectangle: { c_1: 0, c_2: 0, c_3: 0, c_4: 0, action: 'drectangle'},
		};
	},
	methods: {
		send: async function () {
			this.$emit('dataSend', this.rectangle);
		},		
	},
};
</script>

<style scope>
.shapes-vo:hover {
	box-shadow: 3px 3px 3px 2px rgba(0, 0, 0, 0.2);
}
</style>
