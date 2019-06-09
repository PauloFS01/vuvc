<template>
    <div>
        <div id="header-div">

            <!--Config and options to right side of the header -->

            <div class="side-toggle">
                <i v-if="toggle" @click="sideToggle" class="fas fa-align-left"></i>              
                <i v-else @click="sideToggle" class="fas fa-align-justify"></i>
            </div>

            <div id="avatar-settings">
                <div class="search-shortcut"><i class="fas fa-search"  @click="modalToggle = !modalToggle"></i></div>
                <div class="notification-alert"><i class="far fa-bell" @click="notificationToggle = !notificationToggle"></i></div>
                <div class="config-shortcut">
                    <router-link class="decoration-link" :to="configLink">
                        <i class="fas fa-cog "></i>
                    </router-link>
                </div> 
            </div>
            
            <!--Beging mobile version of settings-->
            <div id="avatar-settings-mobile" > 
                <div class="toogles-buttons">
                    <div class="sidebar-toggle-mobile">
                        <i v-if="toggle" 
                        class="fas fa-align-center"
                        @click="toggleClick"
                        ></i>
                        <i v-else class="fas fa-list"
                        @click="toggleClick"
                        ></i>
                    </div>                
                    <div class="right-padding">
                        <i id="fixed-buttom" class="fas fa-ellipsis-v" @click="mobileToggle = ! mobileToggle"></i>
                    </div>                      
                </div>
                
                <!--Begin hiden mobile menu-->
                <transition name="menu" >
                <div class="hide-menu" v-if="mobileToggle">
                    <div class="toogles-buttons"> 
                        <div>
                            <i v-if="toggle" 
                            class="fas fa-align-center"
                            @click="toggleClick"
                            ></i>
                            <i v-else class="fas fa-list"
                            @click="toggleClick"
                            ></i>
                        </div>
                        <div>
                            <i id="fixed-buttom" class="fas fa-ellipsis-v" @click="mobileToggle = !mobileToggle"></i>
                        </div>                          
                     </div>
                     <div class="hiddens-bottons">
                        <div class="search-shortcut"><i class="fas fa-search"  @click="modalToggle = !modalToggle"></i></div>
                        <div class="notification-alert"><i class="far fa-bell" @click="notificationToggle = !notificationToggle"></i></div>
                        <div class="config-shortcut"> 
                            <router-link class="decoration-link" :to="configLink">
                                <i class="fas fa-cog "></i>
                            </router-link>
                        </div>                           
                     </div>
                </div>
                </transition>

            </div>    

        </div>

        <!-- Modal list notifications begin -->
        <transition name="notification">
            <div class="notification-list" v-if="notificationToggle">
                <div v-for="(not, index) in notificationList" :key="index"> 
                    <router-link class="decoration-link" :to="not.link"> 
                        {{ not.name }} 
                    </router-link> 
                </div>
            </div>
        </transition>

        <!--Begin to modal div to search input area-->
        <transition name="modal" >
            <div id="modal-input" v-if="modalToggle" @click="modalClick">
                <div class="modal-wrapper">
                    <input id="input-seach" type="text" placeholder="Search" @input="inputSearch" /> 
                    <i class="fas fa-times" @click="modalToggle = !modalToggle"></i>
                </div>                
            </div>
        </transition>

    </div>
</template>

<script>
export default {
    props: {
        notificationList: {
            type:Array,
            default: () => [ 
                {name:'Your notification here', link:'/#'}, 
                {name:'Or here', link:'/#'}, 
                {name:'Here', link:'/#'}, 
                {name:'Or here', link: '/#'}
            ]
        },
        configLink: {
            type: String,
            default: '/#'
        }, 
        toggle: {
            type: Boolean            
        }
    },
    data () {
        return {
            modalToggle: false,
            mobileToggle: false,
            notificationToggle: false,
            searchValue: ''
        }
    }, 
    methods : {
        // close modal when user click out of input
        modalClick (e) {
            if (e.target.id != "input-seach") this.modalToggle = false            
        },
        // will provide a value from input to parent
        inputSearch (){
            this.$emit('seach', this.searchValue)
        },
        // will send toggle click to parent
        toggleClick () {
            this.$emit('toggleClick')
        },
        // will send toggle to side-bar
        sideToggle () {
            this.$emit('toggleSide')
        }
    }
}
</script>
<style lang="scss" scoped>
#header-div {
    height: 3rem;
    padding-top:.5rem;
    box-shadow: 0px 3px 20px #888888;
}

