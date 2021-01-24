import P5, { Vector } from 'p5';

export default class Cell {
  private readonly dna: Vector[] = [];

  private readonly acceleration: Vector;
  private readonly velocity: Vector;
  private readonly position: Vector;
  private readonly dimensions: Vector;

  constructor(p5: P5, lifespan: number) {
    this.position = p5.createVector(p5.windowWidth / 2, p5.windowHeight - 10);
    this.acceleration = p5.createVector();
    this.velocity = p5.createVector();

    this.dimensions = this.getDimensions(p5);

    while (this.dna.length < lifespan) {
      this.dna.push(p5.createVector(p5.random(-1, 1), p5.random(-1, 1)).setMag(0.1));
    }
  }

  getDimensions(p5: P5): Vector {
    return p5.createVector(p5.random(15, 24), p5.random(15, 24));
  }

  update(p5: P5): boolean {
    // get the next move of the cell
    const next = this.dna.pop();

    // return if there is no next move
    if (!next) return false;

    this.acceleration.add(next);
    this.velocity.add(this.acceleration);

    this.position.add(this.velocity);

    this.acceleration.mult(0);
    this.velocity.limit(3);

    if (this.dna.length % 3 === 0) this.dimensions.set(this.getDimensions(p5));

    return true;
  }

  draw(p5: P5): void {
    // update the position of the cell
    if (!this.update(p5)) return;

    // draw the cell
    p5.noStroke();
    p5.fill(255, 0, 64, 80);
    p5.ellipse(this.position.x, this.position.y, this.dimensions.x, this.dimensions.y);
  }
}
