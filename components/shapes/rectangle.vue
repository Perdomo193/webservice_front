<template>
  <div class="mb-1 bg-muted text-white rounded p-1 shapes-vo">
    <h3>Rectangle</h3>
    <form action class="d-flex justify-content-between" @submit.prevent="send">
      <div class="d-flex flex-column mx-2">
        <h4>Center y1</h4>
        <input
          v-model="cy1"
          class="form-input"
          type="number"
          id="rectangle_cy1"
          required
          placeholder="Center y1"
        />
      </div>
      <div class="d-flex flex-column">
        <h4>Center x1</h4>
        <input
          v-model="cx1"
          class="form-input"
          type="number"
          id="rectangle_cx1"
          placeholder="Center x1"
        />
      </div>
      <div class="d-flex flex-column ml-2">
        <h4>Center y2</h4>
        <input
          v-model="cy2"
          class="form-input"
          type="number"
          id="rectangle_cy2"
          placeholder="Center y2"
        />
      </div>
      <div class="d-flex flex-column ml-2">
        <h4>Center x2</h4>
        <input
          v-model="cx2"
          class="form-input"
          type="number"
          id="rectangle_cx2"
          placeholder="Center x2"
        />
      </div>
      <input class="btn btn-dark pt-2 ml-2" type="submit" value="Send"/>
    </form>
  </div>
</template>

<script>

import axios from 'axios'

export default {
  name: "VoRectangle",
  data: function () {
    return {
      cx1: 0,
      cy1: 0,
      cx2: 0,
      cy2: 0,
    };
  },
  methods: {
    async send() {
      axios.post('http://localhost:4000/Users/1', {
        "c_1": this.cx1,
        "c_2": this.cy1,
        "c_3": this.cx2,
        "c_4": this.cy2,
        "shape_id": 3,
        
      })
      console.log(this.cx1);
    },
  },
};

</script>

<style scope>

.shapes-vo:hover {
  box-shadow: 3px 3px 3px 2px rgba(0, 0, 0, 0.2);
}

</style>