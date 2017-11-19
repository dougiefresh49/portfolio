<template>
  <v-app light>
    <navigation></navigation>
    <nuxt/>
  </v-app>
</template>
<script>
import navigation from '~/components/navigation'
export default{
  components: {
    navigation
  }
}
</script>

