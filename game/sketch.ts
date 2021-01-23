import P5 from 'p5';

import Cell from './Entities/Cell';
import Moves from './Entities/Moves';

const sketch = (p5: P5): void => {
  const height = p5.windowHeight - 4;
  const width = p5.windowWidth - 4;

  const lifespan = 1000;

  let cell: Cell;
  let moves: Moves;

  p5.setup = (): void => {
    // just drawing the canvas
    const canvas = p5.createCanvas(width, height);
    canvas.attribute('data-testid', 'sketch');
    // -----------------------

    // creating a random set of moves
    moves = new Moves(p5, lifespan);

    // creating a cell with the new moves
    cell = new Cell(p5, p5.width / 2, p5.height - 10, moves);
  };

  p5.draw = (): void => {
    p5.background(194, 210, 234);

    // draw a new step of the cell
    cell.draw(p5);
  };
};

export default sketch;
