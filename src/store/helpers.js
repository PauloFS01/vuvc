import { mapState, mapActions } from 'vuex'

export const searchGetters = {
    ...mapState({
        navElements: state => state.utils.navElements,
        toggleNav: state => state.utils.toggleNav,
    })
  }

  export const searchActions = mapActions(['toggleAction'])