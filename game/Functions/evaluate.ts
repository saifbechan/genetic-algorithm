import P5 from 'p5';

import Fitness from '../ Classes/Fitness';
import Cell from '../Entities/Cell';
import Target from '../Entities/Target';

const evaluate = (p5: P5, population: Cell[], target: Target): Cell[] => {
  // will hold the fitness score per cell
  const fitness: number[] = [];

  // get the highest fitness of the population
  let max_fitness = 0;
  population.forEach((cell: Cell, index: number) => {
    fitness[index] = Fitness.calculate(p5, cell, target);
    max_fitness = Math.max(max_fitness, fitness[index]);
  });

  // normalize the fitness between 0 and 1
  const normalizedFitness: number[] = fitness.map(
    (value: number) => value / max_fitness
  );

  const pool: Cell[] = [];
  // create a pool with 'parent' cells
  population.forEach((cell: Cell, index: number) => {
    const weight = normalizedFitness[index] * 100;
    for (let j = 0; j < weight; j += 1) {
      pool.push(cell);
    }
  });

  console.log('max-fitness', max_fitness);
  console.log('pool-size', pool.length);

  return pool;
};

export default evaluate;
