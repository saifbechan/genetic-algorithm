import { sampleSize } from 'lodash';
import P5 from 'p5';

import Cell from '../Entities/Cell';

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

    // create a new cell
    const cell = new Cell(p5, lifespan, parents);

    // add our cell to the population
    cells.push(cell);
  }
  return cells;
};

export default populate;
