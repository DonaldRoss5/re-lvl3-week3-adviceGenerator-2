# Advice Generator App

A solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db), built with React, Vite and SCSS (BEM).

## Getting started

Requires Node.js 20.19+ or 22.12+.

```bash
npm install
npm run dev      # start the dev server
npm run lint     # lint the source
npm run build    # production build in dist/
npm run preview  # serve the production build
```

## Project structure

```
src/
  App.jsx                 # holds the current advice and handles new-advice clicks
  components/
    AdviceCard.jsx        # advice number, quote and divider
    AdviceButton.jsx      # dice button
  data/sampleAdvice.js    # local sample advice
  styles/                 # SCSS: variables, mixins and one BEM partial per block
```
