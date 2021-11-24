<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api'
import format from 'date-fns/format'
import { fr } from 'date-fns/locale'

export default defineComponent({
  name: 'ArticleCard',
  components: {},
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
        `${props?.article?.coverImg?.url}` ||
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
  <div>
    <div class="w-full flex-col p-6 flex flex-grow flex-shrink">
      <div class="w-full">
        <img
          :src="bgImage"
          class="max-h-72 w-full object-cover rounded-t"
          alt="article img"
        />
      </div>
      <div class="w-full">
        <div
          class="
            flex-1
            bg-white
            rounded-t rounded-b-none
            overflow-hidden
            shadow-lg
            w-full
            pt-6
          "
        >
          <p class="w-full text-gray-600 text-xs md:text-sm px-6 uppercase">
            {{ creationDate }}
          </p>
          <div class="w-full font-bold text-xl text-gray-900 px-6">
            {{ article.title }}
          </div>
          <p class="text-gray-700 text-base px-6 mt-3 line-clamp-3 max-h-32">
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
  </div>
</template>
