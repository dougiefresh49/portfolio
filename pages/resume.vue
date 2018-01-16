<template>
    <div>
        <v-parallax src="/starbucks-and-laptop.JPG"></v-parallax>
        <v-container fluid grid-list-xl class="bkg-white">
            <v-layout column align-center justify-center class="mb-5">
                <card-banner title="this page is still in the works"
                             desc="Click the link to view my resume in raw PDF form"
                             color="white"
                             height="200">
                </card-banner>
                <v-btn outline color="grey darken-1" class="mb-5"
                       target="_blank"
                       href="/resume.pdf">View Resume</v-btn>
            </v-layout>
        </v-container>
    </div>
</template>
<style scoped>
</style>
<script>
  import CardBanner from '~/components/card-banner.vue'
  export default {
    components: {
      CardBanner
    }
  }
</script>