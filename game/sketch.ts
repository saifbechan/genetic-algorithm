import P5 from 'p5';

import Cell from './Entities/Cell';
import populate from './Functions/populate';

const sketch = (p5: P5): void => {
  // the number of cells per generation
  const population = 50;
  // how long does a generation last
  const lifespan = 500;
  // our population of cells
  const cells: Cell[] = populate(p5, population, lifespan);

  p5.draw = (): void => {
    // giving the background a color
    p5.background(194, 210, 234);

    // draw the cells
    cells.forEach((cell) => {
      cell.draw(p5);
    });
  };

  p5.setup = (): void => {
    const canvas = p5.createCanvas(p5.windowWidth - 4, p5.windowHeight - 4);
    canvas.attribute('data-testid', 'sketch');
  };
};

export default sketch;
