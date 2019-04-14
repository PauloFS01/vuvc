<template>
  <div id="app" >
    <vu-menu  />
    <div id="my-body">
      <vu-header />
      <router-view/> 
    <footer>
      footer
    </footer>       
    </div>      
  </div>    
</template>

<script>
import VuMenu from '@/components/navigation/VuMenu'
import VuHeader from '@/components/navigation/VuHeader'
import { searchGetters } from '@/store/helpers'
export default {
  components: {
    VuMenu,
    VuHeader
  },
  computed: {
    ...searchGetters
  }
}
</script>

<style>
body {
  margin: 0;
  background-color: bisque;
}
#my-body {  
  border: solid red 1px;
  width: 94.5%;
  float: right;
}
footer {
  border: solid red 1px;
}
</style>
