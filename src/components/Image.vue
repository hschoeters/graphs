<template>
  <div class="image">
      <canvas id="image-canvas" ref="canvas" width="550px" height="500"></canvas>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

  @Component
export default class ImageComponent extends Vue {
  created () {
    this.draw()
  }

  async draw () {
    await this.$nextTick
    const canvas = this.getCanvas()
    if (canvas) {
      const ctx = canvas.getContext('2d') as CanvasRenderingContext2D
      this.drawShape(ctx, 'green')
      ctx.save()
      ctx.translate(125, 400)
      ctx.rotate(Math.PI / 180 * 270)
      this.drawShape(ctx, 'blue')
      ctx.restore()
    }
  }

  drawShape (ctx: CanvasRenderingContext2D, colour: string) {
    ctx.beginPath()
    ctx.moveTo(0, 400)
    ctx.lineTo(0, 0)
    ctx.lineTo(100, 10)
    ctx.lineTo(30, 30)
    ctx.lineTo(70, 30)
    ctx.lineTo(60, 40)
    ctx.lineTo(70, 70)
    ctx.lineTo(50, 75)
    ctx.lineTo(80, 80)
    ctx.lineTo(70, 90)
    ctx.lineTo(90, 100)
    ctx.lineTo(80, 105)
    ctx.lineTo(90, 120)
    ctx.lineTo(40, 150)
    ctx.lineTo(70, 155)
    ctx.lineTo(40, 170)
    ctx.lineTo(50, 180)
    ctx.lineTo(45, 190)
    ctx.lineTo(30, 200)
    ctx.lineTo(40, 210)
    ctx.lineTo(30, 220)
    ctx.lineTo(100, 230)
    ctx.lineTo(30, 240)
    ctx.lineTo(100, 250)
    ctx.lineTo(30, 260)
    ctx.lineTo(50, 265)
    ctx.lineTo(40, 270)
    ctx.lineTo(60, 280)
    ctx.lineTo(50, 290)
    ctx.lineTo(80, 320)
    ctx.lineTo(40, 340)
    ctx.lineTo(50, 350)
    ctx.lineTo(35, 360)
    ctx.lineTo(40, 370)
    ctx.lineTo(30, 380)
    ctx.lineTo(100, 400)
    ctx.closePath()

    // set line color
    ctx.lineWidth = 5
    ctx.strokeStyle = 'black'
    ctx.stroke()
    ctx.fillStyle = colour
    ctx.fill()
  }

  getCanvas () {
    return this.$refs.canvas as HTMLCanvasElement
  }
}
</script>
