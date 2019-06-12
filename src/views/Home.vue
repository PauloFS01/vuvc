<template>
  <div class="home">
    <h1>Overview</h1>
    <div class="div-arrangement">

       <!-- begin div cards -->
      <div class="cards">
        <upgrade-card />
        <upgrade-card 
          bodyIcon="fab fa-ethereum" 
          iconColor="Mediumslateblue"
          bodyDesc="Value"
          bodyValue="$ 250,00"
          footerIcon="fas fa-pen-alt"
          footerDesc="Saved datas"        
        />
        <upgrade-card
          bodyIcon="fas fa-wallet" 
          iconColor="#f8a5c2"
          bodyDesc="Withdrawals and depsoits"
          bodyValue="$ 350,00"
          footerIcon="fas fa-rss"
          footerDesc="Fonts or descriptions"
         />
      </div>
      <!-- end div cards -->

      <!-- begin of bottom -->
      <div class="botton">
        <div class="div-botton">
          <button-change />  
        </div>
        <div class="div-botton">
          <button-change textbutton="Primary" color="primary"/>  
        </div>
        <div class="div-botton">
          <button-change textbutton="Info" color="info"/>  
        </div>
        <div class="div-botton">
          <button-change textbutton="Success" color="success"/>  
        </div> 
        <div class="div-botton">
          <button-change textbutton="Warning" color="warning"/>  
        </div>
        <div class="div-botton">
          <button-change textbutton="Danger" color="danger"/>  
        </div>
      </div>
      <div class="botton">
        <div class="div-botton">
          <button-label /> 
        </div>
        <div class="div-botton">
          <button-label textbutton="Setting" color="settings" iconLabel="fas fa-cog" /> 
        </div>
        <div class="div-botton">
          <button-label textbutton="Back" color="back" iconLabel="fas fa-angle-double-left" />
        </div>
        <div class="div-botton">
          <button-label textbutton="Submit" color="submit" iconLabel="fas fa-check" />
        </div> 
        <div class="div-botton">
          <button-label textbutton="Search" color="search" iconLabel="fas fa-search" /> 
        </div>
        <div class="div-botton">
          <button-label textbutton="Delete" color="delete" iconLabel="fas fa-trash-alt" />  
        </div>
      </div>
      <!-- end of bottom -->

      <!-- begin os lists -->
      <div class="list">
        <div class="list-div">
            <list-task @checked="listChecked" @delete="listtTask"/>
        </div>  
      </div>
      <!-- end of list -->

      <!-- begin of profile --> 
      <div class="profile">
        <div class="profile-div">
          <profile-card />
        </div>
      </div>
      <!-- end of profile -->

      <!-- begin of form -->
      <div class="form">
        <div class="form-div">
          <singup-form @submit="formSubmit" />
        </div>
      </div>
      <!-- end of form -->

      <!-- begin of notification -->
      <div class="notifications">
        <div class="notification-div">
          <notifications />
        </div>
       <div class="notification-div">
          <notifications color="info"/>
        </div>
       <div class="notification-div">
          <notifications color="success"/>
        </div>
       <div class="notification-div">
          <notifications color="warning"/>
        </div>
       <div class="notification-div">
          <notifications color="danger"/>
        </div>                                
      </div>
      
      <div class="notifications">
        <div class="notification-div"> <button-fill @click="change('bottom')" textbutton="Primary" color="primary" /> </div>
        <div class="notification-div"> <button-fill @click="change('top')" textbutton="Info" color="info" /> </div>
        <div class="notification-div"> <button-fill @click="change('left')" textbutton="Success" color="success" /> </div>
        <div class="notification-div"> <button-fill @click="change('right')" textbutton="Warning" color="warning" /> </div>
        <div class="notification-div"> <button-fill @click="change('center')" textbutton="Danger" color="danger" /> </div>
      </div>
      <!-- end of notification -->

      <!-- begin notification modal -->
      <div class="notification-modal pos-bottom" v-if="modalToggle ==='bottom'">
          <notifications @close="notificationClose" />
      </div>      
      <div class="notification-modal pos-top" v-if="modalToggle ==='top'">
          <notifications @close="notificationClose" color="info"/>
      </div>   
      <div class="notification-modal pos-left" v-if="modalToggle === 'left'">
          <notifications @close="notificationClose" color="success"/>
      </div>   
      <div class="notification-modal pos-right" v-if="modalToggle === 'right'">
          <notifications @close="notificationClose" color="warning"/>
      </div>   
      <div class="notification-modal pos-center" v-if="modalToggle === 'center'">
          <notifications @close="notificationClose" color="danger"/>
      </div>                           
      <!-- end notification modal -->      
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import UpgradeCard from '@/components/dashboard/UpgradeCard.vue'
import ButtonChange from '@/components/button/ButtonChange.vue'
import ButtonLabel from '@/components/button/ButtonLabel.vue'
import ButtonFill from '@/components/button/ButtonFill.vue'
import ListTask from '@/components/lists/ListTask'
import ProfileCard from '@/components/profile/ProfileCard'
import SingupForm from '@/components/form/SingupForm'
import Notifications from '@/components/alert/Notifications'
import { setTimeout } from 'timers';
export default {
  name: 'home',
  components: {
    UpgradeCard,
    ButtonChange,
    ButtonLabel,
    ButtonFill,
    ListTask,
    ProfileCard,
    SingupForm,
    Notifications
  },
  data () {
    return {
      tableHead: ['name', 'country', 'city', 'salary'],
      tableBody: [
          ['John', 'United Kingdom', 'Londom','$:3000'],
          ['Marie', 'France', 'Paris', '$:4000'],
          ['Marcos', 'Brazil', 'São Paulo', '$:15000']
      ],
      modalToggle:null,
    }
  },
    methods: {
        listtTask (id) {
            alert(`Delete task id: ${id}`)
        },
        listChecked (target) {
            console.log(`Checked element: ${target.id} isChecked: ${target.checked}`)
        },
        formSubmit (formData) {
          alert(`User: ${formData.name} ${formData.surname} Age: ${formData.age}: Company: ${formData.company} 
            E-mail: ${formData.email} Password: ${formData.password}`)
        },
        // change modal
        change (value) {
          // clearTimeout(this.timeOut)
          this.modalToggle = value          
          this.time = setTimeout(() => { this.modalToggle = null }, 2000)
        },
        notificationClose () {
          this.modalToggle = null
        }
    }
}
</script>
 <style lang="scss" scoped>

 // mixins
 @mixin clear-size {
   margin:0;
   padding:0;
 }

 @mixin clear-single {
  padding:.5rem;
  margin-top:2em;   
 }

 // settings
 .home {
  @include clear-size;
  //display:grid;
  overflow:hidden;
 }

 h1 {
   @include clear-size;
   width:100%;
   font-size:1em;
 }

 // components divs
