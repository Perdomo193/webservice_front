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
    <!--
    <h2>Regiones de interes</h2>
    <table>
      <tr>
        <td><img id="app" :src="image" alt=""/></td>
        
        <td>
          <tr class="border border-dark">
            <td><button type="button" class="btn btn-dark ml-3 btn-block" @click="load">Load</button></td>
            <td><p class="text">Load image to process</p></td>
          </tr>
          
          <tr class="border border-dark">
            <td><button type="button" class="btn btn-dark ml-3 btn-block" @click="load_coordinate">Triangle</button></td>
                <td>
                  <p class="text">Coordinate 1</p>
                  <form action class="form" @submit.prevent="login">
                    <label class="form-label" for="#email">Email:</label>
                    <input v-model="email" class="form-input" type="email" id="email" required placeholder="Email">
                    <label class="form-label" for="#password">Password:</label>
                    <input v-model="password" class="form-input" type="password" id="password" placeholder="Password">
                    <p v-if="error" class="error">Has introducido mal el email o la contraseña.</p>
                    <input class="form-submit" type="submit" value="Login">
                  </form>

                  <label class="ml-5" for="uname">Px: </label>
                  <input type="number" id="t_pxf" min="0" max="3" size="1">
                  <label for="uname">Py: </label>
                  <input type="number" id="t_pyf" min="0" max="3" step="2">
                </td>
                <td>
                  <p class="text">Base and height</p>
                  <label for="uname">b: </label>
                  <input type="number" id="t_bf" min="0" max="3" step="2">
                  <label for="uname">h: </label>
                  <input type="number" id="t_hf" min="0" max="3" step="2">
                </td>
          </tr>
          
          <tr class="border border-dark">
            <td><button type="button" class="btn btn-dark ml-3 btn-block" @click="load_coordinate">Rectangle</button></td>
            <td>
              <p class="text">Coordenate 1</p>
              <label class="ml-5" for="uname">Px1: </label>
              <input type="number" id="r_px1f" min="0" max="3" step="2">
              <label for="uname">Py1: </label>
              <input type="number" id="r_py1f" min="0" max="3" step="2">
            </td>
            <td>
              <p class="text">Coordenate 2</p>
              <label for="uname">Px2: </label>
              <input type="number" id="r_px2f" min="0" max="3" step="2">
              <label for="uname">Py2: </label>
              <input class="mr-2" type="number" id="r_py2f" min="0" max="3" step="2">
            </td>
          </tr>
          
          <tr class="border border-dark">
            <td><button type="button" class="btn btn-dark ml-3 btn-block" @click="load_coordinate">Circle</button></td>
            <td>
              <p class="text">Coordenate central</p>
              <label class="ml-5" for="uname">Px: </label>
              <input type="number" id="c_pxf" min="0" max="3" step="2">
              <label for="uname">Py: </label>
              <input type="number" id="c_pyf" min="0" max="3" step="2">
            </td>
            <td>
              <p class="text">Radio</p>
              <label for="uname">r: </label>
              <input type="number" id="c_rf" min="0" max="3" step="2">
            </td>
          </tr>

          <tr class="border border-dark">
            <td><button type="button" class="btn btn-dark ml-3 btn-block" @click="load_coordinate">Pentagone</button></td>
            <td>
              <p class="text">Coordenate central</p>
              <label class="ml-5" for="uname">Px: </label>
              <input type="number" id="p_pxf" min="0" max="3" step="2">
              <label for="uname">Py: </label>
              <input type="number" id="p_pyf" min="0" max="3" step="2">
            </td>
            <td>
              <p class="text">Radio</p>
              <label for="uname">r: </label>
              <input type="number" id="p_rf" min="0" max="3" step="2">
            </td>
          </tr>
        </td>

        <td>
          <tr class="border border-dark">
            <td><label class="btn-block ml-3" for="uname">Triangle Px: </label></td>
            <td><div id="Triangle_Px"></div></td>
          </tr>
          <tr class="border border-dark">
            <td><label class="btn-block ml-3" for="uname">Triangle Py: </label></td>
            <td><div id="Triangle_Py"></div></td>
          </tr>
          <tr class="border border-dark">
            <td><label class="btn-block ml-3" for="uname">Triangle b: </label></td>
            <td><div id="Triangle_b"></div></td>
          </tr>
          <tr class="border border-dark">
            <td><label class="btn-block ml-3" for="uname">Triangle h: </label></td>
            <td><div id="Triangle_h"></div></td>
          </tr>
          
          <tr class="border border-dark">
            <td><label class="btn-block ml-3" for="uname">Rectangle Px1: </label></td>
            <td><div id="Rectangle_Px1"></div></td>
          </tr>
          <tr class="border border-dark">
            <td><label class="btn-block ml-3" for="uname">Rectangle Py1: </label></td>
            <td><div id="Rectangle_Py1"></div></td>
          </tr>
          <tr class="border border-dark">
            <td><label class="btn-block ml-3" for="uname">Rectangle Px2: </label></td>
            <td><div id="Rectangle_Px2"></div></td>
          </tr>
          <tr class="border border-dark">
            <td><label class="btn-block ml-3" for="uname">Rectangle Py2: </label></td>
            <td><div id="Rectangle_Py2"></div></td>
          </tr>

          <tr class="border border-dark">
            <td><label class="btn-block ml-3" for="uname">Circle Px: </label></td>
            <td><div id="Circle_Px"></div></td>
          </tr>
          <tr class="border border-dark">
            <td><label class="btn-block ml-3" for="uname">Circle Py: </label></td>
            <td><div id="Circle_Py"></div></td>
          </tr>
          <tr class="border border-dark">
            <td><label class="btn-block ml-3" for="uname">Circle r: </label></td>
            <td><div id="Circle_r"></div></td>
          </tr>

          <tr class="border border-dark">
            <td><label class="btn-block ml-3" for="uname">Pentagone Px: </label></td>
            <td><div class="mr-3 ml-3" id="Poligone_Px"></div></td>
          </tr>
          <tr class="border border-dark">
            <td><label class="btn-block ml-3" for="uname">Pentagone Py: </label></td>
            <td><div id="Poligone_Py"></div></td>
          </tr>
          <tr class="border border-dark">
            <td><label class="btn-block ml-3" for="uname">Pentagone r: </label></td>
            <td><div id="Poligone_r"></div></td>
          </tr>
        </td>

       
      </tr>
    </table>
    <header class="showcase">
    </header>-->
  </div>
