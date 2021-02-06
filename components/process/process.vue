<template>
  <div class="mb-1 bg-muted text-white rounded p-1 shapes-vo">
    <h3>Process image</h3>
    <form action class="d-flex justify-content-between" @submit.prevent="send">
      <div class="d-flex flex-column mx-2">
        
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
    async send() {
      axios.post('http://localhost:4000/Users/1', {
        "c_1": this.cx,
        "c_2": this.cy,
        "c_3": this.cr,
        "shape_id": 1,
        
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

