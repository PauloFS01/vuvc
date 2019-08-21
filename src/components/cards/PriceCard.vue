<template>
  <div id="price-wrapper" :style="styleObject">Price card</div>
</template>

<script>
export default {
  props: {
    cardColor: {
      type: String,
      default: "#3C454D"
    },
    fontColor: {
      type: String,
      default: "white"
    },
    iconColor: {
      type: String
    }
  },
  data() {
    return {
      styleObject: {
        background: this.cardColor,
        color: this.fontColor
      },
      iconObject: {
        color: this.iconColor || this.fontColor
      }
    };
  }
};
</script>

<style>
#price-wrapper {
  border-radius: 5px;
  padding: 1em;
}
</style>