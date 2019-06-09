<template>
    <div id="wrapper">
        <div id="form-header"><h3>SingUp to started your account free trial</h3></div>
        <form @submit.prevent>
            <div class="form-field">
                <span class="title-field" data-desc-number="2">{{firstField}}</span>
            </div>      
            <div class="div-alert" v-if="err">{{ err }}</div>      
            <div id="first-field">
                
                <input type="text" placeholder="first name" v-model="formData.name">                
                <input type="text" placeholder="last name" v-model="formData.surnames">
                <input type="number" placeholder="your age" v-model="formData.age">
                <input id="input-company" type="text" placeholder="Company name" v-model="formData.company">
            </div>
            <div class="form-field">
                <span class="title-field" data-desc-number="2">{{secondField}}</span>
            </div>
            <div class="div-alert" v-if="errMail">{{ errMail }}</div>
            <div id="credential-field">
                
                <input type="text" placeholder="E-mail Address" v-model="formData.email">
                <input type="password" placeholder="Password" v-model="formData.password">
            </div>
            <div id="div-buttom">
                <button @click="submit">Submit</button>
            </div>        
        </form>
    </div>
</template>

<script>
export default {
    props: {
        firstField: {
            type:String,
            default:'Your basic information'
        },
        secondField: {
            type:String,
            default:'Your account credentials'
        }        
    },
    data () {
        return {            
            formData: {name:null, surname:null, age:null, company:null, email:null, password:null},            
            err:'',
            errMail:''
        }
    },
    methods: {
        submit () {
            if(this.checkForm()){
                this.$emit('submit', this.formData);
                this.clear()
            } else {
               this.clear()
            }
        },

        /**@returns boolean */
        checkForm () {                     
            if (!(this.formData.name || this.formData.surname ||this.formData.age ||
                this.formData.company || this.formData.email || this.formData.password)) {     
                this.err = 'All Field is Required'
                return false
            } else if(!this.validEmail(this.formData.email)) {
                this.errMail = 'Use a Valid E-mail'
                return false;
            } else {
                this.err = ''
                this.errMail = ''
                return true
            }
        },

        /**@returns boolean */
        validEmail (email) {
            var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            re.test(email)
            return re.test(email)
        },

        clear () {
            Object.keys(this.formData).forEach(e => {
                this.formData[e] = null;
            })
        }
    },
}
</script>

<style lang="scss" scoped>

// colors
$font-color:#8395a7;
$icon-color:#3AC162;
$bottom-color:#353b48;
$header-color:#3AC162;
$alert-color:#f7cae6;

// mixins
@mixin cta-bottom($main) {
    &:hover  {
        background:lighten($main, 25%);
    }
    &:focus {
         background:darken($main, 5%);
    }
}
#wrapper{
    border-radius:5px;
    box-shadow: 5px 10px 8px #888888;
    min-height:10em;
    font-family:arial, sans-serif!important;
}
#form-header{
    background:$header-color;
    color:white;
    text-align:center;
    padding: 1em;
    border-radius:5px 5px 0 0;
    h3 {
        margin:0;
    }
}
form {
    padding:2em;
}
.title-field {
    font-size:1.5em;
    position:relative;
    margin-left:2.5em;
    &::before {
        content:attr(data-desc-number);
        width:2em;
        height:2em;
        border-radius: 50%;
        border:solid #3AC162 2px;
        color:#3AC162;
        display:block;
        position:absolute;
        top:-10px;
        left:-2.5em;
        display:grid;
        align-items:center;
        justify-content: center;
    }
}
input {
    appearance:none;
    border-radius:2px;
    border:none;
    background:#ebedf1;
    height:4em;
    padding-left:1em;
    font-size:1.2em;
    color:gray;
}
#first-field {
    display:grid;
    gap:2em;
    margin-top:2em;
    margin-bottom:2em;
    padding-bottom:4em;
    border-bottom:solid $font-color 1px;
}
#credential-field {
    display:grid;
    gap:2em;
    margin-top:2em;
    margin-bottom:2em;
    padding-bottom:4em;
    border-bottom:solid $font-color 1px;
}
#div-buttom {
    display:grid;
    text-align:center;
    button {
        background:$icon-color;
        border:none;
        padding:.5em;
        font-size:2em;
        color:white;
        border-radius:5px;
        outline:0;
        @include cta-bottom($icon-color)
    }
}
.div-alert {
    background:$alert-color;    
    color:$font-color;
    padding:1em;
    margin-top:2em;
    border-radius:5px;
    display:grid;
    align-items:center;
    justify-content:center;
}
@media only screen and (min-width: 900px) {
    .title-field {
        margin-left:2.5em;
    }
    form {
        padding:3em;
    }    
    input {
        appearance:none;
        border-radius:5px;
        border:none;
        background:#dfe4ee;
        height:4em;
    }     
    #first-field {
        display:grid;
        grid-template-columns:2fr 1fr 1fr;
        gap:.5em;
        margin-top:2em;       
        #input-company {
            grid-column:1/4;
        }
    }   
    #credential-field {
        grid-template-columns:repeat(2, 1fr);
    }   
    #div-buttom {
        grid-template-columns:repeat(3, 1fr);
    }
}
</style>
