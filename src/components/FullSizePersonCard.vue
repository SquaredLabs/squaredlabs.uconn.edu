<template>
  <div
    :class="[
      {selected:selected},
      {previousAdjacent:previous},
      {nextAdjacent:next}
    ]"
    class="fullSizePersonCard">
    <div
      :style="`background-image: url('${background}')`"
      class="personPhoto" />
    <div class="personContent">
      <div class="personPreview">
        <p class="personName"><slot name="name" /></p>
        <p class="personRole"><slot name="role" /></p>
      </div>
      <div class="personAbout">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    background: { type: String, required: true },
    id: { type: Number, required: true }
  },
  computed: {
    selected() {
      return this.$store.state.selectedPerson === this.id
    },
    previous() {
      return this.$store.state.selectedPerson > this.id
    },
    next() {
      return this.$store.state.selectedPerson < this.id
    }
  },
  beforeUpdate() {
    if (this.selected) {
      this.$emit("reflowPeople")
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/styles/vars";

.fullSizePersonCard {
  position: relative;
}

.personPhoto {
  height: 100%;
  // z-index: 2;
  display: inline-block;
  background-size: cover;
  background-position: center;
}

.personContent {
  display: inline-block;
  position: absolute;
  left: 0;
  top: 0;
  // z-index: 1;
  height: 100%;
  width: calc(50% + 10px);
  padding: 0 10px;
  box-sizing: border-box;
  background: white;
  text-align: center;
  opacity: 1;
  overflow: hidden;
}

.personPreview {
  height: 2.441em;
  margin: 10px 0;
}

.personName {
  font-family: "Moderat";
  font-size: 1.25em;
  font-weight: bold;
  color: $dodger-blue;
  margin: 0;
}

.personRole {
  font-size: 1em;
}

div.fullSizePersonCard.selected {
  grid-column: 1 / 5;
  width: calc(100% + 2.5em);
  .personPhoto {
    width: calc(50% - 10px);
  }
}

@media screen and (max-width: $tablet) {
  div.fullSizePersonCard.selected {
    height: 40vh;
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
    height: 22.737em;

    &.selected {
      width: 100%;
      grid-column: 2 / 6;

      .personPhoto {
        width: calc(50% + 30px);
        margin-right: -1.25em;
      }
      .personContent {
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
        right: calc(-100% - 1.25em);
      }
    }
  }
  div.fullSizePersonCard.selected
    + div.fullSizePersonCard:not(.selected).nextAdjacent {
    right: calc((100vw - 5.96em) / -6);
  }
}

@media screen and (min-width: $desktop) {
  div.fullSizePersonCard {
    &.selected {
      grid-column: 3 / span 4;
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
    right: 0;
  }
}

@media screen and (min-width: $desktopLg) {
  div.fullSizePersonCard {
    &.selected {
      grid-column-start: 5;
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
    right: calc((100vw - 7.451em) / 6);
  }
  div.fullSizePersonCard.selected
    + div.fullSizePersonCard:not(.selected).nextAdjacent
    + div.fullSizePersonCard:not(.selected).nextAdjacent {
    right: -1.563em;
  }
}
</style>
