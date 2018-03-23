<template>
    <div id="container-connect">
        <div id="selector">
          <div v-for="(value, key) in views" v-bind:key="key" class="select" v-on:click="select(key)">
            {{key}}
          </div>
        </div>
        <component v-if="selected" :is="selected_view[Object.keys(selected_view)[0]]" :back_to_select="back_to_select"/>
    </div>
</template>

<script>

  import Student from './Student.vue';
  import Developer from './Developer.vue';
  import Company from './Company.vue';
  import Other from './Other.vue';

  let views={
    "Student":Student,
    "Developer":Developer,
    "Company":Company,
    "Other":Other,
  }

  export default {
    data:function(){
      return{
        views:views,
        selected:false,
        selected_view:{},
      }
    },
    methods:{
      select(key){
        this.selected_view={};
        this.selected_view[key]=views[key]
        this.selected=true;
        this.views=this.selected_view;
      },
      back_to_select(){
        this.selected_view={};
        this.selected=false;
        this.views=views;
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import "../../styles/vars";
  #container-connect{

  }
  #selector{
    display: flex;
    justify-content: space-around;
  }
  .select{
    width:230px;
    background-color: white;
    height:100px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size:25px;
    font-family: "Moderat";
  }
</style>
