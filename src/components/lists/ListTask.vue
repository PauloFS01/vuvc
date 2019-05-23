<template>
    <div class="wrapper">
        <div class="title">
            <h1> {{ title }} </h1>
            <span>{{ subtitle }}</span>            
        </div>
        <ul>        
            <li v-for="task in tasks" :key="task.id ">
                <div class="checkbox"> <input type="checkbox" v-model="change[task.id]" @change="checked(task.id)" :id="task.id"> <label :for="task.id"></label></div>
                <div> {{ task.text }} </div> <div class="icon"> <i class="far fa-trash-alt" @click="deleteClick(task.id)"></i> </div> 
            </li>                         
        </ul>
        <footer>
           <i :class="icon"></i> {{ footer }}
        </footer>
    </div>
</template>
<script>
export default {
    props: {
        title: {
            type:String,
            default:'Tasks title'
        },
        subtitle: {
            type:String,
            default:'Subtitle'
        },
        footer: {
            type: String,
            default:'Updated 3 minutes ago'
        },
        icon: {
            type:String,
            default:'fas fa-sync'
        },
        tasks: {
            type:Array,
            default: () => [
                {text:'Lines From Great Russian Literature? Or E-mails From My Boss?',id: 1},
                {text:'Sign contract for "What are conference organizers afraid of?" Lines From Great Russian Literature? Or E-mails From My Boss?',id: 2}
            ]
        }
    },
    methods: {
        deleteClick (id) {
            this.$emit('delete', id)
        },
        checked (id) {            
            this.$emit('checked', {id: id, checked: this.change[id]})
        }
    },
    data () {
        return {
            change: []
        }
    }
}
</script>

<style lang="scss" scoped>
.wrapper {
    box-shadow: 5px 10px 28px #888888;
    border-radius:5px;
    font-family:arial, sans-serif!important;
    padding:0;
}
footer {
    padding:1rem;
    background:#47c485;
    color:white;
    border-radius:0 0 5px 5px;
}
.title {    
    background:#47c485;
    margin:0;
    padding:1rem;
    color:white;
    border-radius:5px 5px 0 0;
    h1 {
        margin:0;
    }
}
ul {
    list-style:none;
    font-family:arial, sans-serif!important;
    color:#8395a7;    
    padding:0;  
    margin: 0;
}
li {
    // background:aquamarine;
    display: grid;
    grid-template-columns:1fr 15fr 1fr;
    gap: .2rem;
    border-bottom:solid #dfe6e9 1px; 
    padding:1rem;   
    margin: 0; 
    vertical-align: middle;
    div {       
        height:100%;
        margin:0;
        padding:0;
        &:last-child {
            text-align:right;            
        }
        &:first-child {
            text-align:left;            
            display: inline-block;
        }         
        &:nth-child(2) {
            text-align:center;            
        }          
    }    
}
/*Styling checkbox*/
.checkbox {
    input {
       opacity: 0;
    }
    label {
        position:relative;
        &::before {
            content: "";
            height:18px;
            width: 18px;
            border: 1px solid;
            background:#8395a7;
            border-radius:5px;  
            position: absolute;
            left:-1rem;
        }
        &::after {
            content:"";
            display:inline-block;
            height:6px;
            width:9px;
            border-left:white 2px solid;
            border-bottom:white 2px solid;            
            transform:rotate(-45deg);
            position:absolute;
            top:.19rem;
            left:-.7rem;    
        }
    }
}
/*Hide the checkmark by default*/
.checkbox input[type="checkbox"] + label::after {
    content: none;
}
/*Unhide the checkmark on the checked state*/
.checkbox input[type="checkbox"]:checked + label::after {
    content: "";
    animation: growIn .5s;
}
.icon {
    i {
        &:hover {
            animation: shakeIn .2s;
        }        
    }
}
@keyframes growIn {
    0% {
        transform-origin: center center;
        transform:rotate(-45deg) scale(1);
    } 
    50% {
        transform-origin: center center;        
        transform:rotate(-45deg) scale(1.5);
    }
    100% {
        transform-origin: center center;
        transform:rotate(-45deg) scale(1);
    } 
}
@keyframes shakeIn {
    0% {
        transform-origin: center center;
        transform: rotate(0deg);
    }
    70% {
        transform-origin: center center;
        transform: rotate(20deg);
    }   
    80% {
        transform-origin: center center;
        transform: rotate(10deg);        
    } 
    100% {
        transform-origin: center center;
        transform: rotate(0deg);
    } 
}
</style>
