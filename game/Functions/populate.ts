import P5 from 'p5';

import Cell from '../Entities/Cell';
import Moves from '../Entities/Moves';

export default (p5: P5, population: number, lifespan: number): Cell[] => {
  const cells = [];
  while (cells.length < population) {
    // create a set of moves
    const moves = new Moves(p5, lifespan);

    // create a new cell
    const cell = new Cell(p5, moves);

    // add our cell to the population
    cells.push(cell);
  }
  return cells;
};
