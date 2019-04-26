<template>
    <div class="wrapper" >
        <div class="body" >
            <slot name="slot-body">
              default body
            </slot>         
         </div>
        <div class="footer" > 
            <slot name="slot-footer">
              default footer
            </slot>        
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scope>

.wrapper {
    border: solid grey 1px;
    width: 200px;
    border-radius: 5px;
    display: grid;
    grid-auto-rows: 2fr 1fr;
    .footer {
        border-top: solid grey  1px;
    }
}
    
</style>