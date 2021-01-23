import P5 from 'p5';

import Cell from '../Entities/Cell';

export default (p5: P5, population: number, lifespan: number): Cell[] => {
  const cells = [];
  while (cells.length < population) {
    // create a new cell
    const cell = new Cell(p5, lifespan);

    // add our cell to the population
    cells.push(cell);
  }
  return cells;
};
