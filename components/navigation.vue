<template>
    <v-toolbar light fixed dense prominent v-bind:extended="false">
        <v-toolbar-title><nuxt-link class="grey--text" to="/">DF</nuxt-link></v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-xs-only">
            <v-btn flat :ripple="false" nuxt href="/portfolio">Portfolio</v-btn>
            <v-btn flat :ripple="false" nuxt href="/open-source">Open Source</v-btn>
            <v-btn flat :ripple="false" nuxt href="/resume">Resume</v-btn>
            <v-btn flat :ripple="false" nuxt href="/about">About</v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>