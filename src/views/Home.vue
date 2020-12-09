<template>
  <div class="home">
    <ImageComponent></ImageComponent>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import ImageComponent from '@/components/Image.vue'

@Component({
  components: {
    ImageComponent
  }
})
export default class Home extends Vue {}
</script>
