<template>
    <div>
        <v-layout row wrap v-for="(card, index) in cards" :key="card.title">
            <v-flex d-flex xs12 sm6 v-if="index % 2 === 1">
                <v-card :img="card.img" flat tile></v-card>
            </v-flex>
            <info-card :title="card.title"
                       :desc="card.desc"
                       :subtitle="'Contributions'"
                       :details="card.details"
                       :icons="card.icons"
                       :readMore="card.readMore"
                       :btn="card.button">
            </info-card>
            <v-flex d-flex xs12 sm6 v-if="index % 2 === 0">
                <v-card :img="card.img" flat tile></v-card>
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
    }
  }
</script>