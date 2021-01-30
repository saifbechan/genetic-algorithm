import Cell from '../Entities/Cell';

const evaluate = (population: Cell[]): void => {
  let max_fitness = 0;
  population.forEach((cell: Cell) => {
    max_fitness = Math.max(max_fitness, cell.getFitness());
  });

  console.log(max_fitness);
};

export default evaluate;
