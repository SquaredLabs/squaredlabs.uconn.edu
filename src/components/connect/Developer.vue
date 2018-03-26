<template>
    <div id="container">
        <div id="content">
            If you’re a UConn or non-UConn developer but want to get involved with ⬚² labs you can: 
            1) contribute to any of our open source  <span class="content-style-emphasis">projects</span>, 
            2) contact us about presenting a  <span class="content-style-emphasis">workshop</span> in 
            an area of your expertise, and/or 
            3) make a monetary contribution to the lab.
        </div>
        <div id="icons">
            <div class="icon">Gitlab</div>
            <div class="icon">Mail</div>
            <div class="icon">Bitcoin</div>
        </div>
        <div v-on:click="back" id="back">Return to selection</div>
    </div>
</template>

<script>
  export default {
    props: ["back_to_select"],
    data:function(){
      return{
      }
    },
    methods:{
        back(){
            this.back_to_select();
        }
    }
  };
</script>

<style lang="scss" scoped>
    @import "../../styles/vars";
    #container{
        position: relative;
        top:-70px;
        background-color: $dodger-blue;
        height:700px;
    }
    #content{
        position: relative;
        padding-left:145px;
        padding-right:145px;
        color:white;
        position: relative;
        top:50%;
        transform: translateY(-50%);
    }
    .content-style-emphasis{
        background:linear-gradient(left, rgba(255,255,255,0.5),rgba(255,255,255,0.5)) ;
        background-position: 50% calc(50% - 5px) ;
        background-repeat: no-repeat;
        color: $onyx;
        transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    }
    .content-style-emphasis:hover{
        transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        background:linear-gradient(left, rgba(255,255,255,0.2),rgba(255,255,255,0.2)) ;
        background-position: 50% calc(50% - 2px) ;
        cursor: pointer;
    }
    #icons{
        display: flex;
        width: 100%;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .icon{
        width: 20%;
    }
    #back{
        background-color: rgba(255, 255, 255, 0.5);
        position: absolute;
        display: inline;
        left: 50%;
        transform: translateX(-50%);
        bottom: 40px;
    }
</style>
