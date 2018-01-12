<template>
    <v-layout row wrap>
        <v-flex d-flex xs12>
            <v-card :img="img" flat tile :height="height">
                <v-container fill-height>
                    <v-layout row wrap align-center>
                        <v-flex class="text-xs-center">
                            <span class="display-1 white--text section-banner--text" :class="textColor">{{ text }}</span>
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
      props: {
        img: String,
        height: {
          type: String,
          default: '400'
        },
        text: String,
        textColor: {
          type: String,
          default: 'white--text'
        }
      }
    }
</script>