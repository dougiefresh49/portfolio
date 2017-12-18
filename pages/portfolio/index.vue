<template>
    <div>
        <v-parallax src="/odin-napping-on-the-job.png"></v-parallax>
        <v-container fluid grid-list-xl class="bkg-white">
            <!-- Icon Selectors -->
            <v-layout row wrap>
                <v-flex d-flex xs4 sm3 offset-xs1 offset-sm3>
                    <v-card flat tile
                            class="text-sm-center icon-card grey--text"
                            :class="{'active': projectsInView === FidelityProjects}">
                        <v-layout column align-center>
                            <div class="icon-card-body" v-on:click="projectsInView = FidelityProjects">
                                <v-card-media src="/fid-logo.jpeg" class="icon-img" height="120px"></v-card-media>
                                <h6 class="grey--text mt-3">Fidelity</h6>
                            </div>
                        </v-layout>
                    </v-card>
                </v-flex>
                <v-flex d-flex xs4 sm3 offset-sm1>
                    <v-card flat tile
                            class="text-sm-center icon-card grey--text"
                            :class="{'active': projectsInView === FreelanceProjects}">
                        <v-layout column align-center>
                            <div class="icon-card-body" v-on:click="projectsInView = FreelanceProjects">
                                <div class="blue-grey darken-3 icon-img-circle align-center">
                                    <h2 class="white--text mb-0 pa-4">DF</h2>
                                </div>
                                <h6 class="grey--text mt-3">Freelancing</h6>
                            </div>
                        </v-layout>
                    </v-card>
                </v-flex>
            </v-layout>
            <info-card-cluster :cards="projectsInView"></info-card-cluster>
        </v-container>
    </div>
</template>
<style scoped>
    .icon-img {
        width: 120px;
    }
    .icon-img-circle {
        width: 120px;
        height: 120px;
        border-radius: 50%;
    }
    .icon-card-body:hover {
        cursor: pointer;
    }
    .icon-card.active {
        border-bottom: 1px solid;
    }
</style>
<script>
  import InfoCardCluster from '~/components/info-card-cluster'
  import {FidelityProjects, FreelanceProjects} from './projects'

  export default {
    data () {
      let projectsInView = FidelityProjects

      return {
        FidelityProjects,
        FreelanceProjects,
        projectsInView
      }
    },
    components: {
      InfoCardCluster
    }
  }
</script>