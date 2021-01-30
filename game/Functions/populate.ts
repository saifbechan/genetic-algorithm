import { sampleSize } from 'lodash';
import P5 from 'p5';

import DNA from '../ Classes/DNA';
import Cell from '../Entities/Cell';
import mutate from './mutate';

const populate = (
  p5: P5,
  population: number,
  lifespan: number,
  pool: Cell[]
): Cell[] => {
  const cells = [];

  while (cells.length < population) {
    // get two random parents from the pool
    const parents = sampleSize(pool, 2);

    // generate either:
    //   - dna from two parents
    //   - dna created randomly
    const dna = DNA.generate(p5, lifespan, parents);

    // mutate the dna
    const mutated = mutate(p5, dna);

    // create a new cell
    const cell = new Cell(p5, mutated);

    // add our cell to the population
    cells.push(cell);
  }

  return cells;
};

export default populate;
