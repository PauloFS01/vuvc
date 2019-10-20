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

      <div>
        <price-card cardColor="#96CEB5" text="PROFESSIONAL" subText="$14/month" />
      </div>

      <div>
        <price-card cardColor="#FFCD5E" text="PREMIUM" subText="$14/month" />
      </div>

      <div>
        <price-card cardColor="#FF6E69" text="DEVELOPER" subText="$14/month" />
      </div>
    </div>
    <!-- Price-Cards end -->

    <!-- Game-cards end -->
    <div id="sale-cards" data-desc-tip="Sale Cards">
      <div class="sale-div">
        <hover-card @hoverCardclick="saleCardClick" />
      </div>
      <div class="sale-div">
        <hover-card
          @hoverCardclick="saleCardClick"
          model="Standart"
          classification="Regular"
          value="$15"
          primaryColor="#576574"
        />
      </div>

      <div class="sale-div">
        <hover-card
          @hoverCardclick="saleCardClick"
          model="Premium"
          classification="Special"
          value="$30"
          secundaryColor="#ff9f43"
          :content="fillContent"
        />
      </div>
    </div>
    <!-- Game-cards end -->
  </div>
</template>

<script>
import InfoCard from "@/components/cards/InfoCard";
import PriceCard from "@/components/cards/PriceCard";
import HoverCard from "@/components/cards/HoverCard";
export default {
  components: {
    InfoCard,
    PriceCard,
    HoverCard
  },
  data() {
    return {
      fillContent: ["5 Domain", "100 TB Email", "Free domain"]
    };
  },
  methods: {
    saleCardClick() {
      alert(`Sale card clicked`);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/themes/default/_barrel.scss";

// Page config
#cards-wrapper {
  @include body-default;
  div {
    border: solid red 1px;
  }
}

// divs display
#info-cards {
  position: relative;
  @include responsive-line;
  @include add-title(attr(data-desc-tip));
}

#price-cards {
  position: relative;
  @include responsive-line;
  @include add-title(attr(data-desc-tip));
}

#sale-cards {
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2em;
  justify-items: center;
  @include add-title(attr(data-desc-tip));
}
.sale-div {
  max-width: 20em;
}

// desktop display
@media only screen and (min-width: 900px) {
  #sale-cards {
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: minmax(500px, auto); /*altura das linhas*/
    gap: 1em;
  }
  .sale-div {
    min-width: 15em;
  }
}
</style>