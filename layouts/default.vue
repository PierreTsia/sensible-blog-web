<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import Footer from '~/components/Footer.vue'

export default defineComponent({
  name: 'default',
  components: {
    Footer,
  },
})
</script>
<template>
  <div class="bg-gray-200 min-h-screen">
    <!--    <Navbar />-->
    <main class="">
      <Nuxt />
    </main>
    <Footer />
  </div>
</template>
