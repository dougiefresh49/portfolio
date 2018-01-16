<template>
    <v-layout row wrap>
        <v-flex d-flex xs12>
            <v-card :img="cards[cardIdxInView]" color="grey lighten-5" flat tile :height="minHeight">
                <v-container fill-height>
                    <v-layout row wrap align-center>
                        <v-flex class="text-xs-left">
                            <v-btn flat icon color="white" v-on:click="previousCard()">
                                <v-icon large>fa-angle-left</v-icon>
                            </v-btn>
                        </v-flex>
                        <v-flex class="text-xs-right">
                            <v-btn flat icon color="white" v-on:click="nextCard()">
                                <v-icon large>fa-angle-right</v-icon>
                            </v-btn>
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
      name: 'card-stack',
      props: {
        cards: {
          type: Array,
          default: []
        },
        minHeight: {
          type: String,
          default: '600'
        }
      },
      data () {
        let cardIdxInView = 0
        this.startInterval()
        return {
          cardIdxInView
        }
      },
      methods: {
        nextCard () {
          this.startInterval()
          this.cardIdxInView = (this.cardIdxInView + 1) % this.cards.length
        },
        previousCard () {
          this.startInterval()
          this.cardIdxInView = (this.cardIdxInView - 1 + this.cards.length) % this.cards.length
        },
        startInterval () {
          clearInterval(this.interval)
          this.interval = setInterval(this.nextCard, 4000)
        }
      }
    }
</script>