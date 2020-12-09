<template>
    <v-app id="graphs">
      <v-navigation-drawer
        v-model="drawer"
        app
      >
        <!--  -->
      </v-navigation-drawer>
      <v-app-bar app>
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>Draw</v-toolbar-title>
      </v-app-bar>
      <v-main>
        <v-container>
          <router-view />
        </v-container>
      </v-main>
    </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

  @Component
export default class App extends Vue {
  private drawer = null;
}
</script>
