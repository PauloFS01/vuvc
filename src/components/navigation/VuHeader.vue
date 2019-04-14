<template>
    <div class="header-div">
        <div class="set-sideBar">
            <i v-if="toggle" 
            class="fas fa-list"
            @click="toggle = !toggle"
            ></i>
            <i v-else class="fas fa-ellipsis-v"
            @click="toggle = !toggle"
            ></i>
        </div>
        <div class="avatar-settings"></div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            toggle: false
        }
    }
}
</script>
<style lang="scss" scoped>
.header-div {
    height: 3rem;;
}
</style>
