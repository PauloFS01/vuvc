<template>
<!--ToDo... use css variables -->
        <button :class="color">
            <span v-if="color === 'next'" >
                {{ textButtom }}  <i :class="iconLabel" ></i>
            </span>
            <span v-else>
                <i :class="iconLabel" ></i> {{ textButtom }}
            </span>              
        </button>
</template>
<script>
export default {
    props: {
        textButtom: {
            type: String,
            default: 'Next'
        },
        color: {
            type: String,
            default: 'next'
        },
        iconLabel: {
            type: String,
            default: 'fas fa-angle-double-right'
        }
    }    
}
</script>
<style lang="scss" scoped>
button {
    font-style:sans-serif;
    font-family: Arial;
    font-size:1rem;
    border:0;
    border-radius:20px;
    min-width:120px;
    min-height:2.2rem;
    box-sizing:border-box;
    cursor:pointer;
    position: relative;
    outline: 0;
    padding:0;
}
.next {
    color: white;
    background:#7f8c8d;    
    i {
        color:#636e72;
        transition: opacity .3s ease; 
    }
    &:active {
        background:#7f8c8d;
    }
    &:hover {
        background:#636e72;
        i {
            color:white;
            animation: moveRight 1s;
        }
    }
    &:focus {
        background:#636e72;
        color:white;
        i {
            color:white;
        }
    }
}
.back {
    color: white;
    background:#7f8c8d;    
    i {
        color:#636e72;
    }
    &:active {
        background:#7f8c8d;
    }
    &:hover {
        background:#636e72;
        i {
            color:white;
            animation: moveLeft 1.5s;
        }
    }
    &:focus {
        background:#636e72;
        color:white;
        i {
            color:white;
        }
    }
}
.settings {
    color: white;
    background:#82ccdd;
    i {
        transition: opacity .3s ease; 
    }
    &:active {
        background:#82ccdd;
    }
    &:hover {
        background:#60a3bc;
        i {
            animation: rotateIn 1s;
        }
    }
    &:focus {
        background:#60a3bc;
    }
}
.submit {
    color: white;
    background:#1dd1a1;
    &:active {
        background:#1dd1a1;
    }
    &:hover {
        background:#10ac84;
        i {
            animation: changeSize 1s;
        }
    }
    &:focus {
        background:#10ac84;
    }
}
.search {
    color: white;
    background:#fbc531;
    i {
        transition: opacity .3s ease;
    }
    &:active {
        background:#fbc531;
    }
    &:hover {
        background:#e1b12c;
        i {
            animation: growIn 1s;
        }
    }
    &:focus {
        background:#e1b12c;
    }
}
.delete {
    color: white;
    background:#fc5c65;
    &:active {
        background:#fc5c65;
    }
    &:hover {
        background:#eb3b5a;
        i {
            animation: shakeIn .3s;
        }
    }
    &:focus {
        background:#eb3b5a;
    }
}

@keyframes rotateIn {
    0% {
        transform-origin: center center;
        transform: rotate(200deg);
    } 
    100% {
        transform-origin: center center;
        transform: rotate(0deg);
    } 
}
@keyframes growIn {
    0% {
        transform-origin: center center;
        transform: scale(1.5);
    } 
    100% {
        transform-origin: center center;
        transform: scale(1);
    } 
}

@keyframes moveRight {
    0% {
        transform-origin: center center;
        transform: translateX( 10px);
    } 
    100% {
        transform-origin: center center;
        transform: translateX(0px);
    } 
}

@keyframes moveLeft {
    0% {
        transform-origin: center center;
        transform: translateX(-10px);
    } 
    100% {
        transform-origin: center center;
        transform: translateX(0px);
    } 
}

@keyframes changeSize {
    0% {
        transform-origin: center center;
        transform: scale(0);
    } 
    100% {
        transform-origin: center center;
        transform: scale(1);
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