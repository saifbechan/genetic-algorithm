import P5, { Vector } from 'p5';

import { Blobby } from '../ Classes/Blobby';
import Target from './Target';

export default class Cell extends Blobby {
  private readonly dna: Vector[] = [];

  private readonly acceleration: Vector;
  private readonly velocity: Vector;

  private fitness = 0;

  constructor(p5: P5, lifespan: number) {
    super(
      p5,
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

    this.acceleration = this.p5.createVector();
    this.velocity = this.p5.createVector();

    while (this.dna.length < lifespan) {
      this.dna.push(
        this.p5
          .createVector(this.p5.random(-1, 1), this.p5.random(-1, 1))
          .setMag(0.1)
      );
    }
  }

  setFitness(target: Target): void {
    const distance_to_target = this.p5.dist(
      this.position.x,
      this.position.y,
      target.getPosition().x,
      target.getPosition().y
    );
    this.fitness = this.p5.map(
      distance_to_target,
      0,
      this.p5.windowWidth,
      this.p5.windowWidth,
      0
    );
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

  draw(): void {
    // update the position of the cell
    if (!this.update()) return;

    // draw the cell
    super.draw();
  }

  getFitness(): number {
    return this.fitness;
  }
}
