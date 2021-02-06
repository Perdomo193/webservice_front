<template>
  <div class="mb-1 bg-muted text-white rounded p-1 shapes-vo">
    <div class="large-12 medium-12 small-12 cell">
      <input accept="image/png,image/jpg,image/jpeg" type="file" id="files" ref="files" multiple v-on:change="handleFilesUpload()"/>
    <button class="btn btn-dark pt-2" v-on:click="submitFiles()">Submit</button>
    </div>
  </div>
</template>

<script>

import axios from 'axios'

export default {
    /*
      Defines the data used by the component
    */
    data(){
      return {
        files: ''
      }
    },

    methods: {
      /*
        Submits all of the files to the server
      */
      submitFiles(){
        /*
          Initialize the form data
        */
        let formData = new FormData();

        /*
          Iteate over any file sent over appending the files
          to the form data.
        */
        for( var i = 0; i < this.files.length; i++ ){
          let file = this.files[i];

          formData.append('files[' + i + ']', file);
        }

        /*
          Make the request to the POST /multiple-files URL
        */
        axios.post( '/api/image/save',
          formData,
          {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
          }
        ).then(function(){
          console.log('SUCCESS!!');
        })
        .catch(function(){
          console.log('FAILURE!!');
        });
      },

      /*
        Handles a change on the file upload
      */
      handleFilesUpload(){
        this.files = this.$refs.files.files;
      }
    }
  }
</script>

<style scope>

.shapes-vo:hover {
  box-shadow: 3px 3px 3px 2px rgba(0, 0, 0, 0.2);
}

</style>

