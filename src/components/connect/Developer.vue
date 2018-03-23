<template>
    <div id="container">
<<<<<<< fcac807601d87d3b1fbe2aa2004a69f2aaac0ffe
        <div id="content">
            If you’re a UConn or non-UConn developer but want to get involved with ⬚² labs you can: 

                <p><span class="content-style-list">
                    1) Contribute to any of our open source  
                    <span class="content-style-emphasis">projects</span>,
                </span>
                <span class="content-style-list">
                    2) contact us about presenting a  <span class="content-style-emphasis">workshop</span> 
                    in an area of your expertise, and/or
                </span>
                <span class="content-style-list">
                    3) make a monetary contribution to the lab.
                </span></p>
            
            <div id="icons">
                <div class="icon"><img alt="Gitlab" src="../../images/connect/gitlab.svg" /></div>
                <div class="icon"><img alt="Mail" src="../../images/connect/mail.svg" /></div>
                <div class="icon"><img alt="Bitcoin" src="../../images/connect/btc.svg"/></div>
            </div>
        </div>
        
        <div v-on:click="back" id="back">Return to selection</div>
    </div>
=======
        Developer Placeholder
        <div v-on:click="back">Back</div>
    </div>
    
>>>>>>> Create selector
</template>

<script>
    export default {
        props: ["back_to_select"],
<<<<<<< fcac807601d87d3b1fbe2aa2004a69f2aaac0ffe
=======
        data:function(){
            return{
            }
        },
>>>>>>> Create selector
        methods:{
            back(){
                this.back_to_select();
            }
        }
    };
</script>

<style lang="scss" scoped>
<<<<<<< fcac807601d87d3b1fbe2aa2004a69f2aaac0ffe
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
    #content .content-style-list{
        color:$onyx;
    }
    #content .content-style-emphasis{
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
        flex-wrap: wrap;
        justify-content: space-between;
        padding-top: 40px;
        color: black;
    }
    @media only screen and (max-device-width: 949px){
        #icons{
            justify-content: space-around;
        }
    }
    
    .icon{
        width: 200px;
        height:100px;
        background-color: white;
        margin:10px;
        transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    }
    .icon:hover{
        cursor: pointer;
    }
    .icon img{
        height: 45px;
        margin: 0 auto;
        display: block;
        margin-top: 28px;
        transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    }
    .icon:hover img{
        height:50px;
        margin-top: 26px;
    }
    #back{
        background-color: rgba(255, 255, 255, 0.5);
        position: absolute;
        display: inline;
        left: 50%;
        transform: translateX(-50%);
        bottom: 40px;
    }
=======
  #container{

  }
>>>>>>> Create selector
</style>
