<template>
	<div class="container">
		<b-container>
			<b-row class="text-center">
				<b-col>
					<vo-circle @dataSend="processImage" class="py-2"></vo-circle>
					<vo-poligone @dataSend="processImage" class="py-2"></vo-poligone>
					<vo-triangle @dataSend="processImage" class="py-2"></vo-triangle>
					<vo-rectangle @dataSend="processImage" class="py-2"></vo-rectangle>
				</b-col>
			</b-row>
{{ action  }}
			<b-col class="text-center">
				<b-container>
					<b-row>
						<b-col>
							<b-form-file
							       accept=".jpg,.png,.jpeg"
							       v-model="file"
							       id="fileq"
							       :state="Boolean(file)"
							       @change="handleFileUpload"
							       placeholder="Choose file"
							       drop-placeholder="Drop file here...">
							</b-form-file>
						</b-col>
						<b-col>
							<b-button @click="removeImage">Remove</b-button>
						</b-col>
					</b-row>
					<b-row>
						<b-col>
							<img v-show="file" width="200px" :src="file" alt="imagen_upload"/>
						</b-col>
						<b-col>
							<img v-show="path" width="200px" :src="path" alt="imagen_upload"/>
						</b-col>
					</b-row>
				</b-container>
			</b-col>
		</b-container>
	</div>
</template>

<script>
import VoCircle from "./shapes/circle";
import VoPoligone from "./shapes/poligone";
import VoRectangle from "./shapes/rectangle";
import VoTriangle from "./shapes/triangle";

import axios from 'axios'

export default {
	components: {
		VoCircle,
		VoPoligone,
		VoRectangle,
		VoTriangle,
	},
	data: function () {
		return {
			file: '',
			path: '',
			host: 'http://localhost:3000/',
		};
	},
	methods: {
		processImage: function(data) {
			this.action = data;
		},
		submitFile: async function () {
			if (!this.file) {
				return;
			}
			let formData = new FormData();
			formData.append('image', this.file)

			let response = await axios ({
				url: this.host + 'api/image/movie',
				method: 'post',
				data: formData,
				headers: {'Content-Type': 'multipart/form-data'},
			});
			console.log(response.data);
		},
		handleFileUpload: function(event) {
			this.path = event.target.files[0];
			this.file = event.target.files[0];
			let image = new Image();
			let reader = new FileReader();
			let vm = this;

			reader.onload = (event) => {
				vm.path = event.target.result;
			}
			
			reader.readAsDataURL(this.path);
			this.submitFile();	
		},
		removeImage: function(event) {
			this.file = '';
			this.path = '';
	     	}
	},
};
</script>

<style>
</style>
