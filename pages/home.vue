<template>
  <div id="homePage">
    <v-grid-layout
      id="landSection"
      section="landing">
      <img
        class="logo col-lg-10 col-8 col-sm-4 col-md-6 off-lg-1"
        src="~/assets/images/full-wordmark.svg"
        alt="Squared Labs">
    </v-grid-layout>
    <v-grid-layout
      id="projectSection"
      section="projects">
      <div
        text="projects"
        class="col-sm-4 col-md-2 off-lg-1">
        <p>Welcome to ⬚² [squared] labs. Together with UConn’s very best
          <v-link href="/people">students</v-link>, we build cutting-edge
          <v-link href="/projects">websites</v-link> that support UConn’s world-class research infrastructure.
        </p>
        <p>View our history, purpose, and space on the
          <v-link href="/labs">lab page</v-link>.
        </p>
      </div>
      <div v-if="!projects">Loading projects...</div>
      <v-project-card
        v-for="index in 3"
        v-else
        :key="index"
        :project="projects[index]"
        class="col-lg-2 col-sm-2"/>
      <div class="linkPulledRight off-lg-9 off-6 off-md-4 off-sm-2 col-sm-2">
        <v-link href="/projects">
          See all projects &rarr;
        </v-link>
      </div>
    </v-grid-layout>
    <v-grid-layout
      v-if="people"
      id="peopleSection"
      section="people">
      <div class="peopleText col-sm-4 col-md-2 off-lg-1">
        <p>⬚² labs team members are a stellar group who share a passion for building beautiful, functional websites.</p>
        <p>We are always looking for talented and hard-working students to join our ranks. We look for students with a track
        record of building cool stuff in their spare time, web experience, and a passion for innovation and creation. If
        that sounds like you,
          <v-link href="/connect">
            get in touch!
          </v-link>
        </p>
      </div>
      <v-person-card-medium
        v-for="person in people"
        :key="person.id"
        :background="person.imageURL"
        :order="person.order"
        :name="person.name"
        :role="person.title"
        class="col-sm-2">
        <template slot="name">{{ person.name }}</template>
        <template slot="role">{{ person.role }}</template>
        {{ person.description }}
      </v-person-card-medium>
      <div v-if="!people">Loading people</div>
      <div class="linkPulledRight off-lg-9 off-6 off-md-4 off-sm-2 col-sm-2">
        <v-link href="/people">
          Meet the full team &rarr;
        </v-link>
      </div>
    </v-grid-layout>
    <v-grid-layout
      id="connectSection"
      section="connect">
      <v-connect-card
        title="Contribute on GitHub"
        link="https://github.com/squaredlabs"
        class="col-sm-2 col-md-2 off-lg-1">
        <v-connect-button-art-git-hub />
      </v-connect-card>
      <v-connect-card
        title="Contact ⬚² labs"
        link="mailto:squaredlabs@uconn.edu"
        class="col-sm-2 col-md-2">
        <v-connect-button-art-mail />
      </v-connect-card>
      <v-connect-card
        title="Donate to ⬚² labs"
        link="http://www.foundation.uconn.edu/send-your-gift/"
        class="col-sm-2 col-md-2">
        <v-connect-button-art-btc />
      </v-connect-card>
      <div class="connectText col-sm-2 col-md-4 off-6 col-2 off-lg-8 col-lg-3">
        <p>If you like what you see here and want to offer support, or get involved as something other than a member of ⬚²
        labs, we would love to hear from you! From workshops, to open source contributions, to donations, there are plenty
        ways to become a part of what we do. </p>
      </div>
      <div class="linkPulledRight col-sm-2">
        <v-link href="/connect">
          Connect with us &rarr;
        </v-link>
      </div>
    </v-grid-layout>
  </div>
</template>

