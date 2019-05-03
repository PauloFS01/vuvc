<template>
  <div id="app" >
    <vu-menu :class="isVisible" @close="toggleAction" />
    <div id="my-body">
      <vu-header :toggle="toggleNav" @toggleClick="toggleAction"/>
      <router-view/>       
    </div>      
  </div>    
</template>

<script>
import VuMenu from '@/components/navigation/VuMenu'
import VuHeader from '@/components/navigation/VuHeader'
import { searchGetters, searchActions } from '@/store/helpers'
export default {
  components: {
    VuMenu,
    VuHeader
  },
  computed: {
    ...searchGetters,
    isVisible () {
      return this.toggleNav ? ' ' : 'hiden-nav'
    }
  },
  methods: {
    ...searchActions
  }
}
</script>

<style >
body {
  margin: 0;
  background:#D980FA;

}
#my-body {  
  border: solid red 1px;
  width:94.4%;
  float: right;
}
footer {
  float:right;
  border: solid red 1px;
}
@media only screen and (max-width: 900px) {
  #my-body {
    width:100%;
  }
  .hiden-nav {
      margin-left: -16rem;
  }  
}
</style>
