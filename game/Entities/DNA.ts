import P5, { Vector } from 'p5';

import Cell from './Cell';

export default class DNA {
  static generate(p5: P5, lifespan: number, parents: Cell[]): Vector[] {
    if (parents.length === 2) {
      return this.fromParents(lifespan, parents);
    } else {
      return this.random(p5, lifespan);
    }
  }

  private static fromParents(lifespan: number, [x, y]: Cell[]): Vector[] {
    const dna: Vector[] = [];

    // get a random midpoint
    const middle = Math.floor(Math.random() * lifespan);

    // create dna based on parent x and parent y
    while (dna.length < lifespan) {
      const index = dna.length;
      if (index < middle) {
        dna.push(x.getDNA(index));
      } else {
        dna.push(y.getDNA(index));
      }
    }

    return dna;
  }

  private static random(p5: P5, lifespan: number): Vector[] {
    const dna: Vector[] = [];

    // create a random step
    while (dna.length < lifespan) {
      dna.push(p5.createVector(p5.random(-1, 1), p5.random(-1, 1)).setMag(0.1));
    }

    return dna;
  }
}
