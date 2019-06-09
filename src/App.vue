<template>
  <div class="app" :class="isExpanding">
    <!-- side-bar begin -->
    <div class="nav-bar">
      <vu-menu :class="isVisible" :toggle="toggleNav" @close="toggleAction" />
    </div>            

    <!-- body-begin -->
    <div class="my-body">      
      <vu-header 
        :toggle="toggleNav" 
        @toggleClick="toggleAction"
        @toggleSide="toggleAction"
      />
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
    },
    isExpanding () {
      return this.toggleNav ? 'nav-max' : 'nav-min'
    }
  },
  methods: {
    ...searchActions
  }
}
</script>

<style lang="scss">
body {
  margin:0;  
  padding:0;
}
@media only screen and (min-width: 900px) {
  .nav-min {
    display:grid;
    grid-template-columns: 5rem 5fr;
  }
  .nav-max {
    display:grid;
    grid-template-columns: 15rem 5fr;
  }
  .nav-bar {
    min-height: 50rem;
    background:#ecf0f1;
  }
  .my-body {
    min-height: 50rem;
    background:white;
  }
}
</style>