#sideBar-toggle {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    float: left;    
    
}

.notification-list {
    position: absolute;
    right: 5rem;
    box-sizing: border-box;
    background: white;
    max-width: 15rem;
    border-radius: 3px;
    box-shadow: 5px 10px 8px #888888;
    transition: opacity .3s ease; 
    div {
        margin: .5rem;
        padding: .3rem;
        border-radius: 3px;
        &:hover{
            background: #00cec9;
            box-shadow: 5px 10px 28px #888888;
        }
    }
}

.decoration-link {
    text-decoration: none;
    color: grey;
}

#avatar-settings{
    float: right;
    width: 10rem;
    font-size: 1.2rem;
    padding: .5rem;
    color: gray;
    i{
        float: left;
    }
}

.config-shortcut {
    width: 32%;
    float: left;
    &:hover{
        i {
            animation: rotateIn 1s;          
            color:#00cec9;      
        }    
    } 
}

.search-shortcut {
    width: 32%;
    float: left;
    &:hover{
        i {
            animation: growIn 1s;
            color:#00cec9;        
        }        
    }    
}

.notification-alert {
    width: 32%;
    float: left;
    &:hover{
        i {
            animation: shakeIn .3s;            
            color:#00cec9;        
        }         
    }    
}

#modal-input {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, .5);
    display: table;
    width: 100%;
    height: 100%;    
    transition: opacity .3s ease; 
}

.modal-wrapper {
    position: relative;
    text-align: center;
    width: 650px;
    margin: 0px auto;
    margin-top: 3rem;
    font-size: 1.5rem;
    color :gray;
    input {
        width: 100%;
        height: 5rem;
        border-radius: 5px;
        appearance: none;
        -webkit-appearance: none;
        border: none;
        &::placeholder {
            padding: 2rem;
            font-size: 1.2rem;
            color: gray;
        }        
    }
    i {
        position: absolute;
        top: 2rem;
        right: 2rem;
        &:hover {
            color:#00cec9; 
        }
    }
}

.modal-enter, .menu-enter, .notification-enter {
  opacity: 0;
}

.modal-leave-active, .menu-leave-active, .notification-leave-active {
  opacity: 0;
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
@keyframes shakeIn {
    0% {
        transform-origin: center center;
        transform: rotate(80deg);
    }
    50% {
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

@media only screen and (max-width: 899px) {
    .side-toggle {
        display: none;
    }
    #avatar-settings {
        display: none;
    }
    #sideBar-toggle {
        display: none;
    }
    .modal-wrapper {
        width: 100%;
    }
    #avatar-settings-mobile {
        text-align: right;
        display: grid;
        grid-template-rows:1fr;                
    }

    #fixed-buttom {
        float: right;
    }

    .hide-menu {     
        width: 100%;
        z-index: 9998;
        top: 0;
        left: 0;           
        position: absolute;        
        display: grid;
        grid-template-rows:1fr;   
        text-align: left;     
        background-color:rgb(250, 215, 215);  
        transition: all .3s ease;
        box-shadow: 5px 10px 8px #888888;
        box-sizing:border-box;
        i {
            margin-top:.5em;
        }
    }
    .hiddens-bottons {
        div {
            width:100%;
            padding:.5em;
        }             
    }    
    .toogles-buttons {
        div {
            width: 50%;
            float: left;        
            box-sizing: border-box;
            padding:.5rem;
        }
    }
    .right-padding {
        padding-right: 1rem;
        box-sizing: border-box;
    }
    .sidebar-toggle-mobile {
        text-align: left;
        padding-left: 1rem;

    }
    .notification-list {
        z-index: 9999;
        width: 50%;
        margin-top: 5rem;
        left: 0;
    }   
}

@media only screen and (min-width: 900px) {
    .side-toggle {
        float: left;
        padding: .5rem;
        font-size:1.2rem;
    }
    #avatar-settings-mobile {
        display: none;
    }     
}
</style>
