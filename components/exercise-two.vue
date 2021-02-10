<template>
	<section id="shapes">
		<b-container class="bv-example-row">
			<b-row>
				<b-col>
					<b-form-file
						accept=".jpg,.png,.jpeg"
						v-model="file"
						:state="Boolean(file)"
						@change="handleFileUpload"
						placeholder="Choose a file or drop it here..."
						drop-placeholder="Drop file here..."
					></b-form-file>
 				</b-col>
			</b-row>
		</b-container>
		<div class="d-flex flex-row justify-content-center">
			<div class="mx-3 flex-fill flex-column d-flex justify-content-center">
				<h5 class="p-3 text-center">Imagen a procesar</h5>
				<div class="d-flex justify-content-center">
					<img v-show="file" width="200px" :src="path" alt="imagen_upload"/>
				</div>
			</div>
			<div class="my-2 mx-3 flex-fill flex-column d-flex justify-content-center">
				<h5 class="my-2 p-3 text-center">Imagen procesada</h5>
				<div class="d-flex justify-content-center">
					<img v-show="disp" width="200px" id="image-response" :src="disp" alt="imagen_modify"/>
				</div>
			</div>
		</div>
		<b-tabs content-class="mt-2" class="mx-5">
			<b-tab title="Hexagono" active>
				<vo-poligone @dataSend="processImage" class="py-2"></vo-poligone>
			</b-tab>
			<b-tab title="Circulo">
				<vo-circle @dataSend="processImage" class="py-2"></vo-circle>
			</b-tab>
			<b-tab title="triangulo">
				<vo-triangle @dataSend="processImage" class="py-2"></vo-triangle>
			</b-tab>
			<b-tab title="rectangulo">
				<vo-rectangle @dataSend="processImage" class="py-2"></vo-rectangle>
			</b-tab>
		</b-tabs>	
	</section>
</template>

<script>
import VoCircle from "./shapes/circle";
import VoPoligone from "./shapes/poligone";
import VoRectangle from "./shapes/rectangle";
import VoTriangle from "./shapes/triangle";

import axios from 'axios'

export default {
	name: 'VoShapes',
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
			disp: '',
			host: 'http://localhost:3000/',
			info: {}
		};
	},
	methods: {
		processImage: async function(data) {
			if (!this.file) {
				return;
			}
			let response = await axios ({
				url: this.host + 'api/shape/all',
				method: 'post',
				data: { data: data, image: this.info },
				headers: {'Content-Type': 'application/json'},
			});

			this.disp = this.host + response.data.float + '/' + response.data.name + '.' + response.data.extension;
			var el = document.getElementById('image-response');
			el.src = this.disp + '?' + new Date().getTime();
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
			this.info = response.data
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
			this.info = {};
	     	}
	},
};
</script>

<style>
</style>
