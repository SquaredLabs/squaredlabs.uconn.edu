<template>
  <div >
      <h1 class="title">{{project.name}}</h1>
      <SLink
          @click="unexpand"
          class="SLink">
          ← Return to all projects
        </SLink>
  </div>
</template>

<script>
import SLink from "../Link"
export default {
  components:{
    SLink
  },
  props: {
      project: { type: Object, required: true }
  },
  methods:{
    unexpand(){
      
    }
  }
}
</script>


<style lang="scss" scoped>
@import "~assets/styles/vars";
.title{
  font-size:6em;
}

</style>
