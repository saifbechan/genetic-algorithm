import P5, { Vector } from 'p5';

export default class Moves {
  // the moves the bee will make
  private readonly moves: Vector[] = [];

  constructor(p5: P5, lifespan: number) {
    // create random moves for the 'lifespan' amount
    for (let i = 0; i < lifespan; i++) {
      // creates a random Vector [x,y]
      this.moves.push(p5.createVector(p5.random(-1, 1), p5.random(-1, 1)).setMag(0.1));
    }
  }

  pop(): Vector | undefined {
    // return the next move
    return this.moves.pop();
  }
}
