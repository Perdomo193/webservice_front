<template>
	<div class="d-flex flex-column">
	<b-form-file
			accept=".jpg,.png,.jpeg"
			v-model="file"
			:state="Boolean(file)"
			@change="handleFileUpload"
			placeholder="Choose a file or drop it here..."
			drop-placeholder="Drop file here..."
		></b-form-file>

		<div v-if="file" class="d-flex flex-row">
			<img width="200px" :src="path" alt="imagen_upload"/>
			<img v-show="resp" width="200px" :src="resp" alt="imagen_modify"/>
			<button class="btn btn-secondary m-2" @click="removeImage">Remove</button>
		</div>
		<div class="my-4">
			<b-form-select v-model="filter" :options="options"></b-form-select>
		</div>
		<button class="btn btn-secondary m-2" @click="submitFile()">Submit</button>
	</div>
</template>

<script>
import axios from 'axios'

export default {
	data: function () {
		return {
			file: '',
			path: '',
			resp: '',
			host: 'http://localhost:3000/',
			filter: 'gray',
			options: [
				{ value: 'gray', text: 'Color Gray' },
				{ value: 'canny', text: 'Bordes canny' },
				{ value: 'circle', text: 'Detectar circulos' },
				{ value: 'lines', text: 'Detectar lineas' },
			]
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
		removeImage: function(event) {
			this.file = '';
			this.path = '';
	     	} 
	}
}
</script>

<style scope>

.shapes-vo:hover {
  box-shadow: 3px 3px 3px 2px rgba(0, 0, 0, 0.2);
}

</style>

