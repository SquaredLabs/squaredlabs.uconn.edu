<template>
    <div id="container">
        <div id="content">
            <p>
            Students who work in ⬚² labs are 10 times more likely to get an awesome job when they graduate. 
             Ok, that’s probably a slight exaggeration, but they’ll definitely have an awesome job while 
             they’re at UConn. 
             </p>
             <p>
             We are always looking for talented and hard-working students to join our team. 
             Our interview process is rigorous and our bar is set high.  We look for students that already have 
             a track record of building cool stuff in their spare time (which usually starts in high school or 
             earlier) and some demonstrated experience working with the web.
             </p> 
             <p>
             The earlier you are in your college career the better (while we don’t typically hire seniors, 
             exceptions have been made). If you’ve read through this website and think you’d be a good fit, 
             you can apply for a <span class="content-style-emphasis">web development</span> 
             or <span class="content-style-emphasis">design</span> position.
             <p>
             The other way to get involved with us as a student is 
             to attend our <span class="content-style-emphasis">workshops</span> which cover a 
             variety of topics relevant to our projects (from coding to design to data visualization).
             Here are some of the companies and organizations that our alumni have gone on to work with:
             </p>
        </div>
        <div v-on:click="back" id="back">Return to selection</div>
    </div>
</template>

<script>
  export default {
    props: ["backToSelect"],
    methods:{
        back(){
            this.backToSelect();
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
    #back{
        background-color: rgba(255, 255, 255, 0.5);
        position: absolute;
        display: inline;
        left: 50%;
        transform: translateX(-50%);
        bottom: 40px;
    }
</style>
