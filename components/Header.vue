<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api'
import { strapiBaseUri } from '~/nuxt.config'

export default defineComponent({
  name: 'Header',
  components: {},
  props: {
    cover: {
      type: String,
      default: 'https://picsum.photos/id/237/200/300',
    },
    title: {
      type: String,
      default: 'Nuxt.js',
    },
    subtitle: {
      type: String,
      default: 'A Nuxt.js project',
    },
  },
  setup(props) {
    const coverUrl = computed(() => `${props.cover}`)

    return {
      coverUrl,
    }
  },
})
</script>
<template>
  <div class="bg-gray-200 font-sans leading-normal tracking-normal">
    <!--Header-->
    <div
      class="w-full m-0 p-0 bg-cover bg-bottom"
      :style="{
        'background-image': `url('${coverUrl}')`,
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
          {{ title }}
        </p>
        <p class="text-xl md:text-2xl text-gray-500">{{ subtitle }}</p>
      </div>
    </div>

    <!--Container-->
  </div>
</template>
