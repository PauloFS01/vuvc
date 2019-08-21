<template>
  <div id="price-wrapper" :style="styleObject"></div>
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
  padding: 2em;
  height: 100%;
  position: relative;
}
</style>