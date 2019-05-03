<template>
    <div class="wrapper" :class="size">
        <div class="card" >
            <div class="card-body" >
                <slot name="slot-body">        
                    default body
                </slot>         
            </div>
            <div class="line"></div>
            <div class="card-footer" > 
                <slot name="slot-footer">
                    default footer
                </slot>        
            </div>        
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>

.wrapper {    
    border-radius: 5px;
    padding: 1rem;
    background: white;
    box-shadow: 5px 10px 8px #888888;
}
.card {
    .card-body {    
        min-height:4rem; 
    }
    .line {
        border-bottom: solid #dfe6e9 1px;
    }    
    .card-footer {
        height: 2rem;      
    }   
}

    
</style>