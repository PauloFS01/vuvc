<template>
    <div class="wrapper">
        <div class="card">
            <div class="card-body" >
                <div class="slot-object" >  <!-- Slot begin -->
                    <div class="slot-icon">
                        <i :class="bodyIcon" :style="setColorIcon"></i>
                    </div>                 
                    <div class="slot-text" >
                        {{ bodyDesc }}
                        <div> {{ bodyValue }} </div>
                    </div>                    
                </div>                         
            </div>   
            <div class="card-footer" >
                <div class="line"></div>  
                <div class="slot-footer" slot="slot-footer"><i :class="footerIcon" :style="setColorIcon"></i> {{ footerDesc }} </div>      
            </div> 
        </div>         
    </div>
</template>

<script>
export default {
    props: {
        bodyIcon: {
            type: String,
            default: 'fab fa-angellist'
        },
        iconColor: {
            type: String,
            default: '#fdcb6e'
        },
        bodyDesc: {
            type: String,
            default: 'Description here'
        },
        bodyValue: {
            type: String,
            default: '$ 150,00'
        },
        footerIcon: {
            type: String,
            default: 'fas fa-bell'
        },
        footerDesc: {
            type: String,
            default: 'Footer description here'
        }
    },
    computed: {
        setColorIcon () {
            return `color:${this.iconColor}`
        }
    }
    
}
</script>

<style scoped lang="scss">
.wrapper {    
    border-radius: 5px;
    padding: 1rem;
    background: white;
    box-shadow: 5px 10px 8px #888888;
}
.card {

    .line {
        border-bottom: solid #dfe6e9 1px;
    }      
}
.slot-text {
    text-align: right;
    div {
        font-size:2rem;
        width: 100%;
    }
}
.slot-footer {
    padding: .5rem;
    i {
        font-size: 1.5rem;
        margin-right:.5rem;
    }
}
.slot-icon {
    font-size: 3rem;
    float:left;
}
@media only screen and (max-width: 899px) {
    .wrapper {
        border-radius: 0;
        box-shadow: 0 0 0;
    }
}

</style>