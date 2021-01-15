import P5, { Vector } from 'p5';

import Moves from './Moves';

export default class Bee {
  private readonly moves: Moves;

  private readonly acceleration: Vector;
  private readonly position: Vector;
  private readonly velocity: Vector;

  constructor(p5: P5, x: number, y: number, moves: Moves) {
    this.moves = moves;

    this.position = p5.createVector(x, y);
    this.acceleration = p5.createVector();
    this.velocity = p5.createVector();
  }

  update(): void {
    const next = this.moves.pop();

    if (!next) {
      return;
    }

    this.acceleration.add(next);
    this.velocity.add(this.acceleration);

    this.position.add(this.velocity);

    this.acceleration.mult(0);
    this.velocity.limit(3);
  }

  draw(p5: P5): void {
    // get the next position of the bee
    this.update();

    // draw the bee
    p5.circle(this.position.x, this.position.y, 20);
  }
}
