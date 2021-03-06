<template>
  <div
    :class="[
      { selected: selected },
      { previousAdjacent: previous },
      { nextAdjacent: next },
      { immediate: immediate },
      { penultimate: penultimate }
    ]"
    class="fullSizePersonCard"
  >
    <img :src="background" :alt="name" class="personPhoto" />
    <div class="personContent">
      <div class="personPreview">
        <p class="personName"><slot name="name" /></p>
        <p class="title"><slot name="title" /></p>
      </div>
      <div class="personInfo">
        <p class="degree"><slot name="degree" /></p>
        <p class="class"><slot name="class" /></p>
      </div>
      <div class="personAbout"><slot /></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    background: { type: String, required: true },
    order: { type: Number, required: true },
    name: { type: String, required: true }
  },
  computed: {
    selected() {
      return this.$store.state.selectedPerson === this.order
    },
    previous() {
      return this.$store.state.selectedPerson > this.order
    },
    next() {
      return this.$store.state.selectedPerson < this.order
    },
    immediate() {
      return Math.abs(this.$store.state.selectedPerson - this.order) === 1
    },
    penultimate() {
      return Math.abs(this.$store.state.selectedPerson - this.order) === 2
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/styles/vars";

.fullSizePersonCard,
.fullSizePersonCard * {
  user-select: none;
}

.fullSizePersonCard {
  position: relative;
}

.personPhoto {
  height: 100%;
  display: inline-block;
  object-fit: cover;
}

.personContent {
  display: inline-block;
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: calc(50% + 10px);
  padding: 1.25em;
  box-sizing: border-box;
  background: white;
  text-align: center;
  opacity: 1;
  overflow: hidden;
  line-height: 1em;
}

.personName {
  font-family: "Moderat";
  font-size: 1.25em;
  font-weight: bold;
  color: $dodger-blue;
  margin: 0.25em 0;
}

.title {
  font-family: "SpaceMono";
  font-weight: 500;
  margin-top: 0;
}

.personInfo {
  font-size: 0.8em;
  margin: 0 0 1.25em;
}

.personInfo p {
  margin: 0.25em 0;
}

.personAbout {
  line-height: 1em;
}

div.fullSizePersonCard.selected {
  z-index: 9999;
  width: calc(100% + 2.5em);
  .personPhoto {
    width: calc(50% - 10px);
  }
}

@media screen and (max-width: $tablet) {
  div.fullSizePersonCard.selected {
    height: 40vh;
    grid-column: 1 / 5;
    order: 1;
    margin-left: -1.25em;
    .personContent {
      right: 0;
      left: unset;
    }
  }
  div.fullSizePersonCard:not(.selected) {
    display: none;
  }
}

@media screen and (min-width: $tablet) {
  div.fullSizePersonCard {
    transition: left 0.5s ease, top 0.5s ease, margin 0.5s ease;
    height: 22.737em;

    .personContent {
      transform: translate(-3em, 3em);
    }

    &.selected {
      position: absolute;
      grid-column-start: unset;
      grid-column-end: unset;
      top: 0;
      left: calc(17vw + 0.8em);
      width: calc(66.33vw - 2.5em);

      .personPhoto {
        width: calc(50% + 30px);
        margin-right: -1.25em;
      }
      .personContent {
        transition: opacity 0.2s ease, transform 0.2s ease;
        transition-delay: 0.2s;
        transform: translate(0, 0);
        top: 0;
        margin-left: -1.25em;
        margin-bottom: -1.953em;
      }
    }
    .personContent {
      position: relative;
      top: unset;
      left: unset;
    }

    &:not(.selected) {
      position: absolute;
      top: 1.25em;
      width: calc((100vw - 5.96em) / 3);

      .personContent {
        opacity: 0;
        top: calc(-100% + 1.25em);
        width: 100%;
      }
      .personPhoto {
        width: 100%;
        height: calc(100% - 1.25em);
      }

      &.previousAdjacent {
        left: -100%;
        &.immediate {
          left: calc((100vw - 5.96em) / -6);
        }
      }
      &.nextAdjacent {
        left: calc(100vw + (100vw * (1 / 6)));
      }
    }
  }
  div.fullSizePersonCard.selected
    + div.fullSizePersonCard:not(.selected).nextAdjacent {
    left: calc(100vw * (5 / 6));
  }
}

@media screen and (min-width: $desktop) {
  div.fullSizePersonCard {
    &.selected {
      left: calc(25vw + 0.8em);
      width: calc(100vw - (2 * (25vw + 1.25em)));
    }
    &:not(.selected) {
      width: calc((100vw - 5.96em) / 4);
    }
  }
  div.fullSizePersonCard:not(.selected).previousAdjacent.immediate {
    left: 0;
  }
  div.fullSizePersonCard.selected
    + div.fullSizePersonCard:not(.selected).nextAdjacent {
    left: calc((100vw - 0.4em) * 0.75);
  }
}

@media screen and (min-width: $desktopLg) {
  div.fullSizePersonCard {
    &.selected {
      left: calc(33vw + 0.8em);
      width: calc(100vw - (2 * (33vw + 1.25em)));
    }
    &:not(.selected) {
      width: calc((100vw - 5.96em) / 6);
    }
  }
  div.fullSizePersonCard:not(.selected).previousAdjacent.immediate {
    left: calc((100vw - 7.451em) / 6);
  }
  div.fullSizePersonCard:not(.selected).previousAdjacent.penultimate {
    left: -1.563em;
  }
  div.fullSizePersonCard.selected
    + div.fullSizePersonCard:not(.selected).nextAdjacent {
    left: calc(67vw + 0.8em);
  }
  div.fullSizePersonCard.selected
    + div.fullSizePersonCard:not(.selected).nextAdjacent
    + div.fullSizePersonCard:not(.selected).nextAdjacent {
    left: calc(100vw - ((100vw - 7.25em) / 6));
  }
}
</style>
