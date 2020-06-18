# Add Enzyme for component testing

We added [Enzyme](https://enzymejs.github.io) to isolate rendering among components for easy testing.

We also added [extra configuration for Jest](./src/setupTests.js) because [Enzyme requires adapters for React
16](https://enzymejs.github.io/enzyme/docs/installation/react-16.html).
