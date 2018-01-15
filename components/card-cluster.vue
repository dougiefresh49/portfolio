<template>
    <div>
        <div v-for="(card, index) in cards" :key="card.title">
            <card-banner v-if="card.banner"
                         :img="card.banner.img"
                         :height="card.banner.height"
                         :text="card.banner.text"
                         :text-color="card.banner.textColor">
            </card-banner>
            <v-container fluid grid-list-xl class="bkg-white">
                <v-layout row wrap>
                    <v-flex d-flex xs12 sm6 v-if="card.images && doShowImageFirst(index)">
                        <v-layout column>
                            <v-flex d-flex v-for="img in card.images" :key="img">
                                <v-card :img="img" flat tile :height="getImageHeight(img)"></v-card>
                            </v-flex>
                        </v-layout>
                    </v-flex>
                    <v-flex d-flex xs12 sm6>
                        <info-card :title="card.title"
                                   :desc="card.desc"
                                   :details="card.details"
                                   :icons="card.icons"
                                   :readMore="card.readMore"
                                   :btn="card.button">
                        </info-card>
                    </v-flex>
                    <v-flex d-flex xs12 sm6 v-if="card.images && doShowImageSecond(index)">
                        <v-layout column>
                            <v-flex d-flex v-for="img in card.images" :key="img">
                                <v-card :img="img" flat tile :height="getImageHeight(img)"></v-card>
                            </v-flex>
                        </v-layout>
                    </v-flex>
                </v-layout>
            </v-container>
        </div>
    </div>
</template>
<script>
  import CardBanner from '~/components/card-banner.vue'
  import FloatingIcon from '~/components/floating-icon.vue'
  import InfoCard from '~/components/detailed-card.vue'
  export default {
    props: {
      cards: {
        type: Array,
        default: []
      }
    },
    components: {
      CardBanner,
      FloatingIcon,
      InfoCard
    },
    methods: {
      getImageHeight (cardImg) {
        if (!cardImg) {
          return 'auto'
        }
        switch (this.$vuetify.breakpoint.name) {
          case 'xs':
            return '500px'
          case 'sm':
          case 'md':
          case 'lg':
          case 'xl':
            return 'auto'
        }
      },
      doShowImageFirst (idx) {
        return (idx % 2 === 0 || this.$vuetify.breakpoint.name === 'xs')
      },
      doShowImageSecond (idx) {
        return (idx % 2 === 1 && this.$vuetify.breakpoint.name !== 'xs')
      }
    }
  }
</script>