<template>
<div>
  <v-parallax :src="parallaxSrc()" :height="getParallaxHeight()">
  </v-parallax>
  <v-container fluid grid-list-lg>
    <card-banner desc="dougiefresh designs" title="Dream Big. Code With Friends." height="200"></card-banner>
    <v-layout row wrap>
      <!-- Left column -->
      <v-flex d-flex xs12 sm6>
        <v-layout column>

          <!-- About -->
          <v-flex d-flex>
            <v-card img="/home/chey-doug-bridge.jpeg" flat tile height="800px" class="white--text">
              <v-card-title primary-title>
                <span class="headline">About Me</span>
                <v-spacer></v-spacer>
                <v-btn class="text-xs-right" outline color="white" nuxt to="/about">More</v-btn>
              </v-card-title>
              <!-- <v-flex d-flex xs12 sm6 md4>
                <v-card color="white" class="card--bubble" dark>
                  <v-card-text>Hi, I'm Doug!</v-card-text>
                </v-card>
              </v-flex> -->
            </v-card>
          </v-flex>

          <!-- Open Source -->
          <v-flex d-flex>
            <v-card img="/shared/lego-avengers.jpg" flat tile height="600px" class="white--text">
              <v-card-title primary-title>
                <span class="headline">Open Source</span>
                <v-spacer></v-spacer>
                <v-btn class="text-xs-right" outline color="white" nuxt to="/open-source">More</v-btn>
              </v-card-title>
            </v-card>
          </v-flex>

        </v-layout>
      </v-flex>

      <!-- Right column -->
      <v-flex d-flex xs12 sm6>
        <v-layout column>

          <!-- Portfolio -->
          <v-flex d-flex>
            <v-card img="/home/coffee-and-code.jpeg" flat tile height="600px" class="white--text">
              <v-card-title primary-title>
                <span class="headline">Portfolio</span>
                <v-spacer></v-spacer>
                <v-btn class="text-xs-right" outline color="white" nuxt to="/portfolio">More</v-btn>
              </v-card-title>
            </v-card>
          </v-flex>

          <!-- Resume -->
          <v-flex d-flex>
            <v-card img="/home/odin-codin.jpg" flat tile height="800px" class="white--text">
              <v-card-title primary-title>
                <span class="headline">Resume</span>
                <v-spacer></v-spacer>
                <v-btn class="text-xs-right" outline color="white" nuxt to="/resume">More</v-btn>
              </v-card-title>
            </v-card>
          </v-flex>
        </v-layout>

      </v-flex>

    </v-layout>
  </v-container>
</div>
</template>

<style scoped>
.btn--outline {
  float: right;
  border-width: 2px;
  border-style: solid;
  border-radius: 5px;
  font-weight: 500;
}
.card--bubble {
  padding: 10px 15px;
  font-size: 15px;
  border-radius: 10px;
  /* TODO */
  /* no boarder radius */
  /* change bubble text to color: #727276; */
}
</style>
<script>
  import CardBanner from '~/components/card-banner.vue'
  export default {
    components: {
      CardBanner
    },
    methods: {
      parallaxSrc () {
        return this.$vuetify.breakpoint.name === 'xs' ? '/home/doug-and-odin-codin-xs.png' : '/home/doug-and-odin-codin.png'
      },
      getParallaxHeight () {
        return this.$vuetify.breakpoint.name === 'xs' ? 500 : 772
      }
    }
  }
</script>
