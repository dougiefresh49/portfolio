<template>
    <v-btn fab :color="color" target="_blank" :href="href" :class="getBtnSize()">
        <img class="icon--floating" :class="padding ? padding : ''" :src="img">
    </v-btn>
</template>
<style scoped>
    .icon--floating {
        text-align: center;
        border-radius: 50%;
        width: 62px;
        height: 62px;
    }
    .btn--small .icon--floating{
        width: 30px;
        height: 30px;
    }
    .btn--medium .icon--floating{
        width: 46px;
        height: 46px;
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
      },
      methods: {
        getBtnSize () {
          switch (this.$vuetify.breakpoint.name) {
            case 'xs':
            case 'sm':
              return 'btn--small'
            case 'md': return 'btn--medium'
            case 'lg': return 'btn--large'
            case 'xl': return 'btn--xlarge'
          }
        }
      }
    }
</script>
