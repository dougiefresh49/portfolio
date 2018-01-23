<template>
    <v-flex d-flex>
        <v-card :img="img" flat tile :height="getImgHeight()" class="white--text">
            <v-card-title primary-title>
                <span class="headline">{{ title }}</span>
                <v-spacer></v-spacer>
                <v-btn v-if="btn" class="text-xs-right" outline color="white" nuxt :to="btn.to">{{ btn.text }}</v-btn>
            </v-card-title>
            <!-- <v-flex d-flex xs12 sm6 md4>
                <v-card color="white" class="card--bubble" dark>
                  <v-card-text>Hi, I'm Doug!</v-card-text>
                </v-card>
              </v-flex> -->
        </v-card>
    </v-flex>
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
      name: 'navigation-card',
      props: {
        img: String,
        height: Number,
        btn: {
          to: String,
          text: String
        },
        title: String
      },
      methods: {
        getImgHeight () {
          switch (this.$vuetify.breakpoint.name) {
            case 'xs':
              return (this.height * 0.5) + 'px'
            case 'sm':
            case 'md':
            case 'lg':
            case 'xl':
              return (this.height) + 'px'
          }
        }
      }
    }
</script>