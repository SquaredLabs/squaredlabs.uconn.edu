<template>
  <v-grid-layout class="noMarginTop">
    <div id="titleTextContainer" class="col-sm-4 col-md-6 col-8 col-lg-12">
      <div id="titleText">
        <v-title-line title-positioning="design">
          <template slot="title">
            design
          </template>
          <template slot="hoverContent">
            <p>
              <span class="weAre">you wouldn&rsquo;t build</span> a building
              without architectural drawings. We don’t build websites without
              spending a considerable amount of time on design, ensuring that
              every choice contributes to crafting the most effective solution.
            </p>
            <p>
              <span class="weAre">we believe that</span> thoughtfully
              discussing, debating, and documenting all decisions (sometimes
              quite heatedly!) early on pays dividends later.
            </p>
            <p>
              <span class="weAre">we lay out</span> every pattern and
              convention, ensuring continuity throughout the project from the
              get-go. Color palette, wireframes, stack choice, database
              architecture, timeline — you name it — it’s vetted for consistency
              with the overall project goals.
            </p>
          </template>
        </v-title-line>
        <v-title-line title-positioning="develop">
          <template slot="title">
            develop
          </template>
          <template slot="hoverContent">
            <p>
              <span class="weAre">where our designs</span> slowly transform into
              reality. We see it as a highly iterative, dynamic, catalogued, and
              collaborative process, where everyone learns from everyone else.
            </p>
            <p>
              <span class="weAre">we strongly believe</span> that there’s always
              room for our development processes to improve. Always. We’re
              presently using scrum to manage our projects (or at least our own
              hacked version of it ;). Courtney keeps everyone in line.
            </p>
            <p>
              <span class="weAre">finally, we think</span> of “develop” not just
              in a software sense but also in a personal development sense. The
              mission of squared labs is very much one of learning where team
              members can develop skills that we hope will serve them well
              beyond UConn.
            </p>
          </template>
        </v-title-line>
        <v-title-line title-positioning="create">
          <template slot="title">
            create.
          </template>
          <template slot="hoverContent">
            <p>
              <span class="weAre">you might say</span> the project is finished
              at this point, but we believe that websites are never truly
              complete. Ever changing technologies, content, and our own growth
              as a team mean that we’re often revisiting projects in our
              portfolio.
            </p>
            <p>
              <span class="weAre">beyond maitenence and </span> updates, an idea
              doesn’t come to fruition until it’s been used; until it functions,
              breaks, and takes its own place in the world.
            </p>
            <p>
              <span class="weAre">&ldquo;create&rdquo; is about</span> the
              reward you get when your site goes live, and your audience gets
              the opportunity to experience your hard work first hand. The
              feeling you get having built something from nothing — hopefully
              leaving the internet ever so slightly more useful or informative
              than it was before.
            </p>
          </template>
        </v-title-line>
      </div>
    </div>

    <div id="aboutSummary" class="aboutModule col-sm-4 col-md-5">
      <div>
        <p>
          <span class="weAre">we are squared labs:</span> a group of
          undergratuate students at the University of Connecticut. We support
          research at the University and bring the sciences and arts closer
          together.
        </p>
        <p>
          <span class="weAre">we are collaborators:</span> programmers,
          designers, illustrators, photographers, journalists, and scientists.
        </p>
        <p>
          <span class="weAre">we create and build</span> tools, websites,
          identities, art, and more. Really, the only thing we don’t do is say
          no.
        </p>
      </div>
    </div>
    <div id="philosphy" class="aboutModule col-sm-4 col-md-5">
      <h1 class="aboutTitle">our philosphy</h1>
      <div>
        <p>
          Students are the lifeblood of any University. When they graduate, many
          will go on to transform the world&mdash;literally. Yet, academia, with
          its long-standing obsession with status, title, and seniority, too
          often makes students feel unready or incapable of making a difference
          until they have a diploma in their hand (maybe it’s their way of
          justifying their existence in the face of people like Steve Jobs, Bill
          Gates, Mark Zuckerberg, etc. ;)
        </p>
        <p>Anyway, we believe that’s bogus.</p>
        <p>
          At UConn we have some of the brightest, most motivated, and
          hard-working students in the country. At squared labs we believe that
          students need to be supported to unleash their creativity (and paid
          well to do it).
        </p>
      </div>
    </div>
    <div id="who" class="aboutModule col-sm-4 col-md-5">
      <h1 class="aboutTitle">who we are</h1>
      <p>
        We’re made up mainly of student developers, designers, and content
        specialists. For a complete listing of current (and past) squared labs
        team members see our people page.
      </p>
      <p>If you want to do what we do, then join us!</p>
    </div>
    <div id="what" class="aboutModule col-sm-4 col-md-5">
      <h1 class="aboutTitle">what we build</h1>
      <div>
        <p>
          The sites we’ve built range from the purely informational (e.g.,
          tip.uconn.edu) to the functional (e.g., lincus.uconn.edu) to a hybrid
          of the two (e.g., ip.uconn.edu). They all have a common thread — our
          websites support research and researchers at UConn.
        </p>
        <p>
          If you want to know everything we’ve worked on, and are working on,
          check out our <v-link href="/projects">projects</v-link> page.
        </p>
      </div>
    </div>
    <div id="where" class="aboutModule col-sm-4 col-md-5">
      <h1 class="aboutTitle">where we live</h1>
      <div>
        <div class="subsection">
          <h2 class="subheading">Organizationally:</h2>
          <p>
            We’re a subunit within the Center for Open Research Resources &amp;
            Equipment (also known as COR²E), which is a unit within the Office
            of the Vice President for Research (or the OVPR).
          </p>
        </div>
        <div class="subsection">
          <h2 class="subheading">Physically:</h2>
          <p>
            We’re in room G01 of the Biology/Physics building — the mysterious
            locked room that says
            <span class="stylizedName">[squared labs]</span> on the front and
            looks like some sort of company (we’re not).
          </p>
        </div>
        <p>
          We take our work environment seriously, because after all, working
          somewhere that you don’t like is really not all that fun.
        </p>
        <p>
          The space we’re currently in was formerly an unused conference room
          that was being used as an office for one person and storage for
          furniture and junk.
        </p>
      </div>
    </div>
  </v-grid-layout>
