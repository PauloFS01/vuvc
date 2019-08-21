<template>
  <div id="cards-wrapper">
    <div id="info-cards">
      <div>
        <info-card />
      </div>
      <div>
        <info-card cardColor="#FCAF41" iconColor="#B0741E" />
      </div>
      <div>
        <info-card cardColor="#17B6A4" iconColor="#66E2D4" />
      </div>
      <div>
        <info-card cardColor="#96CEB3" iconColor="#639D81" />
      </div>
    </div>
    <div id="price-cards">
      <div>
        <price-card cardColor="#639D81" />
      </div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    <div id="game-cards">games</div>
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
}

// divs config
#info-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(19rem, 1fr));
  gap: 0.5em;
}
#price-cards {
  background: goldenrod;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(19rem, 1fr));
  gap: 2em;
}
#game-cards {
  background: yellowgreen;
}
</style>