<template>
    <v-layout column v-if="cards">
        <v-flex d-flex v-for="img in cards" :key="img">
            <v-card :img="img" flat tile :height="getImageHeight(img)"></v-card>
        </v-flex>
    </v-layout>
</template>
<style scoped>
</style>
<script>
    export default {
      name: 'card-column',
      props: {
        cards: {
          type: Array,
          default: []
        }
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
        }
      }
    }
</script>