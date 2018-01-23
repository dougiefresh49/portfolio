<template>
    <div>
        <v-parallax :src="'/portfolio/odin-napping-on-the-job' + imageExtension"></v-parallax>
        <!-- Icon Selectors -->
        <v-container fluid grid-list-xl class="bkg-white">
            <v-layout row wrap>
                <v-flex d-flex xs5 sm3 offset-xs1 offset-sm3>
                    <v-card flat tile
                            class="text-sm-center icon-card grey--text"
                            :class="{'active': clustersInView === FidelityProjectClusters}">
                        <v-layout column align-center>
                            <div class="icon-card-body" v-on:click="changeView(FidelityProjectClusters)">
                                <v-card-media :src="'/portfolio/fid-logo' + imageExtension"
                                              class="icon-img"
                                              :class="{'small': $vuetify.breakpoint.xsOnly}"
                                              :height="($vuetify.breakpoint.xsOnly) ? '60px' : '120px'">
                                </v-card-media>
                                <h6 class="grey--text mt-3">Fidelity</h6>
                            </div>
                        </v-layout>
                    </v-card>
                </v-flex>
                <v-flex d-flex xs5 sm3 offset-sm1 offset-xs1>
                    <v-card flat tile
                            class="text-sm-center icon-card grey--text"
                            :class="{'active': clustersInView === FreelanceProjectClusters}">
                        <v-layout column align-center>
                            <div class="icon-card-body" v-on:click="changeView(FreelanceProjectClusters)">
                                <div class="blue-grey darken-3 icon-img-circle align-center"
                                     :class="{'small': $vuetify.breakpoint.xsOnly}">
                                    <h2 v-if="!$vuetify.breakpoint.xsOnly" class="white--text mb-0 pa-4">DF</h2>
                                    <h5 v-if="$vuetify.breakpoint.xsOnly" class="white--text mb-0 pa-3">DF</h5>
                                </div>
                                <h6 class="grey--text mt-3">Freelancing</h6>
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
        <v-container fluid grid-list-xl class="bkg-white">
            <!--TODO: (refactor) use card banner for this -->
            <v-layout row wrap>
                <v-flex d-flex xs12>
                    <v-card flat tile class="text-sm-center pa-5">
                        <v-layout column align-center justify-center>
                            <h4 class="grey--text mb-0">See a full list of projects, awards, and skills over on my resume.</h4>
                            <v-btn outline color="grey darken-1" class="mt-5" nuxt href="/resume">View All</v-btn>
                        </v-layout>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
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
</style>
<script>
  import CardCluster from '~/components/card-cluster'
  import { mapState, mapMutations } from 'vuex'

  export default {
    components: {
      CardCluster
    },
    beforeMount () {
      this.$store.dispatch('LOAD', {windowSelf: window, key: 'portfolio'})
    },
    mounted () {
      this.$store.commit('portfolio/updateClustersInView')
    },
    computed: {
      ...mapState({
        isWebpSupported: state => state.isWebpSupported,
        imageExtension: state => state.imageExtension,
        FidelityProjectClusters: state => state.portfolio.fidelity,
        FreelanceProjectClusters: state => state.portfolio.freelance,
        clustersInView: state => state.portfolio.clustersInView
      })
    },
    methods: {
      ...mapMutations({
        changeView: 'portfolio/updateClustersInView'
      })
    }
  }
</script>