import P5 from 'p5';

import Fitness from '../ Classes/Fitness';
import Cell from '../Entities/Cell';

const evaluate = (p5: P5, population: Cell[]): Cell[] => {
  // will hold the fitness score per cell
  const fitnessScores: number[] = [];

  // store the fitness per cell
  population.forEach((cell: Cell, index: number) => {
    fitnessScores[index] = Fitness.calculate(p5, cell);
  });

  // calculate the maximum fitness scores
  const maxFitness: number = Math.max(...fitnessScores);

  // calculate the total fitness score
  const totalFitness: number = fitnessScores.reduce(
    (total: number, score: number) => (total += score)
  );

  // normalize the fitness to an integer between 0 and 100
  const normalizedFitnessScores: number[] = fitnessScores.map((score: number) =>
    Math.floor((score / maxFitness) * 100)
  );

  const pool: Cell[] = [];
  // create a pool with 'parent' cells
  population.forEach((cell: Cell, index: number) => {
    for (let i = 0; i < normalizedFitnessScores[index]; i += 1) {
      pool.push(cell);
    }
  });

  console.table({
    'max-fitness': Math.floor(maxFitness),
    'total-fitness': Math.floor(totalFitness),
    'pool-size': pool.length,
  });

  return pool;
};

export default evaluate;
