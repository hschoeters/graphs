<template>
    <v-app id="graphs">
      <v-navigation-drawer
        v-model="drawer"
        app
      >
        <v-list>
          <v-list-item>
            <router-link :to="{ name: 'home' }">Home</router-link>
          </v-list-item>
          <v-list-item>
            <router-link :to="{ name: 'slider' }">Slider</router-link>
          </v-list-item>
        </v-list>
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
import { Component, Vue } from 'vue-property-decorator';

  @Component
export default class App extends Vue {
  private drawer = null;

  created () {
    this.$store.dispatch('setDefaultImage');
  }
}
</script>
