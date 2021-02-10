<template>
	<section id="filters">
		<b-container class="bv-example-row">
			<b-row>
				<b-col cols="4">
					<b-form-file
						accept=".jpg,.png,.jpeg"
						v-model="file"
						:state="Boolean(file)"
						@change="handleFileUpload"
						placeholder="Choose a file or drop it here..."
						drop-placeholder="Drop file here..."
					></b-form-file>
 				</b-col>
				<b-col cols="4">
					<b-form-select v-model="filter" :options="options"></b-form-select>
				</b-col>
				<b-col>
					<b-button variant="success" @click="submitFile()">Ejecutar</b-button>
				</b-col>
				<b-col v-show="file">
					<b-button variant="danger" @click="removeFile()">Eliminar</b-button>
				</b-col>
			</b-row>
		</b-container>
		<div class="d-flex flex-row justify-content-center">
			<div class="my-2 mx-3 flex-fill flex-column d-flex justify-content-center">
				<h5 class="my-2 p-3 text-center">Imagen a procesar</h5>
				<div class="d-flex justify-content-center">
					<img v-show="file" width="300px" :src="path" alt="imagen_upload"/>
				</div>
			</div>
			<div class="my-2 mx-3 flex-fill flex-column d-flex justify-content-center">
				<h5 class="my-2 p-3 text-center">Imagen procesada con {{ filter | capitalize }}</h5>
				<div class="d-flex justify-content-center">
					<img v-show="resp" width="300px" :src="resp" alt="imagen_modify"/>
				</div>
			</div>
		</div>	
	</section>
</template>

<script>
import axios from 'axios'

export default {
	name: 'VoFilters',
	data: function () {
		return {
			file: '',
			path: '',
			resp: '',
			host: 'http://localhost:3000/',
			filter: 'gray',
			options: [
				{ value: 'gray', text: 'Color Gray' },
				{ value: 'canny', text: 'Filtro de Canny' },
				{ value: 'circle', text: 'Detectar Circulos' },
				{ value: 'lines', text: 'Detectar Lineas' },
			]
		}
	},
	filters: {
		capitalize: function (value) {
			if (!value) return ''
			value = value.toString()
			return value.charAt(0).toUpperCase() + value.slice(1)
		}
	},
	methods: {
		submitFile: async function () {
			if (!this.file) return;

			let formData = new FormData();
			formData.append('image', this.file)
			let response = await axios ({
				url: this.host + 'api/image/save/' + this.filter,
				method: 'post',
				data: formData,
				headers: {'Content-Type': 'multipart/form-data' },
			})
			this.resp = this.host + response.data.float + '/' + response.data.name + '.' + response.data.extension;
				
		} ,
		handleFileUpload: function(event) {
			this.path = event.target.files[0];
			let image = new Image();
			let reader = new FileReader();
			let vm = this;

			reader.onload = (event) => {
				vm.path = event.target.result;
			}
			reader.readAsDataURL(this.path);
			
		},
		removeFile: function(event) {
			this.file = '';
			this.path = '';
			this.resp = '';
	     	} 
	}
}
</script>

