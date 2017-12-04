<template>
    <v-toolbar light fixed dense prominent v-bind:extended="false">
        <v-toolbar-title class="grey--text"><nuxt-link to="/">DF</nuxt-link></v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-xs-only">
            <v-btn flat nuxt href="/portfolio">Portfolio</v-btn>
            <v-btn flat nuxt href="/open-source">Open Source</v-btn>
            <v-btn flat nuxt href="/resume">Resume</v-btn>
            <v-btn flat nuxt href="/about">About</v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>