<template>
  <div id="cards-wrapper">
    <!-- Info-Cards begin -->
    <div id="info-cards" data-desc-tip="Info Cards">
      <div>
        <info-card />
      </div>

      <div>
        <info-card cardColor="#FCAF41" text="1,293K" subText="New Visitors" />
      </div>

      <div>
        <info-card cardColor="#17B6A4" text="1293" subText="Revenue" />
      </div>

      <div>
        <info-card cardColor="#96CEB3" text="10K" subText="Followers" />
      </div>
    </div>
    <!-- Info-Cards end -->

    <!-- Price-Cards begin -->
    <div id="price-cards" data-desc-tip="Price Cards">
      <div>
        <price-card />
      </div>

      <div></div>

      <div></div>

      <div></div>
    </div>
    <!-- Price-Cards end -->

    <!-- Game-cards end -->
    <div id="game-cards" data-desc-tip="Game Cards">
      <div></div>

      <div></div>

      <div></div>

      <div></div>
    </div>
    <!-- Game-cards end -->
  </div>
</template>

<script>
import InfoCard from "@/components/cards/InfoCard";
import PriceCard from "@/components/cards/PriceCard";
export default {
  components: {
    InfoCard,
    PriceCard
  }
};
</script>

<style lang="scss" scoped>
@import "@/themes/default/_barrel.scss";

// Page config
#cards-wrapper {
  @include body-default;
  div {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(19rem, 1fr));
    grid-auto-rows: minmax(100px, auto);
    gap: 0.5em;
    div {
      border: solid red 1px;
      box-sizing: border-box;
    }
  }
}

// divs displayed
#info-cards {
  position: relative;
  @include add-title(attr(data-desc-tip));
}

#price-cards {
  position: relative;
  @include add-title(attr(data-desc-tip));
}

#game-cards {
  position: relative;
  @include add-title(attr(data-desc-tip));
}

// desktop display
@media only screen and (min-width: 900px) {
}
</style>