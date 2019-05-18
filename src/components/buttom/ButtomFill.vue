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
    border-radius:20px;
    min-width:120px;
    min-height:2.2rem;
    box-sizing:border-box;
    cursor:pointer;
    outline: 0;
}
.default {
    color: #7f8c8d;    
    border:solid #7f8c8d 2px;
    background:transparent;
    &:active {
        background:#7f8c8d;
        color:white;
    }
    &:hover {
        background:#636e72;
        color:white;
    }
    &:focus {
        background:#636e72;
        color:white;
    }
}
.primary {
    color: #82ccdd;    
    background:transparent;
    border:solid #82ccdd 2px;
    &:active {
        background:#82ccdd;
        color:white;
    }
    &:hover {
        background:#60a3bc;
        color:white;
    }
    &:focus {
        background:#60a3bc;
        color:white;
    }
}    
.info {
    color: #9AECDB;    
    background:transparent;
    border:solid #9AECDB 2px;
    &:active {
        background:#9AECDB;
        color:white;
    }
    &:hover {
        background:#58B19F;
        color:white;
    }
    &:focus {
        background:#58B19F; 
        color:white;
    }
} 
.success {
    color: #1dd1a1;    
    background:transparent;
    border:solid #1dd1a1 2px;
    &:active {
        background:#1dd1a1;
        color:white;
    }
    &:hover {
        background:#10ac84;
        color:white;
    }
    &:focus {
        background:#10ac84; 
        color:white;
    }
} 
.warning {
    color: #fbc531;    
    background:transparent;
    border:solid #fbc531 2px;
    &:active {
        background:#fbc531;
        color:white;
    }
    &:hover {
        background:#e1b12c;
        color:white;
    }
    &:focus {
        background:#e1b12c; 
        color:white;
    }
} 
.danger {
    color: #fc5c65;    
    background:transparent;
    border:solid #fc5c65 2px;
    &:active {
        background:#fc5c65;
        color:white;
    }
    &:hover {
        background:#eb3b5a;
        color:white;
    }
    &:focus {
        background:#eb3b5a; 
        color:white;
    }
} 
</style>