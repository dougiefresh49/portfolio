<template>
<div>
  <v-parallax :src="parallaxSrc()">
    <v-layout column align-center>
      <v-flex d-flex>
        <h3 class="grey--text">Dream big. Code with friends.</h3>
      </v-flex>
    </v-layout>
  </v-parallax>
  <v-container fluid grid-list-lg>
    <v-layout row wrap>
      <!-- Left column -->
      <v-flex d-flex xs12 sm6>
        <v-layout column>

          <!-- About -->
          <v-flex d-flex>
            <v-card img="/about-dt-lg.jpeg" flat tile height="800px" class="white--text">
              <v-card-title primary-title>
                <span class="headline">About Me</span>
                <v-spacer></v-spacer>
                <v-btn class="text-xs-right" outline color="white">More</v-btn>
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
            <v-card img="/lego-avengers.jpg" flat tile height="600px" class="white--text">
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
            <v-card img="/coffee-and-code-copy.jpeg" flat tile height="600px" class="white--text">
              <v-card-title primary-title>
                <span class="headline">Portfolio</span>
                <v-spacer></v-spacer>
                <v-btn class="text-xs-right" outline color="white">More</v-btn>
              </v-card-title>
            </v-card>
          </v-flex>

          <!-- Resume -->
          <v-flex d-flex>
            <v-card img="/odin-codin.jpg" flat tile height="800px" class="white--text">
              <v-card-title primary-title>
                <span class="headline">Resume</span>
                <v-spacer></v-spacer>
                <v-btn class="text-xs-right" outline color="white">More</v-btn>
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
  export default {
    methods: {
      parallaxSrc () {
        return this.$vuetify.breakpoint.name === 'xs' ? '/doug-and-odin-codin-xs.png' : '/doug-and-odin-codin.png'
      }
    }
  }
</script>
