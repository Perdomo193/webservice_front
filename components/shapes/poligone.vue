<template>
	<div class="">
		<b-container>
			<b-row>
				<b-col class="text-left">
					<h3 class="mt-4">Hexagon</h3>
				</b-col>
				<b-col>
					<b-container>
						<b-row>
							<label for="hexagon_c_1">Center X</label>
						</b-row>
						<b-row>
							<b-form-input id="hexagon_c_1" style="" type="number" v-model="hexagon.c_1" placeholder="Center X"></b-form-input>
						</b-row>
					</b-container>
				</b-col>
				<b-col>
					<b-container >
						<b-row>
							<label for="hexagon_c_2">Center Y</label>
						</b-row>
						<b-row>
							<b-form-input for="hexagon_c_2" style="" type="number" v-model="hexagon.c_2" placeholder="Center X"></b-form-input>
						</b-row>
					</b-container>
				</b-col>
				<b-col>
					<b-container>
						<b-row>
							<label for="hexagon_c_3">Apotema</label>
						</b-row>
						<b-row>
							<b-form-input  for="input-none" style="" type="number" v-model="hexagon.c_3" placeholder="Center X"></b-form-input>
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
	name: "VoPoligone",
	data: function () {
		return {
			hexagon: { c_1: 0, c_2: 0, c_3: 0, action: 'dhexagon', shape_id: 4 },
		};
	},
	methods: {
		send: async function () {
			this.$emit('dataSend', this.hexagon);
		},
	},
};
</script>

<style scope>
.shapes-vo:hover {
	box-shadow: 3px 3px 3px 2px rgba(0, 0, 0, 0.2);
}
</style>