</template>

<script>
import VLink from "~/components/VLink"
import VTitleLine from "~/components/VTitleLine"
import VGridLayout from "~/components/VGridLayout"

export default {
  components: {
    VLink,
    VTitleLine,
    VGridLayout
  }
}
</script>

<style lang="scss">
@import "~assets/styles/vars";
@import "~assets/styles/grid";

.weAre,
.aboutTitle {
  font-family: "SpaceMono";
  font-variant: small-caps;
  font-weight: bold;
}
#aboutSummary {
  font-size: 1.953em;
  margin: 4.768em 0;
}
.aboutModule {
  color: white;
}
.aboutTitle {
  margin: 0.25em 0;
  font-size: 3.052em;
  line-height: 1em;
  font-family: "SpaceMono";
}
.subheading {
  font-size: 1.563em;
  margin: 0.25em 0 0 0;
}
.subsection {
  width: 48%;
  display: inline-block;
}
.subsection ~ .subsection {
  margin-left: 1.25em;
}
.subsection p {
  margin-top: 0.25em;
}
.stylizedName {
  font-family: "Space Mono";
}
//Desktop Only
@media screen and (min-width: $desktop) {
  section.gridded.noMarginTop {
    margin-top: -10vh;
  }
  .aboutModule {
    grid-column-start: 1;
  }
}
// Tablet
@media (min-width: $tablet) and (max-width: $desktop) {
  #plusIcons {
    font-size: 10em;
    top: 1.5em;
  }
  .about {
    color: white;
  }
}
</style>
