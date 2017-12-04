<template>
    <div>
        <v-parallax src="/starbucks-and-laptop.JPG"></v-parallax>
        <v-container fluid grid-list-xl class="bkg-white">
            <!-- Contributions Graph -->
            <v-layout row wrap>
                <v-flex d-flex xs12>
                    <v-card flat tile class="text-sm-center pa-5">
                        <img src="https://ghchart.rshah.org/dougiefresh49" alt="contributions">
                        <v-layout column align-center justify-center>
                            <h4 class="grey--text mb-0">GitHub Contributions</h4>
                        </v-layout>
                    </v-card>
                </v-flex>
            </v-layout>

            <!-- Repositories -->
            <v-layout row wrap>
                <v-flex d-flex xs12 sm6>
                    <v-card color="grey lighten-5" flat tile height="400px">
                        <v-layout column align-center justify-center class="text-xs-center pa-xl">
                            <h3 class="grey--text text--darken-1">ez changelog</h3>
                            <h6 class="grey--text">A simple and easy way to generate a CHANGELOG.md based on AngularJS's changelog.js</h6>
                            <a class="mt-2 blue--text text--darken-2"
                               target="_blank"
                               href="https://npm-stat.com/charts.html?package=ez-changelog&from=2016-01-01">
                                <h6>1,278 Total Downloads</h6>
                            </a>
                            <v-btn outline color="grey darken-1" class="mt-5"
                                   target="_blank"
                                   href="https://github.com/dougiefresh49/ez-changelog">View Repo</v-btn>
                        </v-layout>
                    </v-card>
                </v-flex>
                <v-flex d-flex xs12 sm6>
                    <v-card color="blue-grey darken-3" flat tile height="400px" class="white--text">
                        <v-layout column align-center justify-center class="text-xs-center pa-xl">
                            <h3 class="white--text">gulp material docs</h3>
                            <h6 class="grey--text text--lighten-3">A gulp plugin to create Material Design inspired documentation for AngularJS applications</h6>
                            <a class="mt-2 blue--text text--darken-2"
                               target="_blank"
                               href="https://npm-stat.com/charts.html?package=gulp-material-docs&from=2016-01-01">
                                <h6>2,044 Total Downloads</h6>
                            </a>
                            <v-btn outline color="white" class="mt-5"
                                   target="_blank"
                                   href="https://github.com/dougiefresh49/gulp-material-docs">View Repo</v-btn>
                        </v-layout>
                    </v-card>
                </v-flex>
                <v-flex d-flex xs12 sm6>
                    <v-card color="blue-grey lighten-1" flat tile height="400px" class="white--text">
                        <v-layout column align-center justify-center class="text-xs-center pa-xl">
                            <h3 class="white--text">project euler</h3>
                            <h6 class="grey--text text--lighten-3">A collection of my solutions in JavaScript to Project Euler's problems</h6>
                            <a class="mt-2 blue--text text--darken-2"
                               target="_blank"
                               href="https://npm-stat.com/charts.html?package=project-euler&from=2016-01-01">
                                <h6>1,558 Total Downloads</h6>
                            </a>
                            <v-btn outline color="white" class="mt-5"
                                   target="_blank"
                                   href="https://github.com/dougiefresh49/project-euler">View Repo</v-btn>
                        </v-layout>
                    </v-card>
                </v-flex>
                <v-flex d-flex xs12 sm6>
                    <v-card color="grey lighten-5" flat tile height="400px">
                        <v-layout column align-center justify-center class="text-xs-center pa-xl">
                            <h3 class="grey--text text--darken-1">chrome pull request template</h3>
                            <h6 class="grey--text">Chrome extension to pre-populate pull requests with a template on GitHub and Bitbucket.</h6>
                            <a class="mt-2 blue--text text--darken-2"
                               target="_blank"
                               href="https://chrome.google.com/webstore/detail/git-pull-request-template/dlflgkjacacpmhdpiggkdiaieddfmkia?hl=en-US">
                                <h6>Download</h6>
                            </a>
                            <v-btn outline color="grey darken-1" class="mt-5"
                                   target="_blank"
                                   href="https://github.com/dougiefresh49/chrome-pullrequest-templates">View Repo</v-btn>
                        </v-layout>
                    </v-card>
                </v-flex>
            </v-layout>

            <v-layout row wrap>
                <v-flex d-flex xs12>
                    <v-card flat tile class="text-sm-center pa-5">
                        <v-layout column align-center justify-center>
                            <h4 class="grey--text mb-0">See my full contribution list and repos on GitHub</h4>
                            <v-btn outline color="grey darken-1" class="mt-5"
                                   target="_blank"
                                   href="https://github.com/dougiefresh49/">View All</v-btn>
                        </v-layout>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>
<style scoped>
.pa-xl {
    padding: 96px 25px;
}
.btn--outline {
    float: right;
    border-width: 2px;
    border-style: solid;
    border-radius: 5px;
    font-weight: 500;
}
</style>
