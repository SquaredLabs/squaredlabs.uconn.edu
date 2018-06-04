<template>
  <div>
    <p>
      <span 
        v-for="line in parsedHTML" 
        :key="line.number">
        <span v-html="line.content"/>
        <SLink 
          v-if="line.href" 
          :href="line.href">
          {{ line.linkText }}
        </SLink>
      </span>
    </p>
  </div>
</template>

<script>
import SLink from "./Link.vue"
export default {
  components: {
    SLink
  },
  props: {
    rawhtml: { type: String, required: true }
  },
  computed: {
    parsedHTML: function() {
      let html = this.rawHTML.replace("</p>", "").replace("<p>", "")
      let parsedHTML = []
      let split = html.split("</a>")
      if (split.length === 1)
        return [{ number: 0, content: html, linkText: null, href: null }]
      let last = split.pop() // Remove last html element, add it at the end
      split.forEach((line, index) => {
        let content = line.split("<a")[0]
        // Remove spaces from link HTML, split tags
        // href="link.com" target="_blank" >text<
        let link = line
          .split("<a")[1]
          .split(" ")
          .join("")
        let href = link.split("href='")[1].split("'")[0]
        let linkText = link.split(">")[1]
        let lineObj = {
          number: index,
          content: content,
          linkText: linkText,
          href: href
        }
        parsedHTML.push(lineObj)
      })
      parsedHTML.push(last)
      return parsedHTML
    }
  }
}
</script>
