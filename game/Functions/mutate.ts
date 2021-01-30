import P5, { Vector } from 'p5';

const mutate = (p5: P5, dna: Vector[]): Vector[] => {
  // how often will we mutate
  const rate = 0.01;

  // for each step mutate if needed
  return dna.map((step: Vector) => {
    if (Math.random() < rate) {
      return p5.createVector(p5.random(-1, 1), p5.random(-1, 1)).setMag(0.1);
    } else {
      return step;
    }
  });
};

export default mutate;
