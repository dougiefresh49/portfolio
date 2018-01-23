<template>
    <div>
        <v-parallax class="mt-5" :src="'/about/loki-doorway' + imageExtension"></v-parallax>
        <v-container fluid grid-list-xl class="bkg-white">
            <!-- Icons -->
            <v-layout row>
                <v-flex d-flex xs5 sm3>
                    <v-card flat tile
                            class="text-sm-center icon-card grey--text"
                            :class="{'active': clustersInView === AboutMeClusters}">
                        <v-layout column align-center>
                            <div class="icon-card-body" v-on:click="changeView(AboutMeClusters)">
                                <v-card-media :src="'/about/doug-snow' + imageExtension"
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
                            <div class="icon-card-body" v-on:click="changeView(AboutFamilyClusters)">
                                <v-card-media :src="'/about/doug-chey-river-sm' + imageExtension"
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
                            :class="{'active': clustersInView === AboutDogsClusters}">
                        <v-layout column align-center>
                            <div class="icon-card-body" v-on:click="changeView(AboutDogsClusters)">
                                <v-card-media :src="'/about/all-dogs' + imageExtension"
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
                            :class="{'active': clustersInView === AboutFunClusters}">
                        <v-layout column align-center>
                            <div class="icon-card-body" v-on:click="changeView(AboutFunClusters)">
                                <v-card-media :src="'/about/star-wars-controller' + imageExtension"
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
  import { mapState, mapMutations } from 'vuex'

  export default {
    components: {
      CardBanner,
      InfoCard,
      CardCluster
    },
    beforeMount () {
      this.$store.dispatch('LOAD', {
        windowSelf: window,
        key: 'about',
        updateImageCardExt: true,
        updateNavCardExt: false
      })
    },
    mounted () {
      this.$store.commit('about/updateClustersInView')
    },
    computed: {
      ...mapState({
        isWebpSupported: state => state.isWebpSupported,
        imageExtension: state => state.imageExtension,
        AboutMeClusters: state => state.about.AboutMeClusters,
        AboutFamilyClusters: state => state.about.AboutFamilyClusters,
        AboutDogsClusters: state => state.about.AboutDogsClusters,
        AboutFunClusters: state => state.about.AboutFunClusters,
        clustersInView: state => state.about.clustersInView
      })
    },
    methods: {
      ...mapMutations({
        changeView: 'about/updateClustersInView'
      })
    }
  }
</script>