.div-arrangement {
  div {
    min-height:5em;
  }
}

// cards display
.cards {
  display:grid;
  grid-template-columns: repeat(auto-fit, minmax(19rem, 1fr));
  gap:.5em;
  @include clear-single;
}

// bottons display
.botton {
  margin-top:1rem;
  display:grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap:.5em;
  div {
    display:grid;
    place-items:center;
  }
}

// lists display
.list {
  @include clear-single;
}

// profile display
.profile {
  @include clear-single;
  .profile-div {
    max-width: 25em;
    margin:auto;
  }
}

// form display
.form {
  @include clear-single;
}

//notification diplay
.notifications {
  @include clear-single;
  display:grid;
  width:70%;
  margin:auto;
  grid-template-columns:repeat(2, 1fr);
}
.notification-div {
  padding:.5em;
}
.notification-modal {
  width:20em;
  position:fixed;
  z-index:99999;
  margin:1em;
}
.pos-bottom {
  bottom:0;
  left:25%;
}
.pos-top {
  top:0;
  left:50%;
}
.pos-left {
  top:50%;
  left:0;
}
.pos-right {
  top:50%;
  right:0%;
}
.pos-center {
  top:30%;
  left:40%;
}
// desktop display
@media only screen and (min-width: 900px) {
  .form {
    display: grid;
    place-items:center;
  }
}
@media only screen and (max-width: 740px) {
  .notifications {
    grid-template-columns:1fr;
  }
}

// transition classes
.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}
 </style>