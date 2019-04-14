<template>
    <div class="navbar-div" :class="hidenNav" >
        <!--desktop begin-->
        <div id="desktop-nav">
            <div class="header-div">
                <div><i @click="navToggle" class="fas fa-arrow-circle-right"></i> <span v-if="toggle">{{ headerTitle }}</span>  </div>
            </div>            
            <div class="body-div">
                <div class="elements-div">

                    <!--Begin menu elements-->
                    <div class="elements-item" v-for="(element, index) in navElements" :key="index">

                        <!--Begin menu with subelements-->
                        <div v-if="element.subelements[0]" :class="(matchPath === element.link + '/')? 'actived-link' : ' '">
                            <span class="icon-item"> <i :class="element.icon || 'far fa-question-circle'"> </i></span>
                            <span v-if="toggle">
                                {{ element.name }}
                                <div class="icon-arrow"><i  @click="element.show = !element.show" class="fas fa-caret-down" ></i></div>
                            </span>
                        </div>                        

                        <!--Begin menu without subelements-->
                        <div v-else>
                            <router-link class="decoration-link" :class="($route.fullPath === element.link)? 'actived-link' : ' '" :to="element.link">
                                <span class="icon-item"> <i :class="element.icon || 'far fa-question-circle'" > </i></span>
                                <span v-if="toggle">
                                    {{ element.name }}
                                </span>
                            </router-link>
                        </div>

                        <!--Begin subelements-->
                        <div v-if="element.show" class="subelements-div">
                            <div class="subelements-item" v-for="(subelement, index) in element.subelements" :key="index">
                                <div class="nav-link">
                                    <router-link class="decoration-link" 
                                    :class="($route.fullPath === subelement.link)? 'actived-link' : ' '" 
                                    :to="subelement.link"                                   
                                    >
                                        <div class="initial-subelement"
                                        > {{ subelement.name[0] }} </div>
                                        <div class="subelements-desc" v-if="toggle"> {{ subelement.name }} </div>
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    
                    </div>
                    <!--End menu elements-->
                </div>
            </div>
        </div>
        <!--desktop end-->

        <!--Mobile begin-->
        <div id="mobile-nav">
            <div class="header-div">
                <div> <span> {{ headerTitle }} </span> <i @click="isMobile" class="fas fa-times-circle"></i>  </div>
            </div>
            <div class="body-div">
                <div class="elements-div">

                    <!--Begin menu elements-->
                    <div class="elements-item" v-for="(element, index) in navElements" :key="index">

                        <!--Begin menu with subelements-->
                        <div v-if="element.subelements[0]" :class="(matchPath === element.link + '/')? 'actived-link' : ' '"> 
                            <span class="icon-item"> <i :class="element.icon || 'far fa-question-circle'"> </i></span>  
                            <span> 
                                {{ element.name }} 
                                <div class="icon-arrow"><i  @click="element.show = !element.show" class="fas fa-caret-down" ></i></div> 
                            </span>        
                        </div>

                        <!--Begin menu without subelements-->
                        <div v-else > 
                            <router-link class="decoration-link" :class="($route.fullPath === element.link)? 'actived-link' : ' '" :to="element.link">
                                <span class="icon-item"><i :class="element.icon || 'far fa-question-circle'" > </i></span>   
                                <span > 
                                    {{ element.name }}
                                </span>   
                            </router-link>     
                        </div>    
      
                        <!--Begin subelements-->     
                        <div v-if="element.show" class="subelements-div">                        
                            <div class="subelements-item" v-for="(subelement, index) in element.subelements" :key="index">
                                <div class="nav-link">
                                    <router-link class="decoration-link" 
                                    :class="($route.fullPath === subelement.link)? 'actived-link' : ' '" 
                                    :to="subelement.link"
                                    >
                                        <div class="initial-subelement" 
                                        >S</div> 
                                        <div class="subelements-desc"> {{ subelement.name }} </div>
                                    </router-link>                               
                                </div>
                            </div>
                        </div>   

                    </div>
                    <!--End menu elements-->

                </div>
            </div>
        </div>           
        <!--Mobile end-->

    </div>
</template>

