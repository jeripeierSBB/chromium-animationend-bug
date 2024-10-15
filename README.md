**Bug is only reproducible on Linux in headless mode.**

### Steps to reproduce Bug

We recommend to use Github Codespaces where it's easy reproducible: https://codespaces.new/jeripeierSBB/chromium-animationend-bug

1. run `npm run repeat-test`
2. See test error as data-state was not set as `animationend` event was not fired
3. Check code:
   - If removing console.log calling `div.scrollHeight`, the test becomes green
   - If removing `animation-fill-mode: forwards`, there are more runs needed to fail the test

### Description

"MyTest" is a simple web component where an animation is triggered on a data attribute change. During the connectedCallback() the state changes and an animation should be applied.
Calling `.scrollHeight` before changing the data attribute seems to not fire the `animationend` event.

### Regression check

Set playwright to version 1.47.0 in order to see the test always working (in reproduction repo fix it in `.devontainer.json` and package.json with following `npm i`).

### Browser versions

|         | Chromium Version | Playwright version |
| ------- | ---------------- | ------------------ |
| working | 129.0.6668.29    | playwright 1.47.0  |
| failing | 130.0.6723.19    | playwright 1.48.0  |
