import P5 from 'p5';

import DNA from '../ Classes/DNA';
import Cell from '../Entities/Cell';

const populate = (p5: P5, population: number, lifespan: number): Cell[] => {
  const cells = [];

  while (cells.length < population) {
    // generate:
    //   - dna created randomly
    const dna = DNA.generate(p5, lifespan);

    // create a new cell
    const cell = new Cell(p5, dna);

    // add our cell to the population
    cells.push(cell);
  }

  return cells;
};

export default populate;
