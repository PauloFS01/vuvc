<template>
<!--ToDo... use css variables -->
        <button :class="color">
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
    outline: 0;
}
.default {
    color: white;    
    background:#7f8c8d;
    &:active {
        background:#7f8c8d;
    }
    &:hover {
        background:#636e72;
    }
    &:focus {
        background:#636e72; 
    }
}
.primary {
    color: white;    
    background:#82ccdd;
    &:active {
        background:#82ccdd;
    }
    &:hover {
        background:#60a3bc;
    }
    &:focus {
        background:#60a3bc; 
    }
}    
.info {
    color: white;    
    background:#9AECDB;
    &:active {
        background:#9AECDB;
    }
    &:hover {
        background:#58B19F;
    }
    &:focus {
        background:#58B19F; 
    }
} 
.success {
    color: white;    
    background:#1dd1a1;
    &:active {
        background:#1dd1a1;
    }
    &:hover {
        background:#10ac84;
    }
    &:focus {
        background:#10ac84; 
    }
} 
.warning {
    color: white;    
    background:#fbc531;
    &:active {
        background:#fbc531;
    }
    &:hover {
        background:#e1b12c;
    }
    &:focus {
        background:#e1b12c; 
    }
} 
.danger {
    color: white;    
    background:#fc5c65;
    &:active {
        background:#fc5c65;
    }
    &:hover {
        background:#eb3b5a;
    }
    &:focus {
        background:#eb3b5a; 
    }
} 
</style>