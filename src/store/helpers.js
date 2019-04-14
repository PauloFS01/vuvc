import { mapState } from 'vuex'

export const searchGetters = {
    ...mapState({
        navElements: state => state.utils.navElements,
    })
  }