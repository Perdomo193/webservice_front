<template>
  <div class="mb-1 bg-muted text-white rounded p-1 shapes-vo" data-mdb-ripple-color="light">
    <h3>Triangle</h3>
    <form action class="d-flex justify-content-between" @submit.prevent="send">
      <div class="d-flex flex-column mx-2">
        <h4>Center y</h4>
        <input
          v-model="cy"
          class="form-input"
          type="number"
          id="triangle_cy"
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
          id="triangle_cx"
          placeholder="Center x"
        />
      </div>
      <div class="d-flex flex-column ml-2">
        <h4>Base</h4>
        <input
          v-model="base"
          class="form-input"
          type="number"
          id="triangle_cr"
          placeholder="Base"
        />
      </div>
      <div class="d-flex flex-column ml-2">
        <h4>Height</h4>
        <input
          v-model="height"
          class="form-input"
          type="number"
          id="triangle_cr"
          placeholder="Height"
        />
      </div>
      <input class="btn btn-dark pt-2 ml-2" type="submit" value="Send"/>
    </form>
  </div>
</template>

<script>

import axios from 'axios'

export default {
  name: "VoTriangle",
  data: function () {
    return {
      cx: 0,
      cy: 0,
      base: 0,
      height: 0,
    };
  },
  methods: {
    async send() {
      axios.post('http://localhost:4000/Users/1', {
        "c_1": this.cx,
        "c_2": this.cy,
        "c_3": this.base,
        "c_4": this.height,
        "shape_id": 2,
        
      })
      console.log(this.cx);
    },
  },
};

</script>

<style scope>

.shapes-vo:hover {
  box-shadow: 3px 3px 3px 2px rgba(0, 0, 0, 0.2);
}

</style>