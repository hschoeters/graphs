<template>
  <v-app>
    <v-app-bar
      app
      light
    >
    </v-app-bar>
    <v-main>
      <p>Main</p>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

  @Component
export default class App extends Vue {}
</script>
