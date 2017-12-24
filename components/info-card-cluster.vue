<template>
    <div>
        <v-layout row wrap v-for="(card, index) in cards" :key="card.title">
            <v-flex d-flex xs12 sm6 v-if="doShowImageFirst(index)">
                <v-card :img="card.img" flat tile :height="getImageHeight(card.img)"></v-card>
            </v-flex>
            <info-card :title="card.title"
                       :desc="card.desc"
                       :subtitle="'Contributions'"
                       :details="card.details"
                       :icons="card.icons"
                       :readMore="card.readMore"
                       :btn="card.button">
            </info-card>
            <v-flex d-flex xs12 sm6 v-if="doShowImageSecond(index)">
                <v-card :img="card.img" flat tile :height="getImageHeight(card.img)"></v-card>
            </v-flex>
        </v-layout>
    </div>
</template>
<script>
  import FloatingIcon from '~/components/floating-icon.vue'
  import InfoCard from '~/components/info-card.vue'
  export default {
    props: {
      cards: {
        type: Array,
        default: []
      }
    },
    components: {
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