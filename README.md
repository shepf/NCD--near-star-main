Star me 
=================================

[![Open in Gitpod!](https://gitpod.io/button/open-in-gitpod.svg)]https://gitpod.io/#https://github.com/shepf/NCD--near-star-main)

<!-- MAGIC COMMENT: DO NOT DELETE! Everything above this line is hidden on NEAR Examples page -->

## Description

This contract implements simple voter  backed by storage on blockchain.
Contract in `assembly/main.ts` provides methods to voter  and get it's current accoutId.

Vote buttons increase nose count.

## To Run
Open in the Gitpod link above or clone the repository.

```
git clone https://github.com/shepf/NCD--near-star-maing
```


## Setup [Or skip to Login if in Gitpod](#login)
Install dependencies:

```
yarn
```

Make sure you have `near-cli` by running:

```
near --version
```

If you need to install `near-cli`:

```
npm install near-cli -g
```

## Login
If you do not have a NEAR account, please create one with [NEAR Wallet](https://wallet.nearprotocol.com).

In the project root, login with `near-cli` by following the instructions after this command:

```
near login
```

Modify the top of `src/config.js`, changing the `CONTRACT_NAME` to be the NEAR account name in the file `neardev/dev-account`. It starts with `dev-`.

```javascript
…
const CONTRACT_NAME = 'neardev/dev-account ACCOUNT ID'; /* TODO: fill this in! */
…
```

Start the example!

```
yarn start
```

## To Test

```
yarn asp  # as-pect tests
NODE_ENV=ci yarn jest # jest tests
NODE_ENV=ci yarn test # both
```

## To Explore

- `assembly/main.ts` for the contract code
- `src/index.html` for the front-end HTML
- `src/main.js` for the JavaScript front-end code and how to integrate contracts
- `src/test.js` for the JS tests for the contract


