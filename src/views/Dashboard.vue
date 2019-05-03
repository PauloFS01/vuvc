<template>
    <div class="dashboard-body">
        <div id="div-cards">
            <div class="div-class">                 
                <upgrade-card />                
            </div>
            <div class="div-class"> 
               
                <upgrade-card 
                    bodyIcon="fab fa-ethereum" 
                    iconColor="Mediumslateblue"
                    bodyDesc="Value"
                    bodyValue="$ 250,00"
                    footerIcon="fas fa-pen-alt"
                    footerDesc="Saved datas"
                /> 
               
            </div>
            <div class="div-class">  
                <upgrade-card 
                    bodyIcon="fas fa-wallet" 
                    iconColor="#f8a5c2"
                    bodyDesc="Withdrawals and depsoits"
                    bodyValue="$ 350,00"
                    footerIcon="fas fa-rss"
                    footerDesc="Fonts or descriptions"                 
                /> 
            </div>
        </div>
        <div id="div-buttons">
            <div id="button-change">
                <div class="button-class">
                    <buttom-change />
                </div>
                <div class="button-class">
                    <buttom-change textButtom="Primary" color="primary"/>
                </div>
                <div class="button-class">
                    <buttom-change textButtom="Info" color="info"/>
                </div>
                <div class="button-class">
                    <buttom-change textButtom="Success" color="success"/>
                </div>
                <div class="button-class">
                    <buttom-change textButtom="Warning" color="warning"/>
                </div>
                <div class="button-class">
                    <buttom-change textButtom="Danger" color="danger"/>
                </div>                   
            </div>
         <div id="button-fill">
                <div class="button-class">
                    <buttom-fill />
                </div>             
         </div>
         <div id="button-label"></div>
        </div>
    </div>
</template>

<script>
import UpgradeCard from '@/components/dashboard/UpgradeCard'
import ButtomChange from '@/components/buttom/ButtomChange'
import ButtomFill from '@/components/buttom/ButtomFill'
export default {
    components: {
        UpgradeCard,
        ButtomChange,
        ButtomFill
    }    
}
</script>

<style lang="scss" scoped>

#div-cards {
    border: solid green 1px;
}

@media only screen and (max-width: 899px) {
    #div-cards {
        .div-class {
            padding-top:.1rem;
            min-height: 8rem;
            border:solid green 1px;   
            box-sizing:border-box;
        }
    }
    #div-buttons {
        border: solid blue 1px;
        #button-change {
            display:grid;
            grid-template-columns:1fr 1fr 1fr;            
        }
        .button-class {
            box-sizing:border-box;
            border: solid green 1px;
            height:4rem;
            padding:.6rem;
        }
    }    
}
@media only screen and (min-width: 900px) {
    #div-cards {
        margin-bottom: 1rem;
        display:grid;
        grid-template-columns:1fr 1fr 2fr; 
        gap:.5rem; 
        .div-class {
            border: solid green 1px; 
            height: 10rem;           
            padding-top:1rem;
        }
    }
    #div-buttons {
        display:grid;
        grid-template-columns:1fr 1fr 1fr;
        #button-change {
            border:solid blue 1px;
            display:grid;
            grid-template-columns:1fr 1fr 1fr;            
        }
        .button-class {
            // border:solid green 1px;
            padding:1rem;
        }
        #button-fill {
            border:solid green 1px;
        }
        #button-label {
            border:solid green 1px;
        }
    }
}
</style>

