<template>
  <div class="image">
      <canvas id="image-canvas" ref="canvas" width="550px" height="500"></canvas>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import { Coordinate } from '@/models/coordinate';
import { mapGetters } from 'vuex';

@Component({
  computed: mapGetters(['path'])
})
export default class ImageComponent extends Vue {
  private path!: Array<Coordinate>

  @Watch('path', { immediate: true })
  onPathChanged () {
    this.draw(this.path);
  }

  async draw (path: Array<Coordinate>): Promise<void> {
    await this.$nextTick;
    const canvas = this.getCanvas();
    if (canvas) {
      const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
      this.clearCanvas(canvas, ctx);
      this.drawShape(ctx, path, 'green');
      ctx.save();
      ctx.translate(125, 400);
      ctx.rotate(Math.PI / 180 * 270);
      this.drawShape(ctx, path, 'blue');
      ctx.restore();
    }
  }

  drawShape (ctx: CanvasRenderingContext2D, path: Array<Coordinate>, colour: string): void {
    ctx.beginPath();
    ctx.moveTo(0, 400);
    ctx.lineTo(0, 0);
    path.forEach((coordinate: Coordinate) => ctx.lineTo(coordinate.x, coordinate.y));
    ctx.closePath();

    // set line color
    ctx.lineWidth = 5;
    ctx.strokeStyle = 'black';
    ctx.stroke();
    ctx.fillStyle = colour;
    ctx.fill();
  }

  getCanvas (): HTMLCanvasElement {
    return this.$refs.canvas as HTMLCanvasElement;
  }

  clearCanvas (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D): void {
    // Store the current transformation matrix
    ctx.save();

    // Use the identity matrix while clearing the canvas
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Restore the transform
    ctx.restore();
  }
}
</script>
