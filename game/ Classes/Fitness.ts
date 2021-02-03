import P5 from 'p5';

import Cell from '../Entities/Cell';

export default class Fitness {
  static calculate(p5: P5, cell: Cell): number {
    // get the distance to the target
    const distance = cell.getClosestDistance();

    // map -> make a high value low and low value high
    let fitness = p5.map(distance, 0, p5.windowHeight, p5.windowHeight, 0);

    // give a bonus if we reached the target
    if (cell.hasReachedTarget()) {
      fitness *= 10;
    }

    // give a penalty if we crashed
    if (cell.hasCrashed()) {
      fitness /= 100;
    }

    return fitness;
  }
}
