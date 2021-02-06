<template>
  <div class="head">
    <div class="d-flex flex-row bd-highlight mb-3 bg-info">
      
      <div class="p-2 bd-highlight">
        <vo-circle></vo-circle>
        <vo-triangle></vo-triangle>
        <vo-rectangle></vo-rectangle>
        <vo-poligone></vo-poligone>
      </div>
      <div class="p-2 bd-highlight">
        <img id="app" :src="image" alt="" width="540px" height="auto" />
      </div>
    </div>
  </div>
</template>

<script>
import VoCircle from "./shapes/circle";
import VoPoligone from "./shapes/poligone";
import VoRectangle from "./shapes/rectangle";
import VoTriangle from "./shapes/triangle";

export default {
  components: {
    VoCircle,
    VoPoligone,
    VoRectangle,
    VoTriangle,
  },
  data: function () {
    return {
      profilepic: null,
      todos: null,
      image: "http://localhost:3000/fondo.jpg",
    };
  },
};
</script>

<style>
</style>
