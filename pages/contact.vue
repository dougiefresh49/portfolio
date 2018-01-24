<template>
    <div>
        <v-parallax :src="photosUrl + '/shared/starbucks-and-laptop.png'"></v-parallax>
        <v-container fluid grid-list-xl class="bkg-white">
            <v-layout column align-center justify-center class="mb-5">
                <card-banner title="this page is still in the works"
                             desc="For now, hit me on the DM's"
                             color="white"
                             height="200">
                </card-banner>
                <v-btn outline color="grey darken-1" class="mb-5"
                       target="_blank"
                       href="https://www.linkedin.com/in/douglasater/">Contact Via LinkedIn</v-btn>
            </v-layout>
        </v-container>
    </div>
</template>
<style scoped>
</style>
<script>
  import CardBanner from '~/components/card-banner.vue'
  import { mapState } from 'vuex'

  export default {
    components: {
      CardBanner
    },
    computed: {
      ...mapState({
        photosUrl: state => state.config.photosUrl
      })
    }
  }
</script>