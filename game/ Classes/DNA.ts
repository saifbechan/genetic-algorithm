import P5, { Vector } from 'p5';

export default class DNA {
  static generate(p5: P5, lifespan: number): Vector[] {
    return this.random(p5, lifespan);
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
