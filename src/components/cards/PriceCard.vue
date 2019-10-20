<template>
  <div id="price-wrapper" :style="styleObject">
    <div id="div-top">
      <div id="circle" :style="iconObject">
        <i class="fab fa-telegram-plane"></i>
      </div>
    </div>
    <div id="text">
      <p id="main-text">{{text}}</p>
      <p id="sub-text">{{subText}}</p>
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
      default: "starter"
    },
    subText: {
      type: String,
      default: "$14/month"
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

<style lang="scss" scoped>
//mixins
@mixin justify-item {
  display: grid;
  justify-content: center;
  align-content: center;
}
// page configs
#price-wrapper {
  max-width: 20.5em;
  max-height: 20.5em;
  position: relative;
  font-family: Segoe UI, sans-serif;
  overflow: hidden;
}
p {
  margin: 0;
  padding: 0;
}
#main-text {
  text-transform: uppercase;
  font-size: 2em;
  font-weight: bold;
}
#sub-text {
  text-align: center;
}
//div config
#div-top {
  width: 100%;
  padding-top: 2em;
  box-sizing: border-box;
  @include justify-item;
}
#circle {
  height: 8em;
  width: 8em;
  background: rgba(253, 253, 253, 0.452);
  border-radius: 50%;
  @include justify-item;
  i {
    font-size: 3em;
  }
}
#text {
  padding-bottom: 2em;
  @include justify-item;
}
</style>