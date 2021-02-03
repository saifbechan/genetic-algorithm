import P5, { Vector } from 'p5';

import { Blobby } from '../ Classes/Blobby';
import Target from './Target';
import Virus from './Virus';

export default class Cell extends Blobby {
  private readonly dna: Vector[] = [];

  private readonly acceleration: Vector;
  private readonly velocity: Vector;

  private step = 0;
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

  getDNA(index: number): Vector {
    return this.dna[index];
  }

  update(target: Target, virus: Virus): void {
    // get the next move of the cell
    const next = this.dna[this.step];

    // return if there is no next move
    if (!next) return;

    this.acceleration.add(next);
    this.velocity.add(this.acceleration);

    this.position.add(this.velocity);

    this.acceleration.mult(0);
    this.velocity.limit(3);

    this.step += 1;

    // check if we crashed
    this.setCrashedIfCrashed(virus);

    // check if we reached the target
    this.setReachedIfReached(target);
  }

  draw(): void {
    // we do not draw if we crashed or reached the target
    if (this.crashed || this.reached) return;

    // draw the cell
    super.draw();
  }

  private setReachedIfReached(target: Target): void {
    if (this.getDistanceToTarget(target) < target.getRadius()) {
      this.reached = true;
    }
  }

  private setCrashedIfCrashed(virus: Virus): void {
    // check left & right of the bounding box
    if (this.position.x < 0 || this.position.x > this.p5.windowWidth) {
      this.crashed = true;
      return;
    }

    // check top & bottom of the bounding box
    if (this.position.y < 0 || this.position.y > this.p5.windowHeight) {
      this.crashed = true;
      return;
    }

    const distance_to_virus = this.p5.dist(
      this.position.x,
      this.position.y,
      virus.getPosition().x,
      virus.getPosition().y
    );

    // check if we hit a virus
    if (distance_to_virus < virus.getRadius() + 40) {
      this.crashed = true;
      return;
    }
  }

  hasCrashed(): boolean {
    return this.crashed;
  }

  hasReachedTarget(): boolean {
    return this.reached;
  }
}
