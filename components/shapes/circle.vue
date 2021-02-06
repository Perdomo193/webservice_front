<template>
  <div class="mb-1 bg-muted text-white rounded p-1 shapes-vo">
    <h3>Circle</h3>
    <form action class="d-flex justify-content-between" @submit.prevent="send">
      <div class="d-flex flex-column mx-2">
        <h4>Center y</h4>
        <input
          v-model="cy"
          class="form-input"
          type="number"
          id="circle_cy"
          required
          placeholder="Center y"
        />
      </div>
      <div class="d-flex flex-column">
        <h4>Center x</h4>
        <input
          v-model="cx"
          class="form-input"
          type="number"
          id="circle_cx"
          placeholder="Center x"
        />
      </div>
      <div class="d-flex flex-column">
        <h4>Radio</h4>
        <input
          v-model="cr"
          class="form-input"
          type="number"
          id="circle_cr"
          placeholder="Radio"
        />
      </div>
      <input class="btn btn-dark pt-2" type="submit" value="Send"/>
    </form>
  </div>
</template>

<script>

import axios from 'axios'

export default {
	name: "VoCircle",
	data: function () {
		return {
			cx: 0,
			cy: 0,
			cr: 0,
		};
	},
	methods: {
		send: async function () {
			let response = await axios ({
				method: 'post',
				url: 'http://localhost:3000/api/shape/all',
				data: {
					'c_1': this.cx,
					'c_2': this.cy,
					'c_3': this.cr,
					'shape_id': 'circle'
				},
				headers: {'Content-Type': 'application/json'},
			})
		},
	},
};
</script>

<style scope>
.shapes-vo:hover {
  box-shadow: 3px 3px 3px 2px rgba(0, 0, 0, 0.2);
}

</style>