</template>

<script>
/*
var t_px1 = 0;
var t_py1 = 0;
var t_b1 = 0;
var t_h1 = 0;

var r_px11 = 0;
var r_py11 = 0;
var r_px21 = 0;
var r_py21 = 0;

var c_px1 = 0;
var c_py1 = 0;
var c_r1 = 0;

var p_px1 = 0;
var p_py1 = 0;
var p_r1 = 0;

var t_pxf = 0;
*/
//import axios from 'axios'
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
      image: "http://localhost:4000/fondo.jpg",
    };
  },
  /*  
  mounted()
    {
      this.getTodos();
    },

  methods: {
    async fetch(url){
      this.profilepic = 'https://widgetsdataifx.blob.core.windows.net/widgetsdataifx/Content/themes/Davivienda/images/loading_spinner.gif';
      return await axios.get(url, { responseType: 'arraybuffer' });
    },
    
    load(){
      this.image = 'http://localhost:4000/pcb.jpg';
      console.log("load image");
    },

    getTodos(){
       axios.get('http://localhost:4000/Users/1').then( response => {
                this.todos = response.data
                console.log(response)
            })
          .catch(e => console.log(e))  
    },

    load_coordinate(){
      t_px1 = this.todos[0].t_px;
      t_py1 = this.todos[0].t_py;
      t_b1 = this.todos[0].t_b;
      t_h1 = this.todos[0].t_h;

      r_px11 = this.todos[0].r_px1;
      r_py11 = this.todos[0].r_py1;
      r_px21 = this.todos[0].r_px2;
      r_py21 = this.todos[0].r_py2;

      c_px1 = this.todos[0].c_px;
      c_py1 = this.todos[0].c_py;
      c_r1 = this.todos[0].c_r;

      p_px1 = this.todos[0].p_px;
      p_py1 = this.todos[0].p_py;
      p_r1 = this.todos[0].p_r;

      document.getElementById('Triangle_Px').innerHTML = t_px1;
      document.getElementById('Triangle_Py').innerHTML = t_py1;
      document.getElementById('Triangle_b').innerHTML = t_b1;
      document.getElementById('Triangle_h').innerHTML = t_h1;

      document.getElementById('Rectangle_Px1').innerHTML = r_px11;
      document.getElementById('Rectangle_Py1').innerHTML = r_py11;
      document.getElementById('Rectangle_Px2').innerHTML = r_px21;
      document.getElementById('Rectangle_Py2').innerHTML = r_py21;

      document.getElementById('Circle_Px').innerHTML = c_px1;
      document.getElementById('Circle_Py').innerHTML = c_py1;
      document.getElementById('Circle_r').innerHTML = c_r1;

      document.getElementById('Poligone_Px').innerHTML = p_px1;
      document.getElementById('Poligone_Py').innerHTML = p_py1;
      document.getElementById('Poligone_r').innerHTML = p_r1;

      //console.log(t_px1)
      var id = 1;
      var m = 'http://localhost:4000/users/';
      var b = new URL(m);
      var d = new URL(id, b);
      
      var t_pxf1 = document.getElementById("t_pxf").value;
      var t_pyf1 = document.getElementById("t_pyf").value;
      var t_bf1 = document.getElementById("t_bf").value;
      var t_hf1 = document.getElementById("t_hf").value;

      var r_px1f1 = document.getElementById("r_px1f").value;
      var r_py1f1 = document.getElementById("r_py1f").value;
      var r_px2f1 = document.getElementById("r_px2f").value;
      var r_py2f1 = document.getElementById("r_py2f").value;

      var c_pxf1 = document.getElementById("c_pxf").value;
      var c_pyf1 = document.getElementById("c_pyf").value;
      var c_rf1 = document.getElementById("c_rf").value;

      var p_pxf1 = document.getElementById("p_pxf").value;
      var p_pyf1 = document.getElementById("p_pyf").value;
      var p_rf1 = document.getElementById("p_rf").value;

      axios.put(d, 
      {
        "t_px": t_pxf1,
        "t_py": t_pyf1,
        "t_b": t_bf1,
        "t_h": t_hf1,
        
        "r_px1": r_px1f1,
        "r_py1": r_py1f1,
        "r_px2": r_px2f1,
        "r_py2": r_py2f1,

        "c_px": c_pxf1,
        "c_py": c_pyf1,
        "c_r": c_rf1,

        "p_px": p_pxf1,
        "p_py": p_pyf1,
        "p_r": p_rf1
      })
      console.log(t_pxf1);
      
    }
  }
  */
};
</script>

<style>
/*@import url("../static/css/Main-page.css");*/
</style>