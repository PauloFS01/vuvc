<template>
  <div class="dashboard-body">
    <!-- begin div cards -->
    <div class="div-cards">
      <div class="change-cards">
        <upgrade-card />
      </div>

      <div class="change-cards">
        <upgrade-card
          bodyIcon="fab fa-ethereum"
          iconColor="Mediumslateblue"
          bodyDesc="Value"
          bodyValue="$ 250,00"
          footerIcon="fas fa-pen-alt"
          footerDesc="Saved datas"
        />
      </div>

      <div class="change-cards">
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
    <!-- end div cards -->

    <!-- begin div buttons -->
    <div id="div-buttons">
      <div class="button-change" :data-desc-tip="btnChange">
        <div class="button-class">
          <button-change />
        </div>
        <div class="button-class">
          <button-change textbutton="Primary" color="primary" />
        </div>
        <div class="button-class">
          <button-change textbutton="Info" color="info" />
        </div>
        <div class="button-class">
          <button-change textbutton="Success" color="success" />
        </div>
        <div class="button-class">
          <button-change textbutton="Warning" color="warning" />
        </div>
        <div class="button-class">
          <button-change textbutton="Danger" color="danger" />
        </div>
      </div>

      <div class="button-change" :data-desc-tip="btnFill">
        <div class="button-class">
          <button-fill />
        </div>
        <div class="button-class">
          <button-fill textbutton="Primary" color="primary" />
        </div>
        <div class="button-class">
          <button-fill textbutton="Info" color="info" />
        </div>
        <div class="button-class">
          <button-fill textbutton="Success" color="success" />
        </div>
        <div class="button-class">
          <button-fill textbutton="Warning" color="warning" />
        </div>
        <div class="button-class">
          <button-fill textbutton="Danger" color="danger" />
        </div>
      </div>

      <div class="button-change" :data-desc-tip="btnIcon">
        <div class="button-class">
          <button-label />
        </div>
        <div class="button-class">
          <button-label textbutton="Setting" color="settings" iconLabel="fas fa-cog" />
        </div>
        <div class="button-class">
          <button-label textbutton="Submit" color="submit" iconLabel="fas fa-check" />
        </div>
        <div class="button-class">
          <button-label textbutton="Back" color="back" iconLabel="fas fa-angle-double-left" />
        </div>
        <div class="button-class">
          <button-label textbutton="Search" color="search" iconLabel="fas fa-search" />
        </div>
        <div class="button-class">
          <button-label textbutton="Delete" color="delete" iconLabel="fas fa-trash-alt" />
        </div>
      </div>
    </div>
    <!-- end div buttons -->

    <!-- begin div list -->
    <div class="div-list" :data-desc-tip="lists">
      <div class="table-div">
        <list-table :tableHead="tableHead" :tableBody="tableBody" />
      </div>
      <div class="table-div">
        <list-task @checked="listChecked" @delete="listtTask" />
      </div>
      <div class="table-div">
        <list-toggle />
      </div>
    </div>
    <!-- end div list -->

    <!-- begin div profile -->

    <div class="div-profile">
      <div class="user-profile">
        <div class="first-element">
          <profile-card />
        </div>
      </div>
      <div class="user-profile">
        <div class="second-element">
          <singup-form />
        </div>
      </div>
    </div>

    <!-- end div profile -->
  </div>
</template>

<script>
import UpgradeCard from "@/components/cards/UpgradeCard";
import buttonChange from "@/components/button/ButtonChange";
import ButtonFill from "@/components/button/ButtonFill";
import buttonLabel from "@/components/button/ButtonLabel";
import ListTable from "@/components/lists/ListTable";
import ListTask from "@/components/lists/ListTask";
import ListToggle from "@/components/lists/ListToggle";
import ProfileCard from "@/components/profile/ProfileCard";
import SingupForm from "@/components/form/SingupForm";
export default {
  components: {
    UpgradeCard,
    buttonChange,
    ButtonFill,
    buttonLabel,
    ListTable,
    ListTask,
    ListToggle,
    ProfileCard,
    SingupForm
  },
  data() {
    return {
      btnChange: "Colors",
      btnFill: "Style fill",
      btnIcon: "With icons and animation",
      lists: "Tables and lists",
      tableHead: ["name", "country", "city", "salary"],
      tableBody: [
        ["John", "United Kingdom", "Londom", "$:3000"],
        ["Marie", "France", "Paris", "$:4000"],
        ["Marcos", "Brazil", "São Paulo", "$:15000"]
      ]
    };
  },
  methods: {
    listtTask(id) {
      alert(`Delete task id: ${id}`);
    },
    listChecked(target) {
      console.log(`Checked element: ${target.id} isChecked: ${target.checked}`);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/themes/default/_barrel.scss";
.div-cards {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  .change-cards {
    border-bottom: solid $border-color-div 1px;
  }
}
.button-change {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem;
  margin-top: 2.5rem;
  padding: 0.5rem;
  position: relative;
  box-sizing: border-box;
  &::before {
    content: attr(data-desc-tip);
    position: absolute;
    display: block;
    top: -30px;
    font-size: 1.5rem;
    font-family: sans-serif;
    color: $text-dark;
    margin-left: 0.5rem;
  }
}
.div-list {
  margin: 2.5rem 0 1rem 0;
  position: relative;
  &::before {
    content: attr(data-desc-tip);
    position: absolute;
    display: block;
    top: -30px;
    font-size: 1.5rem;
    font-family: sans-serif;
    color: $text-dark;
    margin-left: 0.5rem;
  }
}
.table-div {
  width: 98%;
  margin: auto;
  padding-top: 2rem;
}
.div-profile {
  padding: 0.5rem;
  margin: 3rem 0 1rem 0;
  display: grid;
  grid-auto-rows: minmax(100px, auto);
  grid-template-columns: 1fr;
  gap: 1rem;
  position: relative;
  &::before {
    content: "Profiles";
    position: absolute;
    display: block;
    top: -30px;
    font-size: 1.5rem;
    font-family: sans-serif;
    color: $text-dark;
    margin-left: 0.5rem;
  }
}
.user-profile {
  // border:solid red 1px;
  div {
    // border:solid blue 1px;
  }
}
.first-element {
  width: 25rem;
  margin: auto;
  height: 20rem;
}
.second-element {
  height: 25rem;
  margin: auto;
}
@media only screen and (min-width: 900px) {
  #div-buttons {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  .table-div {
    width: 95%;
    padding-top: 2.5rem;
    margin: auto;
  }
  .div-Profile {
    background: red;
  }
}
@media only screen and (min-width: 1100px) {
  .div-cards {
    display: grid;
    grid-template-columns: 1fr 1fr 2fr;
    gap: 0.5rem;
    padding: 0.5rem;
  }
  #div-buttons {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
  .div-profile {
    grid-template-columns: 1fr 2fr;
  }
  .first-element {
    width: 100%;
    height: 30rem;
  }
}
</style>

