<template>
    <div id="container-connect">
        <transition-group name="animateSelect" id="selector">
            <div v-for="(value, key) in views" v-bind:key="key" class="select"
             v-on:click="select(key)" v-on:mouseover="hover" v-on:mouseleave="hoverLeave">
              <transition name="fade">
                <p class="selectTitle" v-bind:class="{expandedTitle:back_shown}">{{key}}</p>
              </transition>
              <p v-show="selected" class="selectBack" v-bind:class="{expanded_back:back_shown}">Back</p>
            </div>
        </transition-group>
        <transition name="slideUp">
          <component v-if="selected" :is="selected_view[Object.keys(selected_view)[0]]" :backToSelect="backToSelect"/>
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
        back_shown:false,
      }
    },
    methods:{
      select(key){
        if(this.selected){
          return this.backToSelect();
        };
        this.selected_view={};
        this.selected_view[key]=views[key]
        this.selected=true;
        for (let element in this.views) delete this.views[element];
        this.views=this.selected_view;
      },
      backToSelect(){
        window.scroll({
          top: 100, 
          left: 0, 
          behavior: 'smooth' 
        });
        this.selected_view={};
        this.selected=false;
        this.views=Object.assign({}, views);
        this.back_shown=false;
      },
      hover(){
        if(!this.selected)return;
        this.back_shown=true;
      },
      hoverLeave(){
        if(!this.selected)return;
        this.back_shown=false;
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
  }
  .select{
    width:230px;
    background-color: white;
    height:100px;
    /*display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;*/
    text-align: center;
    font-size:25px;
    font-family: "Moderat";
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 12;
  }
  .select:hover{
    cursor: pointer;
    background-color: rgb(230,230,230);
  }
  .selectTitle{
    position: relative;
    top: 50%;
    margin: 0;
    transform: translateY(-50%);
  }
  .select:hover .expandedTitle{
    font-size: 0;
    /*transform:scale(0);*/
  }
  .selectBack{
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    font-size: 0.6em;
    opacity: 0.3;
    position: relative;
    top: 30px;
    padding-left:4px; 
    line-height: 1.75em;
  }
  .select:hover .selectBack{
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    line-height: 1em;
    font-size: 1em;
    opacity: 1;
    transform: translateY(-35px);
  }
  /*Class toggled by vue when back is hovered*/
  .expandedTitle{
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  }
  .animateSelect-enter, .animateSelect-leave-to{
    opacity: 0;
  }
  .animateSelect-leave-active {
    position: absolute;
  }
  .slideUp-enter-active {
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }
  .slideUp-leave-active {
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    position: absolute;
    z-index: -1;
    overflow: hidden;
  }
  .slideUp-enter, {
    transform: translateY(300px);
    opacity: 0;
  }
  .slideUp-leave-to{
    transform: translateY(-100%);
    height: 0;
  }
</style>
