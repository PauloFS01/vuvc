<template >
  <div id="hover-card-wrapper" :data-desc="classification" :style="cssVars">
    <!--
    <div id="top-hover">
      <h3>Bestseler</h3>
    </div>
    -->
    <div id="card-value">
      <div>
        <p id="plain-type">{{ model }}</p>
        <p id="plain-value">{{ value }}</p>
        <p id="plain-period">{{ period }}</p>
      </div>
    </div>
    <div id="card-content">
      <ul>
        <li v-for="i in 3" :key="i">{{ arrayContent[i - 1] }}</li>
      </ul>
    </div>
    <div id="card-button">
      <button @click="clickBotton">Sing Up</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    classification: {
      type: String,
      default: "Bestseller"
    },
    model: {
      type: String,
      default: "Basic"
    },
    value: {
      type: String,
      default: "$5"
    },
    period: {
      type: String,
      default: "per month"
    },
    content: {
      type: Array
    },
    primaryColor: {
      type: String,
      default: "#3d3250"
    },
    secundaryColor: {
      type: String,
      default: "#4ad5d2"
    }
  },
  data() {
    return {
      arrayContent: this.content || ["1 Domain", "100 GB Email", "Free domain"]
    };
  },
  methods: {
    clickBotton() {
      this.$emit("hoverCardclick");
    }
  },
  computed: {
    cssVars() {
      return {
        "--bg-color": this.primaryColor,
        "--btn-color": this.secundaryColor
      };
    }
  }
};
</script>

<style lang='scss' scoped>
// **mixins
@mixin element-reset {
  margin: 0;
  padding: 0;
}
@mixin content-center {
  display: flex;
  justify-content: center;
  align-content: center;
}
@mixin item-center {
  align-items: center;
  justify-items: center;
}
// **custom elements
h3,
p {
  @include element-reset();
  @include content-center();
}
ul {
  // color: white;
  list-style: none;
  @include element-reset();
}
li {
  text-align: center;
}

// ** custom layout
#hover-card-wrapper {
  // **colors variables
  $card-background: var(--bg-color);
  $card-button: var(--btn-color);

  // wrapper elements
  background: transparent;
  font-style: sans-serif;
  font-family: Arial;
  position: relative;
  height: 100%;
  &::before {
    content: attr(data-desc);
    background: $card-button;
    position: absolute;
    width: 100%;
    text-align: center;
    padding: 0.5em 0;
    top: -18px;
    font-weight: bold;
    color: $card-button;
    border-radius: 3px;
    transform: scaleY(0.5);
    transition: 0.3s;
    transform-origin: bottom;
  }
  &:hover {
    &::before {
      color: $card-background;
      transform: scaleY(1);
    }
  }

  #top-hover {
    background: $card-button;
    h3 {
      color: $card-background;
    }
  }
  #card-value {
    @include content-center();
    @include item-center();
    color: white;
    background: $card-background;
    height: 50%;
  }
  #card-content {
    font-weight: bold;
    font-size: 1.3em;
    color: white;
    padding: 1em;
    background: $card-background;
    height: 25%;
    box-sizing: border-box;
  }
  #card-button {
    @include content-center();
    @include item-center();
    background: $card-background;
    height: 25%;
    button {
      font-weight: bold;
      border-radius: 20px;
      padding: 0.5em 1.5em;
      cursor: pointer;
      outline: 0;
      background: $card-button;
      border: 0;
      color: $card-background;
      font-size: 1.3em;
    }
  }
}

// paragraphs inside card value
#plain-type {
  font-size: 2em;
  font-weight: bold;
  padding: 1em;
}
#plain-value {
  font-size: 4em;
}
#plain-period {
  margin: 0.5em 0;
  font-weight: bold;
}
</style>