<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api'
import format from 'date-fns/format'
import { fr } from 'date-fns/locale'
export default defineComponent({
  name: 'FeaturedArticle',
  props: {
    article: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const creationDate = computed(() =>
      props?.article?.created_at
        ? format(new Date(props?.article.created_at), 'PP', { locale: fr })
        : ''
    )

    const bgImage = computed(
      () =>
        ` ${props?.article?.coverImg?.url}` ||
        'https://source.unsplash.com/random'
    )

    const authorName = computed(() =>
      props?.article?.author
        ? `${props?.article.author.firstName} ${props?.article.author.lastName}`
        : ''
    )

    return {
      creationDate,
      bgImage,
      authorName,
    }
  },
})
</script>
<template>
  <div
    class="
      flex
      h-full
      bg-white
      rounded
      overflow-hidden
      shadow-lg
      flex flex-wrap
      cursor-pointer
    "
  >
    <div class="w-full md:w-2/3 rounded-t">
      <img :src="bgImage" class="h-full w-full shadow" />
    </div>

    <div class="w-full md:w-1/3 flex flex-col flex-grow flex-shrink">
      <div
        class="
          flex-1
          bg-white
          rounded-t rounded-b-none
          overflow-hidden
          shadow-lg
        "
      >
        <p
          class="
            w-full
            text-gray-600 text-xs
            md:text-sm
            pt-6
            px-6
            mb-2
            uppercase
          "
        >
          {{ creationDate }}
        </p>
        <h2 class="w-full font-bold text-xl text-gray-900 px-6 my-4">
          👋 {{ article.title }}
        </h2>
        <p class="text-gray-800 text-base px-6 mb-5">
          {{ article.description }}
        </p>
      </div>

      <div
        class="
          flex-none
          mt-auto
          bg-white
          rounded-b rounded-t-none
          overflow-hidden
          shadow-lg
          p-6
        "
      >
        <div class="flex items-center justify-between">
          <img
            class="w-8 h-8 rounded-full mr-4 avatar"
            data-tippy-content="Author Name"
            src="http://i.pravatar.cc/300"
            alt="Avatar of Author"
          />
          <p class="text-gray-600 text-xs md:text-sm">1 MIN READ</p>
        </div>
      </div>
    </div>
  </div>
</template>
