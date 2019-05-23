<template>
    <ul id="wrapper">
        <li id="li-header"> 
            <h1> {{ title }} </h1>
            <h3> {{ subtitle }} </h3>
        </li>
        <li class="li-itens" v-for="(elements, index) in myElements" :key="index">
            <div @click="elements.show = !elements.show">
                <strong> {{ elements.name }} </strong>
                <i v-if="elements.show" class="fas fa-angle-double-up"></i> 
                <i v-else class="fas fa-angle-double-down"></i> 
            </div>
            <transition name="sublist">
                <ul v-if="elements.show" class="sub-list" >
                    <li v-for="(element, index) in elements.sublist" :key="index"> {{ element }} </li>
                </ul>            
            </transition>

        </li>
        <li>
            <h3 id="li-footer"> {{ footer }} </h3>   
        </li>
    </ul>
</template>
<script>
export default {
    props: {
        elements: {
            type:Array
        },
        footer: {
            type:String,
            default:'Footer Here'
        },
        title: {
            type: String,
            default:'Title here'
        },
        subtitle: {
            type:String,
            default:'Subtitle here'
        }
    },
    data () {
        return {            
            defaultElement:[
                {name:'Sublists', show: false , sublist: ['Lists items here', 'Lists items here', 'Lists items here']}, 
                {name:'Sublists', show: false , sublist: ['Lists items here', 'Lists items here', 'Lists items here']}
            ]
        }
    },
    computed: {
        myElements () {
            return this.elemens || this.defaultElement;
        }
    }
}
</script>
<style lang="scss" scoped>
@mixin clear-wrapper {
  margin:0;
  padding:0;
  list-style:none;
}
@mixin border-list {
    border-bottom:dashed #8395a7 1px;
    padding:1rem;
}
@mixin header-footer {
    background:#47c485;
    color:white;
}
#wrapper {    
    box-shadow: 5px 10px 28px #888888;
    font-family:arial, sans-serif!important;
    @include clear-wrapper;
}
.sub-list {
    @include clear-wrapper;
    li {
        padding:.5rem;
    }   
}
h1,h3 {
    @include clear-wrapper;
}
#li-header, #li-footer {
    @include header-footer;
    padding:1rem;
}
.li-itens {
    @include border-list;  
    color:#8395a7;  
    div {
        text-transform:uppercase;
        i {
            float:right;
        }
    }
}
.sublist-enter-active {
    opacity:0;
    transition: all .2s ease-in-out;
}
.sublist-leave-active {
    opacity:0;
    transition: all .5s ease-in-out ;
}
</style>
