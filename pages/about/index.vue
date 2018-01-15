<template>
    <div>
        <v-parallax class="mt-5" src="/loki-doorway-copy.jpg"></v-parallax>
        <v-container fluid grid-list-xl class="bkg-white">
            <!-- Icons -->
            <v-layout row>
                <v-flex d-flex xs5 sm3>
                    <v-card flat tile
                            class="text-sm-center icon-card grey--text"
                            :class="{'active': clustersInView === AboutMeClusters}">
                        <v-layout column align-center>
                            <div class="icon-card-body" v-on:click="clustersInView = AboutMeClusters">
                                <v-card-media src="/doug-snow.JPG"
                                              class="icon-img-circle"
                                              :class="{'small': $vuetify.breakpoint.xsOnly}"
                                              :height="($vuetify.breakpoint.xsOnly) ? '60px' : '120px'">
                                </v-card-media>
                                <h6 class="grey--text mt-3">Me</h6>
                            </div>
                        </v-layout>
                    </v-card>
                </v-flex>
                <v-flex d-flex xs5 sm3>
                    <v-card flat tile
                            class="text-sm-center icon-card grey--text"
                            :class="{'active': clustersInView === AboutFamilyClusters}">
                        <v-layout column align-center>
                            <div class="icon-card-body" v-on:click="clustersInView = AboutFamilyClusters">
                                <v-card-media src="/doug-chey-river-sm.jpg"
                                              class="icon-img-circle"
                                              :class="{'small': $vuetify.breakpoint.xsOnly}"
                                              :height="($vuetify.breakpoint.xsOnly) ? '60px' : '120px'">
                                </v-card-media>
                                <h6 class="grey--text mt-3">Family</h6>
                            </div>
                        </v-layout>
                    </v-card>
                </v-flex>
                <v-flex d-flex xs5 sm3>
                    <v-card flat tile
                            class="text-sm-center icon-card grey--text"
                            :class="{'active': clustersInView === AboutDogsCards}">
                        <v-layout column align-center>
                            <div class="icon-card-body" v-on:click="clustersInView = AboutDogsCards">
                                <v-card-media src="/all-dogs.png"
                                              class="icon-img-circle"
                                              :class="{'small': $vuetify.breakpoint.xsOnly}"
                                              :height="($vuetify.breakpoint.xsOnly) ? '60px' : '120px'">
                                </v-card-media>
                                <h6 class="grey--text mt-3">Dogs</h6>
                            </div>
                        </v-layout>
                    </v-card>
                </v-flex>
                <v-flex d-flex xs5 sm3>
                    <v-card flat tile
                            class="text-sm-center icon-card grey--text"
                            :class="{'active': clustersInView === AboutFunCards}">
                        <v-layout column align-center>
                            <div class="icon-card-body" v-on:click="clustersInView = AboutFunCards">
                                <v-card-media src="/star-wars-controller.jpg"
                                              class="icon-img-circle"
                                              :class="{'small': $vuetify.breakpoint.xsOnly}"
                                              :height="($vuetify.breakpoint.xsOnly) ? '60px' : '120px'">
                                </v-card-media>
                                <h6 class="grey--text mt-3">Fun</h6>
                            </div>
                        </v-layout>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
        <card-cluster v-for="(cluster, idx) in clustersInView" :key="cluster.textCard.title"
                      :cluster="cluster"
                      :index="idx">
        </card-cluster>
    </div>
</template>
<style scoped>
    .icon-img {
        width: 120px;
        height: 120px;
    }
    .icon-img-circle {
        width: 120px;
        height: 120px;
        border-radius: 50%;
    }
    /* todo: make small size work */
    .icon-img.small,
    .icon-img-circle.small {
        width: 60px;
        height: 60px;
    }
    .icon-card-body:hover {
        cursor: pointer;
    }
    .icon-card {
        text-align: center;
    }
    .icon-card.active {
        border-bottom: 1px solid;
    }
    .section-banner--text {
        font-weight: 600 !important;
    }
</style>
<script>
  import CardBanner from '~/components/card-banner.vue'
  import InfoCard from '~/components/detailed-card.vue'
  import CardCluster from '~/components/card-cluster.vue'
  import {AboutMeClusters, AboutFamilyClusters, AboutDogsCards, AboutFunCards} from './data'
  export default {
    components: {
      CardBanner,
      InfoCard,
      CardCluster
    },
    data () {
      // let clustersInView = AboutMeClusters
      let clustersInView = AboutFamilyClusters
      return {
        AboutMeClusters,
        AboutFamilyClusters,
        AboutDogsCards,
        AboutFunCards,
        clustersInView
      }
    }
  }
</script>