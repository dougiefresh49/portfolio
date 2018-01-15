<template>
    <v-card color="grey lighten-5" flat tile>
        <v-layout column align-center justify-center class="text-xs-center pa-xl">
            <h3 class="grey--text text--darken-1">{{ title }}</h3>
            <h6 class="grey--text">{{ desc }}</h6>
            <v-divider class="divider--small"></v-divider>
            <div v-if="details" v-for="detail in details" :key="detail.subtitle">
                <h5 class="grey--text text--darken-1 mt-4">{{ detail.subtitle }}</h5>
                <h6 v-if="detail.info" v-for="(line, index) in detail.info" :key="line" class="grey--text">
                    {{ line }}
                    <br v-if="index !== detail.info.length - 1">
                    <br v-if="index !== detail.info.length - 1 && detail.spacing === 'double'">
                </h6>
            </div>
            <nuxt-link v-if="readMore" :to="readMore" class="mt-2 blue--text text--darken-2">
                Read More
            </nuxt-link>
            <v-divider class="divider--small"></v-divider>
            <v-layout row class="mt-4" v-if="icons">
                <floating-icon v-for="icon in icons" :key="icon.img"
                               :img="icon.img"
                               :padding="icon.padding"
                               :href="icon.href">
                </floating-icon>
            </v-layout>
            <v-btn v-if="btn" outline color="grey darken-1" class="mt-4"
                   target="_blank"
                   :href="btn.href">
                {{ btn.text }}
                </v-btn>
        </v-layout>
    </v-card>
</template>
<style scoped>
    .pa-xl {
        padding: 80px 45px;
    }
    .divider--small {
        width: 30%;
        margin-top: 15px;
    }
</style>
<script>
    import FloatingIcon from '~/components/floating-icon.vue'
    export default {
      name: 'detailed-card',
      props: {
        color: {
          type: String,
          default: 'grey'
        },
        title: String,
        desc: String,
        details: Array,
        icons: Array,
        btn: {
          href: String,
          text: String
        },
        readMore: String
      },
      components: {
        FloatingIcon
      }
    }
</script>