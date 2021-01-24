import P5, { Vector } from 'p5';

export abstract class Blobby {
  protected readonly position: Vector;
  protected readonly color: number[];

  protected readonly offset: Vector;
  protected readonly speed: Vector;

  protected readonly radius: number;
  protected readonly vertices: number;
  protected readonly noise: number;

  protected constructor(
    radius: number,
    vertices: number,
    noise: number,
    offset: Vector,
    speed: Vector,
    position: Vector,
    color: number[]
  ) {
    this.radius = radius;
    this.vertices = vertices;
    this.noise = noise;
    this.offset = offset;
    this.speed = speed;
    this.position = position;
    this.color = color;
  }

  protected draw(p5: P5): void {
    const px_offset = this.radius / 2;

    p5.push();
    p5.translate(this.position.x, this.position.y);

    p5.noStroke();
    p5.fill(this.color);
    p5.beginShape();
    for (let a = 0; a < p5.TWO_PI; a += p5.TWO_PI / this.vertices) {
      const x = this.radius * p5.sin(a);
      const y = this.radius * p5.cos(a);

      const new_x =
        x +
        p5.noise(
          (this.offset.x + x) / this.noise,
          (this.offset.y + y) / this.noise,
          this.offset.z
        ) *
          px_offset *
          p5.sin(a);

      const new_y =
        y +
        p5.noise(
          (this.offset.x + x) / this.noise,
          (this.offset.y + y) / this.noise,
          this.offset.z
        ) *
          px_offset *
          p5.cos(a);
      p5.vertex(new_x, new_y);
    }
    p5.endShape();
    p5.pop();

    this.offset.add(this.speed.x, this.speed.y, this.speed.z);
  }
}
