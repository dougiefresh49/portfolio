<template>
    <div v-if="cluster">
        <card-banner v-if="cluster.banner"
                     :img="cluster.banner.img"
                     :height="cluster.banner.height"
                     :text="cluster.banner.text"
                     :text-color="cluster.banner.textColor">
        </card-banner>
        <v-container fluid grid-list-xl class="bkg-white">
            <v-layout row wrap>
                <v-flex d-flex xs12 sm6 v-if="cluster.imageCards && doShowImageFirst(index)">
                    <card-column v-if="cluster.imageCards.type === 'column'" :cards="cluster.imageCards.images"></card-column>
                    <card-stack v-else-if="cluster.imageCards.type === 'stack'" :cards="cluster.imageCards.images"></card-stack>
                </v-flex>
                <v-flex d-flex xs12 sm6 v-if="cluster.textCard">
                    <card-banner v-if="cluster.textCard.type === 'banner'"
                                 :height="cluster.textCard.height"
                                 :title="cluster.textCard.title"
                                 :desc="cluster.textCard.desc"
                                 :icons="cluster.textCard.icons">
                    </card-banner>
                    <detailed-card v-if="cluster.textCard.type === 'detailed'"
                                   :title="cluster.textCard.title"
                                   :desc="cluster.textCard.desc"
                                   :details="cluster.textCard.details"
                                   :icons="cluster.textCard.icons"
                                   :readMore="cluster.textCard.readMore"
                                   :btn="cluster.textCard.button">
                    </detailed-card>
                </v-flex>
                <v-flex d-flex xs12 sm6 v-if="cluster.imageCards && doShowImageSecond(index)">
                    <card-column v-if="cluster.imageCards.type === 'column'" :cards="cluster.imageCards.images"></card-column>
                    <card-stack v-else-if="cluster.imageCards.type === 'stack'" :cards="cluster.imageCards.images"></card-stack>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>
<script>
  import CardBanner from '~/components/card-banner.vue'
  import FloatingIcon from '~/components/floating-icon.vue'
  import DetailedCard from '~/components/detailed-card.vue'
  import CardStack from '~/components/card-stack.vue'
  import CardColumn from '~/components/card-column.vue'

  export default {
    name: 'card-cluster',
    props: {
      cluster: Object,
      index: Number
    },
    components: {
      CardBanner,
      CardColumn,
      CardStack,
      DetailedCard,
      FloatingIcon
    },
    methods: {
      doShowImageFirst (idx) {
        return (idx % 2 === 0 || this.$vuetify.breakpoint.name === 'xs')
      },
      doShowImageSecond (idx) {
        return (idx % 2 === 1 && this.$vuetify.breakpoint.name !== 'xs')
      }
    }
  }
</script>