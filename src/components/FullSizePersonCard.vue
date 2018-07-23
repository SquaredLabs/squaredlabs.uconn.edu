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
      return this.$store.state.selectedPersons > this.id
    },
    next() {
      return this.$store.state.selectedPersons < this.id
    }
  }
  // beforeUpdate() {
  //   var lastPerson = document.getElementById("peopleCarousel").lastChild
  //   lastPerson.classList.add("previousAdjacent")
  //   var peopleEls = document.querySelectorAll(".fullSizePersonCard")
  //   var selectedPersonId = document.querySelector(".selected").id
  //   peopleEls.forEach(function(el) {
  //     var thisEl = el
  //     var i = (function() {
  //       var i = 0
  //       while ((el = el.previousSibling) != null) i++
  //       return i
  //     })()
  //     // console.log("my i= " + i + "selectedId = " + selectedPersonId)
  //     if (i === selectedPersonId) {
  //       return false
  //     } else if (i > selectedPersonId) {
  //       // console.log(thisEl + " my i is less than selectedId")
  //       thisEl.classList.add("previousAdjacent")
  //       thisEl.classList.remove("nextAdjacent")
  //     } else {
  //       // console.log(thisEl + " my i is greater than selectedId")
  //       thisEl.classList.add("nextAdjacent")
  //       thisEl.classList.remove("previousAdjacent")
  //     }
  //   })
  // }
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
      // z-index: unset;
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
      width: calc((100vw - 1.25em) / 6);

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
        left: 0;
        &:nth-of-type(-n + 3) {
          left: -100%;
        }
      }
      &.nextAdjacent {
        right: 0;
        &:nth-of-type(n + 3) {
          right: calc(-100% - 1.25em);
        }
      }
    }
  }
}

@media screen and (min-width: $desktop) {
  div.fullSizePersonCard {
    &.selected {
      grid-column: 3 / span 4;
    }
    // &.previousAdjacent {
    // }
    // &:nth-child(3),
    // &:nth-child(4) {
    //   height: 22.737em;
    //   width: calc(100% + 2.5em);
    // }
    // &:nth-child(3) {
    //   grid-column: 1 / span 2;
    //   margin-left: -60px;
    // }
    // &:nth-child(4) {
    //   grid-column: 7 / span 2;
    // }
  }
}

@media screen and (min-width: $desktopLg) {
  div.fullSizePersonCard {
    &.selected {
      grid-column-start: 5;
    }
    &:not(.selected) {
    }
    // &:nth-child(3),
    // &:nth-child(4),
    // &:nth-child(5),
    // &:nth-child(6) {
    //   height: 22.737em;
    //   width: calc(100% + 2.5em);
    //   grid-row-start: 2;
    //   margin-top: 0.9765em;
    // }
    // &:nth-child(3) {
    //   grid-column: 3 / span 2;
    // }
    // &:nth-child(4) {
    //   grid-column: 9 / span 2;
    // }
    // &:nth-child(5) {
    //   grid-column: 1 / span 2;
    //   margin-left: -100px;
    // }
    // &:nth-child(6) {
    //   grid-column: 11 / span 2;
    //   margin-left: 60px;
    // }
  }
}
</style>
