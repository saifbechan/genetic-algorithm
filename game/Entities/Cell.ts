import P5, { Vector } from 'p5';

import { Blobby } from '../ Classes/Blobby';

export default class Cell extends Blobby {
  private readonly dna: Vector[] = [];

  private readonly acceleration: Vector;
  private readonly velocity: Vector;

  constructor(p5: P5, lifespan: number) {
    super(
      10,
      100,
      50,
      p5.createVector(1000, 1000, 1000),
      p5.createVector(
        Math.random() / 10,
        Math.random() / 10,
        Math.random() / 10
      ),
      p5.createVector(p5.windowWidth / 2, p5.windowHeight - 10),
      [157, 2, 8, 95]
    );

    this.acceleration = p5.createVector();
    this.velocity = p5.createVector();

    while (this.dna.length < lifespan) {
      this.dna.push(
        p5.createVector(p5.random(-1, 1), p5.random(-1, 1)).setMag(0.1)
      );
    }
  }

  update(): boolean {
    // get the next move of the cell
    const next = this.dna.pop();

    // return if there is no next move
    if (!next) return false;

    this.acceleration.add(next);
    this.velocity.add(this.acceleration);

    this.position.add(this.velocity);

    this.acceleration.mult(0);
    this.velocity.limit(3);

    return true;
  }

  draw(p5: P5): void {
    // update the position of the cell
    if (!this.update()) return;

    // draw the cell
    super.draw(p5);
  }
}
