<template>
    <section>
        
        <div class="container-header">
          
          <p class="header" id="header-1">Like what we do?</p>
          <div id="graphics">
            
            <div class="graphic" v-on:mouseover="count_start" 
            v-on:mouseleave="count_reset" background="../images/square.png">
              <div class="graphicInner" id="pixelsPerDay">
                <img src="../images/connect/pixels.svg"/>
                <p id="ppdText">{{pixelsPerDay}}m</p>
                <p id="ppdSubText">pixels per day</p>
              </div>
            </div>
            <div class="graphic">
              <div class="graphicInner" id="covfefe">
                <img src="../images/connect/kawffeeh.svg"/>
              </div>
            </div>
            <div class="graphic" >
              <div class="graphicInnerI" id="icons">
                <div class="graphicIcon">
                  <div class="graphicIconI" id="icon1">
                    <svg width="64" height="64" class="octicon octicon-git-branch" viewBox="0 0 10 16" version="1.1" aria-hidden="true">
                      <path fill-rule="evenodd" 
                      d="M10 5c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v.3c-.02.52-.23.98-.63 1.38-.4.4-.86.61-1.38.63-.83.02-1.48.16-2 .45V4.72a1.993 1.993 0 0 0-1-3.72C.88 1 0 1.89 0 3a2 2 0 0 0 1 1.72v6.56c-.59.35-1 .99-1 1.72 0 1.11.89 2 2 2 1.11 0 2-.89 2-2 0-.53-.2-1-.53-1.36.09-.06.48-.41.59-.47.25-.11.56-.17.94-.17 1.05-.05 1.95-.45 2.75-1.25S8.95 7.77 9 6.73h-.02C9.59 6.37 10 5.73 10 5zM2 1.8c.66 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2C1.35 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2zm0 12.41c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm6-8c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"></path>
                    </svg>
                  </div>
                </div>
                <div class="graphicIcon">
                  <div class="graphicIconI" id="icon2">
                    <img id="gitlabBlack" src="../images/connect/gitlab.svg"/>
                  </div>
                </div>
                <div class="graphicIcon">
                  <div class="graphicIconI" id="icon3">
                    <img src="../images/connect/code_lines.svg"/>
                  </div>
                </div>
                  <div class="graphicIcon">
                    <div class="graphicIconI" id="icon4">
                    d
                    </div>
                  </div>
                </div>
              </div>
              
            <div class="graphic" id="moreStuff">
              <div class="graphicInner">
                More stuff here.
              </div>
            </div>
            <Link id="graphicLeft" text="←" :link_ref="graphicLeft" fontSize="40px" />
            <Link id="graphicRight" text="→" :link_ref="graphicRight" fontSize="40px" />
          </div>
          <p class="header" id="header-2">So do we.</p>
          <p class="header" id="subHeader">
              We’ve got a good thing going here, and we’d like to keep it going. Here’s how you can help.
              <br/>
              <br/> If you’re a…
          </p>
          <Link text="←" link_ref="-1" fontSize="40px" />
        </div>
        <div class="connectBackground">
            <p>con</p>
            <p>nect</p>
        </div>
        <ConnectSelect/>
    </section>
</template>

<script>

  import ConnectSelect from "../components/connect/ConnectSelect.vue";
  import Link from "../components/Link.vue";
  import background from "../images/square.png"
  export default {
    data(){
      return{pixelsPerDay:0}
    },
    methods:{
      count_start(){
        let max=40;
        let counter=setInterval(()=>{
          //Condition here is a check if property exists
          if(this.pixelsPerDay>=max)return clearInterval(counter);
          if(this.pixelsPerDay>=0)this.pixelsPerDay+=1;
          
        }, 30);
      },
      count_reset(){
        console.log('Reset')
        clearInterval(this.counter);
        this.pixelsPerDay=0;
      },
      graphicLeft(){
        console.log('left')
      },
      graphicRight(){
        console.log('right')
      }

    },
    components: {
      ConnectSelect,
      Link
    }
  };
