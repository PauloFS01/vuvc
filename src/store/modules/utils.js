export default {
    state: {
        navElements:[],
        toggleNav: false
    },
    mutations:{
        CHANGE_TOGGLE (state) {
            state.toggleNav = !state.toggleNav
          }        
    },
    actions:{
        toggleAction ({commit}) {
            commit('CHANGE_TOGGLE')
        }
    }
}