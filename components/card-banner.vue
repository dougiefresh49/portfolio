<template>
    <v-layout row wrap>
        <v-flex d-flex xs12>
            <v-card :img="img" color="grey lighten-5" flat tile :height="height">
                <v-container fill-height>
                    <v-layout row wrap align-center>
                        <v-flex class="text-xs-center">
                            <h3 :class="titleColor">{{ title }}</h3>
                            <h6 :class="descColor">{{ desc }}</h6>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-card>
        </v-flex>
    </v-layout>
</template>
<style scoped>
</style>
<script>
    export default {
      name: 'card-banner',
      props: {
        img: String,
        height: {
          type: String,
          default: '400'
        },
        title: String,
        titleColor: {
          type: String,
          default: 'grey--text text--darken-1'
        },
        desc: String,
        descColor: {
          type: String,
          default: 'grey--text'
        }
      }
    }
</script>