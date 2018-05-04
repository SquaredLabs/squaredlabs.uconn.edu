<template>
  <div>
    <div id="titleTextContainer">
      <div id="titleText">
        <p class="titleTextLine">design</p>
        <p class="titleTextLine">develop</p>
        <p class="titleTextLine">create.</p>
      </div>
    </div>
    <div id="plusIcons">
        <p class="plus">+</p>
        <p class="plus">+</p>
    </div>
    <div id="aims">
      <div id="leftContent">
        <div id="text">
          <p>
            <span class="weAre">we are squared</span>
            labs: a group of undergratuate students 
          at the University of Connecticut. We support research at 
          the University and bring the sciences and arts closer 
          together.</p>
          <p>
            <span class="weAre">we are collaborators:</span>
            programmers, designers, illustrators, 
          photographers, journalists, and scientists. </p>
          <p>
            <span class="weAre">we create and </span>
            build tools, websites, identities, art, 
          and more. Really, the only thing we don’t do is say no.</p>
        </div>
        <div class="aimL">
          <div class="aimI5">
            To leave UConn better than we found it.
          </div>
        </div>
      </div>
      <div id="rightContent">
        <h1 id="title">
          our aims
        </h1>
        <div id="aimBoxes">
          <div class="aim">
            <div class="aimI aimI1">
            To give students real-world software development experience.
            </div>
          </div>
          <div class="aim">
            <div class="aimI aimI2">
            To provide an unparalleled work and learning environment.
            </div>
          </div>
          <div class="aim">
            <div class="aimI aimI3">
            To support different and creative ways of thinking.
            </div>
          </div>
         
          <div class="aim">
             <div class="aimI aimI4">
            To build awesome websites.
          </div>

          </div>
        </div>
      </div>
      
    </div>
    <div class="about" id="philosphy">
      <h1 class="aboutTitle">our philosphy</h1>
      <p class="aboutText">
        <p>
        Students are the lifeblood of any University.  
        When they graduate, many will go on to transform the world 
        — literally. Yet, academia, with its long-standing obsession
         with status, title, and seniority, too often makes students
          feel unready or incapable of making a difference until they
           have a diploma in their hand 
           (maybe it’s their way of justifying their existence in 
           the face of people like Steve Jobs, Bill Gates, 
           Mark Zuckerberg, etc. ;)  
        </p>
        <p>
        Anyway, we believe that’s bogus.
        </p>
        <p>
        At UConn we have some of the brightest, 
        most motivated, and hard-working students in the country. 
        At squared labs we believe that students need to be 
        supported to unleash their creativity 
        (and paid well to do it).
        </p>
      </p>
    </div>
    <div class="about" id="who">
      <h1 class="aboutTitle">who we are</h1>
      <p class="aboutText">
        <p>
        We’re made up mainly of student developers, designers, 
        and content specialists. For a complete listing of current 
        (and past) squared labs team members see our people page.</p>
        <p>If you want to do what we do, then join us!</p>
      </p>
    </div>
    <div class="about" id="what">
      <h1 class="aboutTitle">what we build</h1>
      <p class="aboutText">
        <p>
        The sites we’ve built range from the purely informational 
        (e.g., tip.uconn.edu) to the functional (e.g., 
        lincus.uconn.edu) to a hybrid of the two 
        (e.g., ip.uconn.edu). They all have a common thread — 
        our websites support research and researchers at UConn. 
        </p>
        <p>
        If you want to know everything we’ve worked on, and are 
        working on, check out our [projects] page.
        </p>
        

      </p>
    </div>
    <div class="about" id="where">
      <h1 class="aboutTitle">where we live</h1>
      <p class="aboutText">
        Organizationally:  
        <p>
        We’re a subunit within the Center for Open Research 
        Resources & Equipment (also known as COR²E), which is a 
        unit within the Office of the Vice President for Research 
        (or the OVPR).</p>
        
        Physically: 
        <p>
        We’re in room G01 of the Biology/Physics 
        building — the mysterious locked room that says 
        [squared labs] on the front and looks like some sort of 
        company (we’re not).
        </p>
      </p>
    </div>
    <div class="about" id="space">
      <h1 class="aboutTitle"></h1>
      <p class="aboutText">
        <p>
        We take our work environment seriously, because after all, 
        working somewhere that you don’t like is really not all 
        that fun.
        </p>

        <p>
        The space we’re currently in was formerly an unused 
        conference room that was being used as an office for one 
        person and storage for furniture and junk.
        </p>
      </p>
    </div>
  </div>
</template>

<script>
import SLink from "../components/Link.vue";

export default {
  components: {
    SLink
  }
};
</script> 

<style lang="scss">

#titleTextContainer{
  display: flex;
  align-items: center;
  justify-content: center;

}
#titleText{
  display: flex;
  flex-direction: column;
  justify-content: center;
}
#plusIcons{
  position: absolute;
  display: flex;
  flex-direction: column;
  font-size: 15.5em;
  top: 0.5em;
  right: 5%;
  color: white;
}
.titleTextLine{
  color: white;
  font-size: 15.5em;
  font-family:'SpaceMono';
  margin-top: 0.5em;
}
#aims{
  display: flex;
  justify-content: space-between;
}
#aims #leftContent{
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
#text{
  flex: 0 0 40%;
  color: white;
  padding: 0 2em 4em 2em;
}
.weAre{
  font-family: "SpaceMono";
  font-variant: small-caps;
}
#aims #rightContent{
  flex: 0 0 60%;
  display: flex;
  flex-direction: column;
}
#rightContent #title{
  font-size: 3em;
  text-align: center;
  color: white;
  font-family: "SpaceMono";
  margin-top: 0;
  font-weight: 500;
}
#rightContent #aimBoxes{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
#aimBoxes .aim{
  position: relative;
  flex: 0 0 15em;
  height: 15em;
  
}
.aim .aimI{
  background-color: white;
  position: absolute;
  width: 80%;
  height: 80%;
}
.aim .aimI1{
  top: 0;

}
.aim .aimI2{
  bottom: 0;
  
}
.aim .aimI3{
  top:0;
  right: 0;
  
}
.aim .aimI4{
  bottom:0;
  right: 0;
  
}
.aimL{
  flex: 0 0 15em;
  width: 15em;
  right: 0;
}
.aimI5{
  background-color: white;
  /*position: relative;*/
  width: 80%;
  height: 80%;
}
.about{
  width:60%;
  color:white;
  padding-left:2em; 
}
.aboutTitle{
  font-size: 4em;
  font-weight: 500;
  font-family: "SpaceMono";
  
}
.aboutText{

}
ol {
    counter-reset: list;
    margin: 0;
    padding: 0;
}
ol > li {
    list-style: none;
}
ol > li:before {
    content: counter(list) ") ";
    counter-increment: list;
}
</style>

