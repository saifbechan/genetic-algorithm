import P5 from 'p5';

import { Blobby } from '../ Classes/Blobby';

export default class Virus extends Blobby {
  constructor(p5: P5) {
    super(
      p5,
      150,
      150,
      250,
      p5.createVector(1000, 1000, 1000),
      p5.createVector(0.1, 0.7, 0.007),
      p5.createVector(p5.windowWidth / 2, 500),
      [158, 240, 26, 90]
    );
  }
}
