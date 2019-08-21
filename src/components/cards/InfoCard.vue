<template>
  <div id="info-card-wrapper" :style="styleObject">
    <div id="icon" :style="iconObject">
      <i class="fas fa-redo-alt"></i>
    </div>
    <div id="data">
      <span id="value">{{ text }}</span>
      <br />
      {{ subText }}
    </div>
  </div>
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
    },
    text: {
      type: String,
      default: "10,29%"
    },
    subText: {
      type: String,
      default: "Bounce Rate"
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
#info-card-wrapper {
  border-radius: 5px;
  padding: 1em;
  position: relative;
}
#data {
  text-align: center;
}
#icon {
  font-size: 1.5em;
  position: absolute;
  right: 0.5em;
  top: 0.5em;
}
#value {
  font-size: 2.5em;
  font-weight: bold;
}
</style>
