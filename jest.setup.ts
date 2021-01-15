import '@testing-library/jest-dom';
import 'jest-canvas-mock';

Object.defineProperty(window, 'matchMedia', {
  value: () => ({
    matches: false,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    addListener: () => {},
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    removeListener: () => {},
  }),
});
