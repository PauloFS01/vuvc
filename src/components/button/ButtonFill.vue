<template>
<!--ToDo... use css variables -->
        <button @click="buttonClick" :class="color">
            {{ textButtom }}
        </button>
</template>
<script>
export default {
    props: {
        textButtom: {
            type: String,
            default: 'Default'
        },
        color: {
            type: String,
            default: 'default'
        }
    },
    methods: {
        buttonClick (){
            this.$emit('click')
        }
    }
}
</script>
<style lang="scss" scoped>

//colors
$botton-primary:#65D1D4;
$botton-info:#66C4DE;
$botton-success:#7ED6A5;
$botton-warning:#FCCF71;
$botton-danger:#F1926E;
$botton-default:#7f8c8d;

// mixins
@mixin font-color ($color){
    color:darken($color, 40%);
    &:hover {
        background:$color;
        color:white;
    }
    &:focus {
        background:darken($color, 5%);;
        color:white;
    }    
}

button {
    font-style:sans-serif;
    font-family: Arial;
    font-size:1em;
    border-radius:20px;
    padding:.5em;
    width:100%;
    min-height:2.2rem;
    box-sizing:border-box;
    cursor:pointer;
    outline: 0;
}
.default {
    color: $botton-default;    
    border:solid $botton-default 2px;
    background:transparent;
    @include font-color ($botton-default);
}
.primary {
    color:$botton-primary;    
    background:transparent;
    border:solid $botton-primary 2px;
    @include font-color ($botton-primary);
}    
.info {
    color:$botton-info;    
    background:transparent;
    border:solid $botton-info 2px;
    @include font-color ($botton-info);
} 
.success {
    color:$botton-success;    
    background:transparent;
    border:solid $botton-success 2px;
    @include font-color ($botton-success);
} 
.warning {
    color:$botton-warning;    
    background:transparent;
    border:solid $botton-warning 2px;
    @include font-color ($botton-warning);
} 
.danger {
    color:$botton-danger;    
    background:transparent;
    border:solid $botton-danger 2px;
    @include font-color ($botton-danger);
} 
</style>