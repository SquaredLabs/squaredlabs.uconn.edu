<template>
    <div id="container-connect">
        <transition-group name="animateSelect" id="selector">
            <div v-for="(value, key) in views" v-bind:key="key" class="select" v-bind:class="{selected:selected}" v-on:click="select(key)">
              {{key}}
            </div>
        </transition-group>
        <transition name="slide_up">
          <component v-if="selected" :is="selected_view[Object.keys(selected_view)[0]]" :back_to_select="back_to_select"/>
        </transition>
    </div>
</template>

<script>

  import Developer from './Developer.vue';
  import Student from './Student.vue';
  import Company from './Company.vue';
  import Other from './Other.vue';

  const views={
    "Student":Student,
    "Developer":Developer,
    "Company":Company,
    "Other":Other,
  }

  export default {
    data:function(){
      return{
        views:Object.assign({}, views),
        selected:false,
        selected_view:{},
      }
    },
    methods:{
      select(key){
        if(this.selected)return;
        this.selected_view={};
        this.selected_view[key]=views[key]
        this.selected=true;
        for (let element in this.views) delete this.views[element];
        this.views=this.selected_view;
      },
      back_to_select(){
        window.scroll({
          top: 100, 
          left: 0, 
          behavior: 'smooth' 
        });
        this.selected_view={};
        this.selected=false;
        this.views=Object.assign({}, views);
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import "../../styles/vars";
  #container-connect{
    margin: 0 10px 0 10px;
  }
  #selector{
    display: flex;
    justify-content: space-around;
    z-index: 11;
    background: $pale-grey;
    padding-top: 10px;
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
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 12;
  }
  /*Class toggled by vue*/
  .select:hover{
    cursor: pointer;
    background-color: rgb(230,230,230);
  }
  .selected:hover{
    cursor: default !important;
    background-color: rgb(255,255,255) !important;
  }
  .animateSelect-enter, .animateSelect-leave-to{
    opacity: 0;
  }
  .animateSelect-leave-active {
    position: absolute;
  }
  .slide_up-enter-active {
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }
  .slide_up-leave-active {
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    position: absolute;
    z-index: -1;
  }
  .slide_up-enter, {
    transform: translateY(300px);
    opacity: 0;
  }
  .slide_up-leave-to{
    transform: translateY(-100%);
  }
</style>
