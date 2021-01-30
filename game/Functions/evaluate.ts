import Cell from '../Entities/Cell';

const evaluate = (population: Cell[]): Cell[] => {
  // get the highest fitness of the population
  let max_fitness = 0;
  population.forEach((cell: Cell) => {
    max_fitness = Math.max(max_fitness, cell.getFitness());
  });

  // normalize the fitness between 0 and 1
  population.forEach((cell: Cell) => {
    cell.normalizeFitness(max_fitness);
  });

  const pool: Cell[] = [];
  // create a pool with 'parent' cells
  population.forEach((cell: Cell) => {
    const weight = cell.getFitness() * 100;
    for (let j = 0; j < weight; j += 1) {
      pool.push(cell);
    }
  });

  console.log('max-fitness', max_fitness);
  console.log('pool-size', pool.length);

  return pool;
};

export default evaluate;
