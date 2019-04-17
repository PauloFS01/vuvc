<template>
  <div id="app" >
    <vu-menu  />
    <div id="my-body">
      <vu-header @toggleClick="log"/>
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
  },
  methods: {
    log () {
      alert('you click in toggle')
    }
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
  width:94.4%;
  float: right;
}
footer {
  border: solid red 1px;
}
@media only screen and (max-width: 900px) {
  #my-body {
    width:100%;
  }
}
</style>
