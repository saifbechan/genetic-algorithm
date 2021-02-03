import P5, { Vector } from 'p5';

import Target from '../Entities/Target';

export abstract class Blobby {
  protected readonly p5: P5;

  protected readonly position: Vector;
  protected readonly color: number[];

  protected readonly offset: Vector;
  protected readonly speed: Vector;

  protected readonly radius: number;
  protected readonly vertices: number;
  protected readonly noise: number;

  protected constructor(
    p5: P5,
    radius: number,
    vertices: number,
    noise: number,
    offset: Vector,
    speed: Vector,
    position: Vector,
    color: number[]
  ) {
    this.p5 = p5;
    this.radius = radius;
    this.vertices = vertices;
    this.noise = noise;
    this.offset = offset;
    this.speed = speed;
    this.position = position;
    this.color = color;
  }

  public draw(): void {
    const px_offset = this.radius / 2;

    this.p5.push();
    this.p5.translate(this.position.x, this.position.y);

    this.p5.noStroke();
    this.p5.fill(this.color);
    this.p5.beginShape();
    for (let a = 0; a < this.p5.TWO_PI; a += this.p5.TWO_PI / this.vertices) {
      const x = this.radius * this.p5.sin(a);
      const y = this.radius * this.p5.cos(a);

      const new_x =
        x +
        this.p5.noise(
          (this.offset.x + x) / this.noise,
          (this.offset.y + y) / this.noise,
          this.offset.z
        ) *
          px_offset *
          this.p5.sin(a);

      const new_y =
        y +
        this.p5.noise(
          (this.offset.x + x) / this.noise,
          (this.offset.y + y) / this.noise,
          this.offset.z
        ) *
          px_offset *
          this.p5.cos(a);
      this.p5.vertex(new_x, new_y);
    }
    this.p5.endShape();
    this.p5.pop();

    this.offset.add(this.speed.x, this.speed.y, this.speed.z);
  }

  getDistanceToTarget(target: Target): number {
    return this.p5.dist(
      this.position.x,
      this.position.y,
      target.getPosition().x,
      target.getPosition().y
    );
  }

  getPosition(): Vector {
    return this.position;
  }

  getRadius(): number {
    return this.radius;
  }
}