</script>
<!--Graphics Style!-->
<style scoped lang="scss">
  @import "../styles/vars";
  #graphics {
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    height: 400px;
    overflow-x:auto;
    overflow-y:hidden;
  }
  #graphicLeft{
    position: absolute;
    top: 60%;
    left: 10px;
  }
  #graphicRight{
    position: absolute;
    top: 60%;
    right: 10px;
  }
  .graphic{
    flex: 0 0 300px;
    height: 300px;
    margin: 10px;
    position: relative;
  }
  .graphicInner{
    display: flex;
    transition: 0.3s ease-in-out;
    box-sizing: border-box;
    width: calc(100% - 20px);
    height: calc(100% - 20px);
  }
  .graphicInner:hover{
    width: 100%;
    height: 100%;
  }
  #pixelsPerDay{
    font-family: "SpaceMono";
    flex-direction: column;
    align-items: center;
    background-color:white; 
  }
  #pixelsPerDay img{
    transform: translateY(50%);
    transition: 0.3s ease-in-out;
    margin :0;
    padding:2em;
  }
  #ppdText{
    transform: translateY(300px);
    transition: 0.3s ease-in-out;
    margin: 0;
    color:$rouge-40;
    font-size:4em;
    font-weight: bold;
  }
  #ppdSubText{
    transform: translateY(300px);
    transition: 0.3s ease-in-out;
    font-size:1.5em;
    color:$onyx;
  }
  #pixelsPerDay:hover * {
    transform: none;
  }



  #covfefe{
    position: absolute;
    right: 0;
    bottom: 0;
    justify-content: center;
    background-color:white; 
  }
  .graphicInnerI{
    width: 100%;
    height: 100%;
    display: flex;
  }
  #icons{
    flex-wrap: wrap;
    justify-content: left;
    align-items: flex-end;
  }
  .graphicIcon{
    flex: 0 0 50%;
    height: 50%;
    position: relative;
  }
  .graphicIconI{
    display: flex;
    position: absolute;
    justify-content: center;
    align-items: center;
    transition: 0.3s ease-in-out;
    background-color: white;
    width: calc(100% - 10px);
    height: calc(100% - 10px);
  }
  #icon1{
    top: 0;
    right: 0;
    margin-right: 10px;
  }
  #icon2{
    top: 0;
    left: 0;
    margin-left: 10px;
  }
  #icon3{
    bottom: 0;
    right: 0;
    margin-right: 10px;
  }
  #icon4{
    bottom: 0;
    left: 0;
    margin-left: 10px;
  }
  .graphicIcon:hover .graphicIconI{
    width: 100%;
    height: 100%;
  }
  .graphicIcon fill{
    color: black;
  }
  #gitlabBlack{
    filter: grayscale(100%);
  }
</style>
<style scoped lang="scss">
  @import "../styles/vars";
  .connectBackground{
    font-size: 291px;
    position: fixed;
    top: 140px;
    left: 20px;
    color:white;
    z-index: -1;
    line-height: 1;
  }
  .connectBackground p{
    margin: 0;
    padding: 0;
  }
  .container-header{
    /*background: $pale-grey;*/
    z-index: 11;
    margin-left: 12.5%;
    margin-right: 12.5%;
  }
  .header {
    font-family: "SpaceMono";
  }
  #header-1 {
    font-size: 71px;
    text-align: left;
    color: #6aa1f4;
    color: $dodger-blue;
    margin-top: 5vh;
  }
  
  #header-2 {
    font-size: 50px;
  }
  #subHeader {
    font-size: 20px;
    font-family: "Moderat";
    margin: 0;
  }
  #back {
    position: absolute;
    left: 10px;
    top: 50%;
    width: 10px;
    height: 10px;
    background-color: $dodger-blue;
  }
  @media only screen and (max-width: $desktop){
    .container-header{
      margin-left: 5px;
      margin-right: 5px;
    }
  }
  @media only screen and (max-width: 750px) {
    
    #header-1 {
      font-size: 35px;
    }
    #header-2 {
      font-size: 25px;
    }
    #subHeader {
      font-size: 20px;
    }
  }
</style>