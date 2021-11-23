<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import Navbar from '~/components/Navbar.vue'
import Footer from '~/components/Footer.vue'

export default defineComponent({
  name: 'Article',
  components: {
    Navbar,
    Footer,
  },
})
</script>
<template>
  <div class="bg-gray-100 min-h-screen flex flex-col">
    <!--    <Navbar />-->
    <Navbar />

    <main class="flex-1">
      <Nuxt />
    </main>
    <Footer />
  </div>
</template>
