<template>
  <div
    class="project"
    @mouseover="
      $emit('hoverProject', {
        name: project.name,
        client: project.client,
        timespan: project.timespan,
        people: setRole(project)
      })
    "
  >
    <img :src="project.imageURL" :alt="project.name" class="projectPhoto" />
    <div ref="title" :class="{ twoLineTitle }" class="projectContent">
      <div>
        <p class="projectTitle">{{ project.name }}</p>
        <div class="projectDescription"><slot /></div>
      </div>
      <div class="projectLink">
        <v-link class="VLink" @click="expand"> View Project &rarr; </v-link>
      </div>
    </div>
  </div>
</template>

<script>
import VLink from "~/components/VLink"

export default {
  components: {
    VLink
  },
  props: {
    project: {
      type: Object,
      required: true
    }
  },
  data: function() {
    let twoLineTitle = this.project.name.length < 16 ? "" : "twoLineTitle"
    return {
      twoLineTitle: twoLineTitle
    }
  },
  methods: {
    expand() {
      this.$router.push(`/projects/${encodeURI(this.project.name)}`)
    },
    setRole(project) {
      if (!project.people || project.people.length === 0) return
      for (let person of project.people) {
        const projectsInRole = Object.keys(person.roles).map(role =>
          role.toLowerCase()
        )
        const projectName = project.name.toLowerCase()
        if (projectsInRole.includes(projectName))
          person.role = person.roles[project.name]
      }
      return project.people
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/styles/vars";

.project {
  --side-length: calc(50vw - 50px);
  box-sizing: border-box;
  padding: 10px;
  display: flex;
  align-items: flex-end;
  height: var(--side-length);
  width: var(--side-length);
  overflow: hidden;

  &:hover .projectContent {
    height: calc(50vw - 40px);
  }

  &:hover .projectTitle {
    color: $dodger-blue;
  }

  &:hover .projectLink {
    transform: translateY(0);
  }
}

.projectPhoto {
  max-width: 100%;
  height: 100%;
  display: inline-block;
  object-fit: cover;
}

.projectContent {
  transition: 0.25s ease;
  overflow: hidden;
  box-sizing: border-box;
  padding: 10px;
  height: 3.052em;
  display: flex;
  width: calc(var(--side-length) - 40px);
  margin-left: 10px;
  margin-bottom: 8px;
  justify-content: space-between;
  flex-flow: column nowrap;
  background-color: white;
  position: absolute;

  &.twoLineTitle {
    height: 4.768em;
  }
}

.projectTitle,
.projectDescription {
  transition: 0.3s ease;
  margin: 0 0 10px;
}

.projectTitle {
  font-size: 1em;
  line-height: 1.563;
  color: #0c120c;
}

.projectLink {
  transition: 0.35s ease;
  transform: translateY(6em);
  align-self: flex-end;
}

@media screen and (min-width: 500px) {
  .projectTitle {
    font-size: 1.563em;
    line-height: 1.25em;
  }
}

@media screen and (min-width: $tablet) {
  .project {
    --side-length: calc((100vw - 8.75em) / 3 + 1em);
    &:hover .projectContent {
      height: calc((100vw - 11.75em) / 3 - 0.25em);
    }
  }
}

@media screen and (min-width: $desktop) {
  .project {
    --side-length: calc((100vw - 11.25em) / 4 + 1em);
    &:hover .projectContent {
      height: calc((100vw - 15.25em) / 4 - 0.25em);
    }
  }
}

@media screen and (min-width: $desktopLg) {
  .project {
    --side-length: calc((100vw - 20.25em) / 5 + 1em);
    &:hover .projectContent {
      height: calc((100vw - 20.25em) / 5 - 0.25em);
    }
  }
}
</style>
