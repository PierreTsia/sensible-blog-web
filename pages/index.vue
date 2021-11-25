<script lang="ts">
import {
  defineComponent,
  useContext,
  useAsync,
  computed,
} from '@nuxtjs/composition-api'
import ArticleCard from '~/components/ArticleCard.vue'
import Header from '~/components/Header.vue'
import HomeNav from '~/components/HomeNav.vue'
import FeaturedArticle from '~/components/FeaturedArticle.vue'

export default defineComponent({
  name: 'Home',
  components: {
    Header,
    ArticleCard,
    HomeNav,
    FeaturedArticle,
  },
  setup() {
    const { $strapi } = useContext()

    const articles = useAsync(() => $strapi.find('articles'))
    const home = useAsync(() => $strapi.find('home-page'))

    const coverUrl = computed(() => home.value?.hero_cover?.[0]?.url ?? '')
    const title = computed(() => home.value?.hero_title ?? '')
    const subtitle = computed(() => home.value?.hero_subtitle ?? '')

    const colSize = (index: number) => {
      switch (index) {
        case 0:
          return 'md:col-span-4'
        case 1:
          return 'md:col-span-8'
        case 2:
          return 'md:col-span-8'
        case 3:
          return 'md:col-span-4'
        default:
          return 'md:col-span-6'
      }
    }

    return { articles, colSize, coverUrl, title, subtitle }
  },
})
</script>

<template>
  <div class="">
    <Header :cover="coverUrl" :title="title" :subtitle="subtitle" />
    <div class="container px-4 md:px-0 max-w-6xl mx-auto -mt-32">
      <div class="mx-0 sm:mx-6">
        <!--Nav-->
        <HomeNav />

        <div
          v-if="articles.length"
          class="
            bg-gray-200
            w-full
            text-xl
            md:text-2xl
            text-gray-800
            leading-normal
            rounded-t
          "
        >
          <nuxt-link :to="{ path: `articles/${articles[0].id}` }">
            <FeaturedArticle :article="articles[0]" />
          </nuxt-link>

          <div class="grid gap-2 gap-y-0 grid-cols-12 pt-12 -mx-6">
            <div
              v-for="(article, i) in articles.slice(1)"
              :key="article.id"
              class="col-span-12"
              :class="colSize(i)"
            >
              <nuxt-link :to="{ path: `articles/${article.id}` }">
                <ArticleCard :article="article" />
              </nuxt-link>
            </div>
          </div>
          <!--/ Post Content-->
        </div>

        <!--Subscribe-->
        <div
          class="
            container
            font-sans
            bg-green-100
            rounded
            mt-8
            p-4
            md:p-24
            text-center
          "
        >
          <h2 class="font-bold break-normal text-2xl md:text-4xl">
            Subscribe to Ghostwind CSS
          </h2>
          <h3
            class="
              font-bold
              break-normal
              font-normal
              text-gray-600 text-base
              md:text-xl
            "
          >
            Get the latest posts delivered right to your inbox
          </h3>
          <div class="w-full text-center pt-4">
            <form action="#">
              <div
                class="max-w-xl mx-auto p-1 pr-0 flex flex-wrap items-center"
              >
                <input
                  type="email"
                  placeholder="youremail@example.com"
                  class="
                    flex-1
                    appearance-none
                    rounded
                    shadow
                    p-3
                    text-gray-600
                    mr-2
                    focus:outline-none
                  "
                />
                <button
                  type="submit"
                  class="
                    flex-1
                    mt-4
                    md:mt-0
                    block
                    md:inline-block
                    appearance-none
                    bg-green-500
                    text-white text-base
                    font-semibold
                    tracking-wider
                    uppercase
                    py-4
                    rounded
                    shadow
                    hover:bg-green-400
                  "
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
        <!-- /Subscribe-->

        <!--Author-->
        <div class="flex w-full items-center font-sans p-8 md:p-24">
          <img
            class="w-10 h-10 rounded-full mr-4"
            src="http://i.pravatar.cc/300"
            alt="Avatar of Author"
          />
          <div class="flex-1">
            <p class="text-base font-bold text-base md:text-xl leading-none">
              Ghostwind CSS
            </p>
            <p class="text-gray-600 text-xs md:text-base">
              Tailwind CSS version of Ghost's Casper theme by
              <a
                class="
                  text-gray-800
                  hover:text-green-500
                  no-underline
                  border-b-2 border-green-500
                "
                href="https://www.tailwindtoolbox.com"
                >TailwindToolbox.com</a
              >
            </p>
          </div>
          <div class="justify-end">
            <button
              class="
                bg-transparent
                border border-gray-500
                hover:border-green-500
                text-xs text-gray-500
                hover:text-green-500
                font-bold
                py-2
                px-4
                rounded-full
              "
            >
              Read More
            </button>
          </div>
        </div>
        <!--/Author-->
      </div>
    </div>
    <!--    <div class="border border-2 flex flex-col md:flex-row items-center mb-4">
      <div
        v-for="article in articles"
        :key="article.id"
        class="w-full flex flex-col"
      >
        <ArticleCard class="w-full" />
      </div>
      <aside class="w-full md:w-1/3">
        <div class="p-2 flex flex-col items-center">
          <img
            class="w-full object-cover object-center mb-2"
            src="https://kuyou.id/content/images/ctc_2020021605150668915.jpg"
            alt="avatar"
          />
          <h2 class="py-2 text-gray-800 text-lg">About me</h2>
          <p class="py-2">
            23 year old Swedish/Moroccan girl (born and raised in Stockholm)
            with a huge love for friends, family, fashion & travel. Blogger,
            model, influencer, designer, tv host, entrepreneur.
          </p>
        </div>
      </aside>
    </div>-->
  </div>
</template>