<script>
import VGridLayout from "~/components/VGridLayout.vue"
import VProjectCard from "~/components/VProjectCard.vue"
import VPersonCardMedium from "~/components/VPersonCardMedium.vue"
import VConnectCard from "~/components/VConnectCard.vue"
import VLink from "~/components/VLink.vue"
import VConnectButtonArtMail from "~/components/VConnectButtonArtMail.vue"
import VConnectButtonArtGitHub from "~/components/VConnectButtonArtGitHub.vue"
import VConnectButtonArtBtc from "~/components/VConnectButtonArtBtc.vue"
import Directus from "~/directus"

//  Recursive function to pick 3 different random people.
const selectPeople = (people, numberToSelect) => {
  if (numberToSelect === 0) return []
  const randIndex = Math.floor(Math.random() * people.length)
  const selected = people.splice(randIndex, 1)[0]
  return [selected, ...selectPeople(people, numberToSelect - 1)]
}

export default {
  async asyncData({ params }) {
    let data = await Directus()
    let peopleData = data[0]
    let projectData = data[1]
    return {
      people: peopleData.people,
      projects: projectData.projects
    }
  },
  components: {
    VGridLayout,
    VProjectCard,
    VConnectCard,
    VPersonCardMedium,
    VLink,
    VConnectButtonArtMail,
    VConnectButtonArtGitHub,
    VConnectButtonArtBtc
  },
  data: () => ({
    people: [],
    projects: []
  }),
  mounted() {
    this.people = selectPeople(this.people, 3)
  }
}
</script>

<style scoped lang="scss">
@import "~assets/styles/vars";

#projectSection,
#peopleSection,
#connectSection {
  &:before {
    content: attr(section);
    font-family: SpaceMono;
    color: white;
    font-size: 19.5vw;
    line-height: 1;
    position: absolute;
    width: 50vw;
    text-align: right;
    word-break: break-word;
    bottom: 20px;
    right: 0;
  }
  > * {
    z-index: 1;
  }
}

#landSection {
  min-height: 40vh;
}

.logo {
  width: 80%;
  margin: auto;
}

div.project {
  width: auto;
}

#connectSection:before {
  left: 0;
  text-align: left;
}

.linkPulledRight {
  justify-self: end;
  align-self: end;
}

.connectText {
  grid-column-start: 1;
  grid-row: 1 / 4;
  margin-bottom: 2em;
}

#connectSection .linkPulledRight {
  justify-self: start;
  grid-row-start: 3;
  grid-column-start: 1;
}

@media screen and (min-width: $tablet) {
  .project:not(:nth-child(4)),
  .person:not(:nth-child(4)) {
    margin-top: 5.96em;
  }
  .project:nth-child(4),
  .person:nth-child(4) {
    grid-column-start: 3;
  }

  .connectText {
    grid-row: 2 / 3;
    margin-bottom: 0;
    p {
      margin: 0;
    }
  }

  .connectCard {
    grid-column-start: unset;
  }

  #connectSection .linkPulledRight {
    align-self: start;
    grid-row-start: 2;
    grid-column-start: 5;
  }
}

@media (min-width: $tablet) {
  #projectSection,
  #peopleSection,
  #connectSection {
    &:before {
      font-size: 16vw;
      width: calc(100vw - 40px);
      bottom: -20px;
    }
  }
}

@media screen and (min-width: $desktop) {
  #projectSection .project,
  #peopleSection .person {
    margin-top: 5.96em;
    grid-column-start: unset;
  }
  .connectText {
    grid-row: 1 / 3;
  }
  .connectCard {
    grid-row-start: 2;
    margin-bottom: 20px;
  }
  #connectSection .linkPulledRight {
    grid-row-start: 3;
    grid-column-start: 7;
  }
}

@media screen and (min-width: $desktopLg) {
  #connectSection,
  #peopleSection,
  #projectSection {
    &:before {
      right: 8vw;
      left: unset;
      text-align: right;
    }
  }
  #connectSection .linkPulledRight {
    grid-row-start: 3;
    grid-column-start: 9;
  }
  .connectCard {
    grid-row-start: 1;
  }
}
</style>
