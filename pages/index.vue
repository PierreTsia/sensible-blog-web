<template>
  <pre>{{ articles }}</pre>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      articles: [],
    }
  },
  async mounted() {
    await this.test()
  },
  methods: {
    async test() {
      try {
        this.articles = await this.$strapi.find('articles')
      } catch (error) {
        console.error(error)
      }
    },
  },
})
</script>
