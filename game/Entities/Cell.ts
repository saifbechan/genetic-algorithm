import P5, { Vector } from 'p5';

import { Blobby } from '../ Classes/Blobby';
import Target from './Target';

export default class Cell extends Blobby {
  private readonly dna: Vector[] = [];

  private readonly acceleration: Vector;
  private readonly velocity: Vector;

  private step = 0;
  private fitness = 0;
  private crashed = false;
  private reached = false;

  constructor(p5: P5, dna: Vector[]) {
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
    this.dna = dna;
  }

  setFitness(target: Target): void {
    const distance_to_target = this.p5.dist(
      this.position.x,
      this.position.y,
      target.getPosition().x,
      target.getPosition().y
    );

    if (distance_to_target < 40) {
      this.reached = true;
    }

    this.fitness = this.p5.map(
      distance_to_target,
      0,
      this.p5.windowWidth,
      this.p5.windowWidth,
      0
    );

    if (this.reached) {
      this.fitness *= 10;
    }

    if (this.crashed) {
      this.fitness /= 10;
    }
  }

  normalizeFitness(max_fitness: number): void {
    this.fitness /= max_fitness;
  }

  getFitness(): number {
    return this.fitness;
  }

  getDNA(index: number): Vector {
    return this.dna[index];
  }

  update(): boolean {
    // get the next move of the cell
    const next = this.dna[this.step];

    // return if there is no next move
    if (!next) return false;

    this.acceleration.add(next);
    this.velocity.add(this.acceleration);

    this.position.add(this.velocity);

    this.acceleration.mult(0);
    this.velocity.limit(3);

    this.step += 1;

    return true;
  }

  draw(): void {
    // update the position of the cell
    if (this.crashed || this.reached || !this.update()) return;

    // check if we crashed
    this.checkIfCrashed();

    // draw the cell
    super.draw();
  }

  private checkIfCrashed(): void {
    if (this.position.x < 0 || this.position.x > this.p5.windowWidth) {
      this.crashed = true;
      return;
    }

    if (this.position.y < 0 || this.position.y > this.p5.windowHeight) {
      this.crashed = true;
      return;
    }
  }
}
