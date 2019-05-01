<template>
  <v-project-modal :project="project" />
</template>
<script>
import Directus from "~/directus"
import VProjectModal from "~/components/VProjectModal.vue"

const getProject = (projects, name) => {
  let match = {}
  projects.forEach(project => {
    if (project.name === name) return (match = project)
  })
  return match
}

export default {
  async asyncData({ params }) {
    let data = await Directus()
    let projectData = data[1]
    let project = getProject(projectData.projects, params.project)
    return {
      project: project
    }
  },
  components: {
    VProjectModal
  },
  mounted() {
    if (!this.project.name) this.$router.push(`/projects`)
  }
}
</script>