<script>
export default {
    props: {
        elements: {
            type: Array
        },
        headerTitle: {
            type: String,
            default: 'Some title here'
        },
        mobileToggle: {
            type: Boolean,
            default: false
        }
    },
    data () {
        return {
            dataMobile: this.mobileToggle,
            toggle: false,
            defaultElements: [
                {name: 'DASHBOARD', subelements: [],
                link: '/', show: false, icon: 'fas fa-landmark'},
                {name: 'COMPONENTS', link: '/components', subelements: [
                    {
                        name: 'component1',
                        link: '/components/component1'
                    }
                ], show: false, icon: 'fas fa-puzzle-piece'},
                {name: 'FORMS', link: '/forms', subelements: [
                    {
                        name: 'Form1',
                        link: '/forms/form1'
                    },
                    {
                        name: 'Form2',
                        link: '/forms/form2'
                    }                
                ], show: false, icon: 'fab fa-wpforms'},
                {name: 'TABLE', subelements: [], link: '/table', icon: 'fas fa-table'},
                {name: 'LISTS', link: '/lists', subelements: [
                    {
                        name: 'List1',
                        link: '/lists/list1'
                    },
                    {
                        name: 'List2',
                        link: '/lists/list2'
                    }                
                ], show: false, icon: 'fas fa-stream'},            
                {name: 'ABOUT', subelements: [], link: '/about', icon: 'fas fa-window-restore'},
                {name: 'MENUS', link: '/menus', subelements: [
                    {
                        name: 'Menu1',
                        link: '/menus/menu1'
                    },
                    {
                        name: 'Menu2',
                        link: '/menus/menu2'
                    },
                    {
                        name: 'Menu3',
                        link: '/menus/menu3'
                    }                                
                ], show: false, icon: 'fas fa-calendar-minus'},
                {name: 'headers', subelements: [], link: '/headers', show: false, icon: 'fas fa-headset'}
            ]            
        }
    },
    methods: {
        navToggle () {
           this.toggle = !this.toggle
        },
        isMobile () {
            this.dataMobile = !this.dataMobile
        }
    },
    computed: {
        navElements () {
            return this.elements || this.defaultElements
        },
        hidenNav () {
            return this.dataMobile ? 'hiden-nav' : ' '
        },
        matchPath () {
            let exp = new RegExp(/\/\w*\//)
            let path = exp.exec(this.$route.fullPath)
            let result = '' + path
            return result
        }
    }
}
</script>

<style lang="scss" scoped>
.navbar-div {
    background-color: #212121;
    color: gray;
    height: 100%;
    min-width: 5%;
    box-sizing: border-box;
    position: fixed;
    overflow-y: auto;
}
.header-div {
    border-bottom: solid grey 1px; 
    padding: 1rem;
    i {
        font-size: 2rem;
        margin-right: .7rem;        
        vertical-align: middle;
    }
}
.body-div {
    padding: 1rem;
}
.elements-item {        
    font-size: .8rem;
    margin-bottom: 1rem;
    .icon-arrow {
        margin-top: .6rem;   
        margin-left: 4rem;;     
        font-size: .8rem;
        float: right;
        height: 100%;
    }    
}
.subelements-item {
    .initial-subelement{
        text-align: center;
        padding: .8rem;
        float: left;             
    }
    .subelements-desc {
        padding: .8rem;
        float: left;       
    }
}
.nav-link { 
    display: inline-block;    
}
.decoration-link {
    text-decoration: none;
    color: grey;
}
.icon-item {
    font-size: 2rem;
    vertical-align: middle;
    margin-right: .7rem;
}
.actived-link {
    color: green;
}
::-webkit-scrollbar {
    width: 6px;
    background: #aaa69d;
}
::-webkit-scrollbar-thumb {
    background: #dad7d7;
}
@media only screen and (max-width: 900px) {
    #desktop-nav {
        display: none;
    }
    .hiden-nav {
        margin-left: -16rem;
    }
    .header-div {
        padding-right: .2rem;
        i {
            margin-right: .7rem;
            margin-left: 5rem;
        }
    }
}
@media only screen and (min-width: 900px) {
    #mobile-nav {
        display: none;
    }
}

</style>
