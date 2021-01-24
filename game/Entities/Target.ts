import P5, { Vector } from 'p5';

export default class Target {
  private readonly position: Vector;
  private readonly dimensions: Vector;

  private step = 0;

  constructor(p5: P5) {
    this.position = p5.createVector(p5.windowWidth / 2, 50);
    this.dimensions = this.getDimensions(p5);
  }

  getDimensions(p5: P5): Vector {
    return p5.createVector(p5.random(45, 55), p5.random(45, 55));
  }

  draw(p5: P5): void {
    if (this.step % 3 === 0) this.dimensions.set(this.getDimensions(p5));

    p5.noStroke();
    p5.fill(255, 0, 64, 90);
    p5.ellipse(
      this.position.x + p5.random(-2, 2),
      this.position.y + p5.random(-2, 2),
      this.dimensions.x,
      this.dimensions.y
    );

    this.step += 1;
  }
}
