<script lang="ts">
import {
  defineComponent,
  useContext,
  useRoute,
  useAsync,
  computed,
  ref,
  Ref,
  onBeforeMount,
} from '@nuxtjs/composition-api'

import format from 'date-fns/format'
import { fr } from 'date-fns/locale'

import { strapiBaseUri } from '~/nuxt.config'

export default defineComponent({
  name: 'article-page',
  layout: 'article',
  setup() {
    const { $strapi } = useContext()
    const route = useRoute()

    onBeforeMount(async () => {
      article.value = await $strapi.findOne('articles', route.value.params.id)
    })

    const article: Ref<any> = ref(null)

    const creationDate = computed(() =>
      article.value?.created_at
        ? format(new Date(article.value.created_at), 'PP', { locale: fr })
        : ''
    )

    const bgImage = computed(
      () =>
        ` ${strapiBaseUri}${article.value?.coverImg?.url}` ||
        'https://source.unsplash.com/random'
    )

    const authorName = computed(() =>
      article.value?.author
        ? `${article.value.author.firstName} ${article.value.author.lastName}`
        : ''
    )

    return {
      article,
      creationDate,
      bgImage,
      authorName,
    }
  },
})
</script>

<template>
  <div>
    <template v-if="article">
      <div class="text-center pt-16 md:pt-32">
        <p class="text-sm md:text-base text-green-500 font-bold uppercase">
          {{ creationDate }}
          <span class="text-gray-900"> / </span>
          {{ authorName }}
        </p>
        <h1 class="font-bold font-sans break-normal text-3xl md:text-5xl">
          {{ article.title }}
        </h1>
      </div>
      <div
        class="
          container
          w-full
          max-w-6xl
          mx-auto
          bg-white bg-cover
          mt-8
          rounded
        "
        :style="{
          backgroundImage: `url('${bgImage}')`,
          height: '75vh',
        }"
      />
      <div class="container max-w-5xl mx-auto -mt-32">
        <div
          class="
            text-gray-800
            bg-white
            w-full
            p-8
            md:p-24
            text-xl
            md:text-2xl
            leading-normal
          "
        >
          <p class="text-3xl mb-5">
            {{ article.description }}
          </p>
          <div
            v-html="$md.render(article.content)"
            class="markdown font-sans text-md"
          />
        </div>
      </div>
    </template>
  </div>
</template>

<style>
.markdown > p {
  @apply mt-6;
}

.markdown > h2 {
  @apply my-4 font-bold text-2xl;
}

.markdown > ul {
  @apply pl-10 my-4;
}

.markdown > ul > li {
  @apply list-disc;
}
</style>
