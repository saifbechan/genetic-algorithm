import P5, { Vector } from 'p5';

import Moves from './Moves';

export default class Cell {
  private readonly moves: Moves;

  private readonly acceleration: Vector;
  private readonly velocity: Vector;
  private readonly position: Vector;
  private readonly dimensions: Vector;

  constructor(p5: P5, x: number, y: number, moves: Moves) {
    this.moves = moves;

    this.position = p5.createVector(x, y);
    this.acceleration = p5.createVector();
    this.velocity = p5.createVector();

    this.dimensions = this.getDimensions(p5);
  }

  getDimensions(p5: P5): Vector {
    return p5.createVector(p5.random(15, 24), p5.random(15, 24));
  }

  update(p5: P5): void {
    const next = this.moves.pop();

    if (!next) {
      return;
    }

    this.acceleration.add(next);
    this.velocity.add(this.acceleration);

    this.position.add(this.velocity);

    this.acceleration.mult(0);
    this.velocity.limit(3);

    if (this.moves.length % 3 === 0) this.dimensions.set(this.getDimensions(p5));
  }

  draw(p5: P5): void {
    // get the next position of the cell
    this.update(p5);

    // draw the cell
    p5.noStroke();
    p5.ellipse(this.position.x, this.position.y, this.dimensions.x, this.dimensions.y);
  }
}
