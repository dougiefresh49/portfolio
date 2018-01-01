<template>
  <v-app light>
    <navigation></navigation>
    <nuxt/>
    <bottom-nav></bottom-nav>
  </v-app>
</template>
<script>
import navigation from '~/components/navigation'
import bottomNav from '~/components/bottom-nav'

export default{
  components: {
    navigation,
    bottomNav
  }
}
</script>

