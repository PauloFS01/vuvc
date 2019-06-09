<template>
  <div class="home">
    <h1>Overview</h1>
    <div class="div-arrangement">

       <!-- begin div cards --->
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
      <!-- end div cards --->

      <!-- begin of bottom -->
      <div class="botton">
        <div class="div-botton">
          <buttom-change />  
        </div>
        <div class="div-botton">
          <buttom-change textButtom="Primary" color="primary"/>  
        </div>
        <div class="div-botton">
          <buttom-change textButtom="Info" color="info"/>  
        </div>
        <div class="div-botton">
          <buttom-change textButtom="Success" color="success"/>  
        </div> 
        <div class="div-botton">
          <buttom-change textButtom="Warning" color="warning"/>  
        </div>
        <div class="div-botton">
          <buttom-change textButtom="Danger" color="danger"/>  
        </div>
      </div>
      <div class="botton">
        <div class="div-botton">
          <buttom-label /> 
        </div>
        <div class="div-botton">
          <buttom-label textButtom="Setting" color="settings" iconLabel="fas fa-cog" /> 
        </div>
        <div class="div-botton">
          <buttom-label textButtom="Back" color="back" iconLabel="fas fa-angle-double-left" />
        </div>
        <div class="div-botton">
          <buttom-label textButtom="Submit" color="submit" iconLabel="fas fa-check" />
        </div> 
        <div class="div-botton">
          <buttom-label textButtom="Search" color="search" iconLabel="fas fa-search" /> 
        </div>
        <div class="div-botton">
          <buttom-label textButtom="Delete" color="delete" iconLabel="fas fa-trash-alt" />  
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

    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import UpgradeCard from '@/components/dashboard/UpgradeCard.vue'
import ButtomChange from '@/components/buttom/ButtomChange.vue'
import ButtomLabel from '@/components/buttom/ButtomLabel.vue'
import ListTask from '@/components/lists/ListTask'
import ProfileCard from '@/components/profile/ProfileCard'
import SingupForm from '@/components/form/SingupForm'
export default {
  name: 'home',
  components: {
    UpgradeCard,
    ButtomChange,
    ButtomLabel,
    ListTask,
    ProfileCard,
    SingupForm
  },
  data () {
    return {
      tableHead: ['name', 'country', 'city', 'salary'],
      tableBody: [
          ['John', 'United Kingdom', 'Londom','$:3000'],
          ['Marie', 'France', 'Paris', '$:4000'],
          ['Marcos', 'Brazil', 'São Paulo', '$:15000']
      ]      
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
  // div-botton
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

// desktop display
@media only screen and (min-width: 900px) {
  .form {
    width: 70%;
    margin:auto;
  }
}
 </style>
 