import P5 from 'p5';

import Cell from './Entities/Cell';
import Target from './Entities/Target';
import populate from './Functions/populate';

enum Population {
  // the number of cells per generation
  Size = 50,

  // how long does a generation last
  Lifespan = 500,
}

const sketch = (p5: P5): void => {
  // our target
  const target: Target = new Target(p5);

  // our population of cells
  const cells: Cell[] = populate(p5, Population.Size, Population.Lifespan);

  p5.draw = (): void => {
    // giving the background a color
    p5.background(11, 0, 20);

    // draw the cells
    cells.forEach((cell) => {
      cell.draw(p5);
    });

    // draw the target
    target.draw(p5);
  };

  p5.setup = (): void => {
    const canvas = p5.createCanvas(p5.windowWidth - 4, p5.windowHeight - 4);
    canvas.attribute('data-testid', 'sketch');
  };
};

export default sketch;
