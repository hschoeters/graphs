<template>
  <div class="slider">
    <div class="mb-4">
      <h2>Slider</h2>
    </div>
    <div>
      <ImageComponent></ImageComponent>
    </div>
    <template>
      <v-card
        flat
        color="transparent"
      >
        <v-subheader>Change X and Y Coordinates</v-subheader>

        <v-card-text>
          <v-row>
            <v-col class="pr-4">
              <v-slider
                v-model="sliderX"
                label="X Coordinates"
                class="align-center"
                max="100"
                min="0"
                step="10"
                hide-details
              >
              </v-slider>
            </v-col>
            <v-col class="pr-4">
              <v-slider
                v-model="sliderY"
                label="Y Coordinates"
                class="align-center"
                max="400"
                min="0"
                step="10"
                hide-details
              >
              </v-slider>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-btn
            class="mx-2"
            fab
            large
            color="primary"
            @click="reset"
          >
            Reset
          </v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import ImageComponent from '@/components/Image.vue';
import { Coordinate } from '@/models/coordinate';

  @Component({
    components: {
      ImageComponent
    }
  })
export default class Home extends Vue {
    private sliderX = 50
    private sliderY = 200

    @Watch('sliderX', { immediate: true })
    onSliderXChanged (oldValue: number, newValue: number) {
      if (oldValue && newValue) {
        const change = this.difference(oldValue, newValue);
        this.updateX(change);
      }
    }

    @Watch('sliderY', { immediate: true })
    onSliderYChanged (oldValue: number, newValue: number) {
      if (oldValue && newValue) {
        const change = this.difference(oldValue, newValue);
        this.updateY(change);
      }
    }

    get currentPath () {
      return this.$store.getters.path;
    }

    updateX (val: number) {
      const newPath = [] as Array<Coordinate>;
      this.currentPath.forEach((coordinate: Coordinate) => {
        coordinate.x = coordinate.x + val;
        newPath.push(coordinate);
      });
      this.$store.commit('updatePath', newPath);
    }

    updateY (val: number) {
      const newPath = [] as Array<Coordinate>;
      this.currentPath.forEach((coordinate: Coordinate) => {
        coordinate.y = coordinate.y + val;
        newPath.push(coordinate);
      });
      this.$store.commit('updatePath', newPath);
    }

    reset () {
      this.$store.dispatch('setDefaultImage');
    }

    difference (oldVal: number, newVal: number) {
      const diff = oldVal > newVal ? oldVal - newVal : newVal - oldVal;
      return oldVal > newVal ? diff : -Math.abs(diff);
    }
}
</script>
