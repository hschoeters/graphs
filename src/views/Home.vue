<template>
  <div class="home">
    <div class="mb-4">
      <h2>Home</h2>
    </div>
    <div>
      <ImageComponent></ImageComponent>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ImageComponent from '@/components/Image.vue';

@Component({
  components: {
    ImageComponent
  }
})
export default class Home extends Vue {}
</script>
