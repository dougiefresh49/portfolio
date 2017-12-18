<template>
    <v-flex xs3>
        <v-btn fab small :color="color" target="_blank" :href="href">
            <img class="icon--floating" :class="padding ? padding : ''" :src="img">
        </v-btn>
    </v-flex>
</template>
<style scoped>
    .icon--floating {
        text-align: center;
        width: 30px;
        height: 30px;
        border-radius: 50%;
    }
</style>
<script>
    export default {
      name: 'floating-icon',
      props: {
        color: {
          type: String,
          default: 'white'
        },
        img: String,
        href: String,
        padding: String
      }
    }
</script>
