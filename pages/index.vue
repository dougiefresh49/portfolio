<template>
<div>
  <v-parallax :src="parallaxSrc()" :height="getParallaxHeight()">
  </v-parallax>
  <v-container fluid grid-list-lg>
    <card-banner desc="dougiefresh designs" title="Dream Big. Code With Friends." height="200"></card-banner>
    <v-layout row wrap>
      <v-flex v-for="n in cards.length / 2" :key="n" d-flex xs12 sm6>
        <v-layout column>
          <navigation-card v-for="(card, idx) in cards.slice(cards.length / 2 * (n - 1), cards.length / 2 * n)" :key="card.title"
                           :img="card.img"
                           :height="card.height"
                           :title="card.title"
                           :btn="card.btn">
          </navigation-card>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</div>
</template>

<style scoped>
</style>

<script>
  import CardBanner from '~/components/card-banner.vue'
  import NavigationCard from '~/components/navigation-card.vue'
  import { mapState } from 'vuex'

  export default {
    components: {
      CardBanner,
      NavigationCard
    },
    computed: {
      ...mapState({
        isWebpSupported: state => state.isWebpSupported,
        imageExtension: state => state.imageExtension,
        cards: state => state.home.cards
      })
    },
    mounted () {
      this.$store.dispatch('LOAD', {
        windowSelf: window,
        key: 'home',
        updateImageCardExt: false,
        updateNavCardExt: true
      })
    },
    methods: {
      parallaxSrc () {
        switch (this.$vuetify.breakpoint.name) {
          case 'xs':
          case 'sm':
            return '/home/doug-and-odin-codin-xs' + this.imageExtension
          case 'md':
          case 'lg':
          case 'xl':
            return '/home/doug-and-odin-codin' + this.imageExtension
        }
      },
      getParallaxHeight () {
        switch (this.$vuetify.breakpoint.name) {
          case 'xs':
          case 'sm':
            return 500
          case 'md':
          case 'lg':
          case 'xl':
            return 772
        }
      }
    }
  }
</script>
