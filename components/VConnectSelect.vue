<template>
  <div id="containerConnect">
    <transition-group
      id="selector"
      name="animateSelect"
      @after-leave="readyForBack"
      @before-leave="disableBack">
      <div
        v-for="(value, key) in views"
        :key="key"
        class="select"
        @click="select(key)"
        @mouseover="hover"
        @mouseleave="hoverLeave">
        <transition name="fade">
          <p
            :class="{expandedTitle:(selected && hoverable)}"
            class="selectTitle">{{ key }}</p>
        </transition>
        <p
          v-show="selected && hoverable"
          class="selectBack">Back</p>
      </div>
    </transition-group>
    <transition name="slideUp">
      <component
        v-if="selected"
        :is="selected_view[Object.keys(selected_view)[0]]"
        :back="resetSelection"/>
    </transition>
  </div>
</template>

<script>
import Developer from "~/components/VConnectDeveloper.vue"
import Student from "~/components/VConnectStudent.vue"
import Company from "~/components/VConnectCompany.vue"
import Other from "~/components/VConnectOther.vue"

const views = {
  Student: Student,
  Developer: Developer,
  Company: Company,
  Other: Other
}

export default {
  data: function() {
    return {
      views: Object.assign({}, views),
      selected: false,
      selected_view: {},
      back_shown: false,
      hoverable: false
    }
  },
  methods: {
    select(key) {
      if (this.selected) {
        return this.resetSelection()
      }
      this.selected_view = {}
      this.selected_view[key] = views[key]
      for (let element in this.views) delete this.views[element]
      this.views = this.selected_view
      this.selected = true
    },
    resetSelection() {
      this.selected_view = {}
      this.selected = false
      this.views = Object.assign({}, views)
      this.back_shown = false
      this.hoverable = false
    },
    hover() {
      if (!this.selected) return
      this.back_shown = this.hoverable
    },
    hoverLeave() {
      if (!this.selected) return
      this.back_shown = false
    },
    readyForBack() {
      this.hoverable = true
    },
    disableBack() {
      this.hoverable = false
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/styles/vars";

#containerConnect {
  margin: 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
}

#selector {
  display: flex;
  justify-content: space-around;
  flex-flow: row wrap;
  z-index: 11;
  width: 100%;
  transition: all 0.3s;
}
.select {
  width: calc(50% - 0.4em);
  min-width: 6.25em;
  background-color: white;
  height: 3.815em;
  text-align: center;
  font-size: 1.563em;
  font-family: "Moderat";
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 12;
  margin: 0.8em 0 0 0;
}

.select:hover {
  cursor: pointer;
  background-color: rgb(230, 230, 230);
}
.selectTitle {
  margin: 0;
  position: relative;
  top: 1.25em;
}
.select:hover .expandedTitle {
  font-size: 0;
}

.selectBack {
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  font-size: 0.6em;
  opacity: 0.3;
  position: relative;
  top: 1.25em;
}
.select:hover .selectBack {
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  line-height: 1em;
  font-size: 1em;
  opacity: 1;
  top: 0.41em;
}

// Vue transition documentation:
// https://vuejs.org/v2/guide/transitions.html#Transition-Classes

.expandedTitle {
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.animateSelect-leave-active {
  position: absolute;
}
.animateSelect-enter,
.animateSelect-leave-to {
  transform: translateY(-35px);
  opacity: 0;
}

.slideUp-enter {
  opacity: 0;
  height: 0;
}
.slideUp-enter-active {
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.slideUp-leave-active {
  margin-bottom: 0;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  position: absolute;
  z-index: -1;
  overflow: hidden;
  opacity: 1;
  height: calc(100vh - 2.441em);
  min-height: 0;
}
.slideUp-leave-to {
  opacity: 0;
  height: 0;
}

@media screen and (min-width: $desktop) {
  .select {
    width: calc(25% - 0.8em);
  }
}
</style>

<style lang="scss">
@import "~assets/styles/vars";
#container {
  width: calc(100% + 2.5em);
  position: relative;
  top: -3.815em;
  background-color: $dodger-blue;
  min-height: 44em;
  height: calc(100vh - 2.441em);
  margin-bottom: -18.626em;
}
#content {
  position: relative;
  padding: 0 10%;
  color: white;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  transition: all 0.5s ease;
}
@media screen and (max-width: $tablet) {
  /*Mobile View*/
  #content {
    top: 10%;
    transform: none;
  }
}
</style>
