<template>
  <div>
    <section>
      <layout>
        <construction
          class="marginned--horizontally"
          style="width: 100%"
        />
      </layout>
    </section>
    <section>
      <layout
        style="margin-top:80px"
        text="projects"
        padding-top="110px">
        <div
          class="layout__col--quarter marginned--horizontally"
          style="position: relative; top: -80px">
          <p>Welcome to ⬚² [squared] labs. Together with UConn’s very best
            <SLink
              font-size="16px"
              link_ref="/people">
              students
            </SLink>, we build cutting-edge
            <SLink
              font-size="16px"
              link_ref="/projects">
              websites
            </SLink> that support UConn’s world-class research infrastructure.
          </p>
          <p>View our history, purpose, and space on the
            <SLink
              font-size="16px"
              link_ref="/lab">
              lab page
            </SLink>.
          </p>
        </div>
        <project-card
          :background="require('~/assets/images/projects/ip.png')"
          class="layout__col--quarter marginned--horizontally"
          name="Innovation Portal"
          link="/projects">
          <p>A short, fun description.</p>
        </project-card>
        <project-card
          :background="require('~/assets/images/projects/lincus.png')"
          class="layout__col--quarter marginned--horizontally"
          name="Lincus"
          link="/projects" />
        <project-card
          :background="require('~/assets/images/projects/huskytrails.png')"
          class="layout__col--quarter marginned--horizontally"
          name="GrantTrails"
          link="/projects" />
      </layout>
      <layout>
        <SLink
          class="link--pulled-right"
          font-size="16px"
          link_ref="/projects">
          See all our projects
        </SLink>
      </layout>
    </section>
    <section>
      <layout text="workshops">
        <div class="layout__col--pacman padded">
          <workshop-card
            :technologies="['https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png', 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/726px-CSS3_logo_and_wordmark.svg.png', 'http://ryanchristiani.com/wp-content/uploads/2015/06/js-logo.png']"
            registration-link="http://google.com">
            <template slot="name">Workshop Name</template>
            <template slot="time">13:00-17:00</template>
            <template slot="date">Jan 1, 2018</template>
            <template slot="address-top">1 Bishop Circle</template>
            <template slot="address-bottom">Storrs CT 06269</template>
            <p>Any other relevant text can go here. Now it’s longer though, which is pretty neat. You can talk about the workshop now.</p>
          </workshop-card>
        </div>
        <div
          class="layout__col--quarter padded"
          style="margin-top: 80px">
          <p>Learning from others and sharing what we know is central to the ⬚² labs philosophy. We see workshops as an opportunity to do both (in addition to getting to know the UConn web development community).</p>
          <p>Our workshops are open to all members of the UConn community, for free.</p>
          <SLink
            font-size="16px"
            link_ref="/workshops">
            View all workshops
          </SLink>
        </div>
      </layout>
    </section>
    <section style="padding-top: 6em">
      <layout>
        <SLink
          class="link--pulled-right"
          font-size="16px"
          link_ref="/people">
          Meet the team
        </SLink>
      </layout>
      <layout>
        <div
          class="layout__col--quarter marginned--horizontally"
          style="position: relative; top: -80px">
          <p>⬚² labs team members are a stellar group who share a passion for building beautiful, functional websites.</p>
          <p>We are always looking for talented and hard-working students to join our ranks. We look for students with a track record of building cool stuff in their spare time, web experience, and a passion for innovation and creation. If that sounds like you,
            <SLink
              font-size="16px"
              link_ref="/connect">
              get in touch!
            </SLink>
          </p>
        </div>
        <person-card
          v-for="i in 3"
          :key="i"
          :background="require('~/assets/images/people/dan.jpg')"
          class="layout__col--quarter marginned--horizontally"
          name="Dan Schwartz"
          role="Director">
          <template slot="name">Dan Schwartz</template>
          <template slot="role">Director</template>
          <p>“Take life (and everything) with a grain of salt.”</p>
        </person-card>
      </layout>
    </section>
    <section>
      <layout style="margin-top: 260px">
        <connect-card
          :background="require('~/assets/images/connect/gitlab.svg')"
          class="layout__col--quarter marginned--horizontally"
          link="https://gitlab.com/squared-labs" />
        <connect-card
          :background="require('~/assets/images/connect/mail.svg')"
          :hidden-image="require('~/assets/images/connect/contact.png')"
          class="layout__col--quarter marginned--horizontally" />
        <connect-card
          :background="require('~/assets/images/connect/btc.svg') "
          class="layout__col--quarter marginned--horizontally"
          link="http://www.foundation.uconn.edu/send-your-gift/" />
        <div
          class="layout__col--quarter marginned--horizontally"
          style="position: relative; top: -80px">
          <p>If you like what you see here and want to offer support, or get involved as something other than a member of ⬚² labs, we would love to hear from you! From workshops, to open source contributions, to donations, there are plenty ways to become a part of what we do. </p>
          <SLink
            font-size="16px"
            link_ref="/connect">
            Connect with us
          </SLink>
        </div>
      </layout>
    </section>
  </div>
</template>

<script>
import Construction from "../components/Construction.vue"
import Layout from "../components/Layout.vue"
import ProjectCard from "../components/ProjectCard.vue"
import WorkshopCard from "../components/WorkshopCard.vue"
import PersonCard from "../components/PersonCard.vue"
import ConnectCard from "../components/ConnectCard.vue"
import SLink from "../components/Link.vue"

export default {
  components: {
    Layout,
    Construction,
    ProjectCard,
    WorkshopCard,
    ConnectCard,
    PersonCard,
    SLink
  }
}
</script>

<style scoped lang="scss">
@import "~assets/styles/vars";

section {
  margin-bottom: 80px;
}

.link--pulled-right {
  margin: 20px;
  margin-left: auto;
}
</style>
