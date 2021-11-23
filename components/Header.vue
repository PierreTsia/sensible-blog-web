<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'Header',
  components: {},
})
</script>
<template>
  <div class="bg-gray-200 font-sans leading-normal tracking-normal">
    <!--Header-->
    <div
      class="w-full m-0 p-0 bg-cover bg-bottom"
      :style="{
        'background-image': `url(${require('@/static/cover.jpg')})`,
      }"
      style="height: 80vh; max-height: 460px"
    >
      <div
        class="
          container
          max-w-4xl
          mx-auto
          pt-16
          md:pt-32
          text-center
          break-normal
        "
      >
        <!--Title-->
        <p class="text-white font-extrabold text-3xl md:text-5xl">
          👻 Sensible Blog
        </p>
        <p class="text-xl md:text-2xl text-gray-500">Welcome to my Blog</p>
      </div>
    </div>

    <!--Container-->
  </div>
</template>
