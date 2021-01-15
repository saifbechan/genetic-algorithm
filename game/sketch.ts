import P5 from 'p5';

import Bee from './Entities/Bee';
import Moves from './Entities/Moves';

const sketch = (p5: P5): void => {
  const height = p5.windowHeight - 4;
  const width = p5.windowWidth - 4;

  const lifespan = 1000;

  let bee: Bee;
  let moves: Moves;

  p5.setup = (): void => {
    // just drawing the canvas
    const canvas = p5.createCanvas(width, height);
    canvas.attribute('data-testid', 'sketch');
    // -----------------------

    // creating a random set of moves
    moves = new Moves(p5, lifespan);

    // creating a bee with the new moves
    bee = new Bee(p5, p5.width / 2, p5.height - 10, moves);
  };

  p5.draw = (): void => {
    p5.background(194, 210, 234);

    // draw a new step of the bee
    bee.draw(p5);
  };
};

export default sketch;
