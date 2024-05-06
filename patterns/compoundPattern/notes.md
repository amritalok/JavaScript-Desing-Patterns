- Notes from https://www.patterns.dev/posts/compound-pattern/ and need to re-read to fully understand it
- The code has example for React.cloneElement and React.Children.map
- Compound components manage their own internal state, which they share among the several child components. When implementing a compound component, we don't have to worry about managing the state ourselves.

- When importing a compound component, we don't have to explicitly import the child components that are available on that component.
