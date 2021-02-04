import P5 from 'p5';

import Cell from './Entities/Cell';
import Target from './Entities/Target';
import Virus from './Entities/Virus';
import evaluate from './Functions/evaluate';
import populate from './Functions/populate';

enum Population {
  // the number of cells per generation
  Size = 50,

  // how long does a generation last
  Lifespan = 800,
}

const sketch = (p5: P5): void => {
  // pool of 'parent' cells to create next population
  let pool: Cell[] = [];

  // our population of cells
  let cells: Cell[] = populate(p5, Population.Size, Population.Lifespan, pool);

  // our target to go towards
  const target: Target = new Target(p5);

  // our virus to avoid
  const virus: Virus = new Virus(p5);

  // the current step (frame) we are in
  let step = 0;

  // the draw function gets called every frame forever
  p5.draw = (): void => {
    // giving the background a color
    p5.background(11, 0, 20);

    // we draw when the step is smaller than the lifespan
    if (step < Population.Lifespan) {
      // draw the cells
      cells.forEach((cell) => {
        cell.update(target, virus);

        cell.draw();
      });

      // draw the target
      target.draw();

      // draw the virus
      virus.draw();

      // increase the steps
      step += 1;
    } else {
      // evaluate how the previous generation behaved
      pool = evaluate(p5, cells);

      // create a new population based on the old one
      cells = populate(p5, Population.Size, Population.Lifespan, pool);

      // reset the steps
      step = 0;
    }
  };

  p5.setup = (): void => {
    const canvas = p5.createCanvas(p5.windowWidth - 4, p5.windowHeight - 4);
    canvas.attribute('data-testid', 'sketch');
  };
};

export default sketch;
