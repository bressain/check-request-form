# Check Request Form

This is a simple check request form to be used for an LDS Financial Clerk. Probably a solution in search of a problem but still pretty neat ¯\\\_(ツ)\_/¯.

## Installation

1. clone repo and cd into directory
2. run `npm install` (must have npm installed)
3. see `package.json` for script options
  * `npm start` - start local dev server (localhost:3000)
  * `npm run build` - run prod build

## Setup

* Change `lib/common/config.js` to match your org structure (`bishop`, `unit`, `orgPresidents`).
  * Unless of course your bishop is Batman and I nailed the callings.
* Run `npm run build`
* Copy the resulting `dist` folder somewhere and enjoy!
