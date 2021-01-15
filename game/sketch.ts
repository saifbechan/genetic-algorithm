import P5 from 'p5';

const sketch = (p5: P5): void => {
  const height = p5.windowHeight - 4;
  const width = p5.windowWidth - 4;

  p5.setup = (): void => {
    const canvas = p5.createCanvas(width, height);
    canvas.attribute('data-testid', 'sketch');
  };

  p5.draw = (): void => {
    p5.background(194, 210, 234);
  };
};

export default sketch;
