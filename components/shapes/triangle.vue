<template>
	<div class="">
		<b-container>
			<b-row class="text-left">
				<b-col>
					<h3 class="mt-4">Triangle</h3>
				</b-col>
				<b-col>
					<b-container>
						<b-row>
							<label for="triangle_c_1">Center X</label>
						</b-row>
						<b-row>
							<b-form-input id="triangle_c_1" style="" type="number" v-model="triangle.c_1" placeholder="Center X"></b-form-input>
						</b-row>
					</b-container>
				</b-col>
				<b-col>
					<b-container >
						<b-row>
							<label for="triangle_c_2">Center Y</label>
						</b-row>
						<b-row>
							<b-form-input for="triangle_c_2" style="" type="number" v-model="triangle.c_2" placeholder="Center X"></b-form-input>
						</b-row>
					</b-container>
				</b-col>
				<b-col>
					<b-container>
						<b-row>
							<label for="triangle_c_3">Base</label>
						</b-row>
						<b-row>
							<b-form-input  for="input-none" style="" type="number" v-model="triangle.c_3" placeholder="Center X"></b-form-input>
						</b-row>
					</b-container>
				</b-col>
				<b-col>
					<b-container>
						<b-row>
							<label for="triangle_c_3">Heigth</label>
						</b-row>
						<b-row>
							<b-form-input  for="input-none" style="" type="number" v-model="triangle.c_4" placeholder="Center X"></b-form-input>
						</b-row>
					</b-container>
				</b-col>
				<b-col class="pt-4 float-right">	
					<b-button @click="send" variant="success">Button</b-button>
				</b-col>
			</b-row>
		</b-container>
	</div>
</template>

<script>
import axios from 'axios'

export default {
	name: "VoTriangle",
	data: function () {
		return {
			triangle: { c_1: 0, c_2: 0, c_3: 0, c_4: 0, action: 'dtriangle'},
		};
	},
	methods: {
		send: async function () {
			this.$emit('dataSend', this.triangle);
		},
	},
};
</script>

<style scope>
.shapes-vo:hover {
	box-shadow: 3px 3px 3px 2px rgba(0, 0, 0, 0.2);
}
</style>
