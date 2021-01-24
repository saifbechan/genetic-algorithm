# Genetic Algorithm

With the use of a genetic algorithm cells will find their way to a specific target while avoiding obstacles.

#### Definitions

```bash
Population.Size >> the number of cells per generation
Population.Lifespan >> how long does a generation last

Cell.dna >> specifies the moves this cell will make
Cell.fitness >> specifies how well this cell performed
```

We start by creating a world and populate it with cells. Each cell starts with random `dna` and can only live a certain amount of time. When the time is over we will `evaluate` all the cells in the population and give them a `fitness` score. Based on this population we create a new `population` through `mating` _(cells don't usually do this but in our world they do)_. When creating a new population based on the previous `generation` there is also some `mutation` that takes place.

## Code

The most important part of the application lives in `/game/sketch.ts`. It is in charge of creating our population and displaying them on the canvas.

## Installation

Make sure [node](https://nodejs.org) is installed on your system. Use package manager [yarn](https://yarnpkg.com/getting-started/install) to install the application.

```
yarn install
```

## Development

You can start the development server by running:

```
yarn dev
```

## Stack

There are various libraries and tools used to make this application work.

```shell
next.js >> creates the website with React
p5.js >> creates the visualization
```

## License
[MIT](https://choosealicense.com/licenses/mit/)
