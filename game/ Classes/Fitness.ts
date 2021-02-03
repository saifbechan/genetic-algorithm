import P5 from 'p5';

import Cell from '../Entities/Cell';
import Target from '../Entities/Target';

export default class Fitness {
  static calculate(p5: P5, cell: Cell, target: Target): number {
    let fitness = p5.map(
      cell.getDistanceToTarget(target),
      0,
      p5.windowWidth,
      p5.windowWidth,
      0
    );

    if (cell.hasReachedTarget()) {
      fitness *= 10;
    }

    if (cell.hasCrashed()) {
      fitness /= 10;
    }

    return fitness;
  }
}
