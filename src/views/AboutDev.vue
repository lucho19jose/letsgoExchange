<template>
  <div>
    <h1>done by Platzi and Joshep Cambell</h1>
    <br/>
    <p>-they are so good programmers</p>
    <px-data :assets="assets"></px-data>
  </div>
</template>

<script>
import api from "@/api.js"
import PxData from "@/components/PxData"
export default {
  name:"aboutdev",
  components: { PxData },
  data(){
    return{
      assets: []
    }
  },

  created(){
    api.getAssets().then(assets => (this.assets = assets))
  }
}
</script>