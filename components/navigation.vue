<template>
    <div>
        <v-toolbar light fixed dense prominent v-bind:extended="false">
            <v-toolbar-title><nuxt-link class="grey--text" to="/">DF designs</nuxt-link></v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn flat small color="grey" :ripple="false" class="hidden-md-and-up" v-on:click="drawer = !drawer">
                <v-icon>fa-bars</v-icon>
            </v-btn>
            <v-toolbar-items class="hidden-sm-and-down">
                <v-btn flat :ripple="false" nuxt href="/portfolio">Portfolio</v-btn>
                <v-btn flat :ripple="false" nuxt href="/open-source">Open Source</v-btn>
                <v-btn flat :ripple="false" nuxt href="/resume">Resume</v-btn>
                <v-btn flat :ripple="false" nuxt href="/about">About</v-btn>
            </v-toolbar-items>
        </v-toolbar>
        <v-navigation-drawer temporary v-model="drawer" light absolute right>
            <v-list>
                <v-list-tile to="/">
                    <v-list-tile-title class="title">
                        DF designs
                      </v-list-tile-title>
                </v-list-tile>
            </v-list>
            <v-divider></v-divider>
            <v-list>
                <v-list-tile v-for="item in items" :key="item.title" :to="item.to">
                    <v-list-tile-action>
                        <v-icon dark>{{ item.icon }}</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
    </div>
</template>
<script>
  export default {
    name: 'navigation',
    data () {
      return {
        drawer: null,
        items: [
          { title: 'Portfolio', icon: 'fa-id-card', to: '/portfolio' },
          { title: 'Open Source', icon: 'fa-github', to: '/open-source' },
          { title: 'Resume', icon: 'fa-pencil-square-o', to: '/resume' },
          { title: 'About', icon: 'fa-info-circle', to: '/about' }
        ]
      }
    }
  }
</script>