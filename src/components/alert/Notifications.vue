<template>
  <div id="wrapper" :class="color">
    <!--icon div-->
    <div id="icon-box" class="center-item">
      <i class="fas fa-cubes"></i>
    </div>

    <!-- message div-->
    <div class="text center-item">{{ text }}</div>

    <!-- icon div -->
    <div id="close" class="center-item">
      <i @click="close" class="fas fa-times"></i>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    color: {
      type: String,
      default: "primary"
    },
    text: {
      type: String,
      default:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, dolorem."
    }
  },
  methods: {
    close() {
      this.$emit("close");
    }
  }
};
</script>
<style lang="scss" scoped>
//colors
$alert-primary: #65d1d4;
$alert-info: #66c4de;
$alert-success: #7ed6a5;
$alert-warning: #fccf71;
$alert-danger: #f1926e;

// mixins
@mixin font-color($color) {
  color: darken($color, 40%);
}
#wrapper {
  position: relative;
  border-radius: 5px;
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
}
.center-item {
  display: grid;
  align-items: center;
  justify-content: center;
}
.lef-item {
  display: grid;
  align-items: center;
  justify-content: left;
}
#icon-box {
  font-size: 2em;
}
#close {
  i {
    cursor: pointer;
  }
}
//color references
.primary {
  background: $alert-primary;
  @include font-color($alert-primary);
}
.info {
  background: $alert-info;
  @include font-color($alert-info);
}
.success {
  background: $alert-success;
  @include font-color($alert-success);
}
.warning {
  background: $alert-warning;
  @include font-color($alert-warning);
}
.danger {
  background: $alert-danger;
  @include font-color($alert-danger);
}
@media only screen and (max-width: 300px) {
  #wrapper {
    grid-template-columns: 1fr;
  }
}
</style>

