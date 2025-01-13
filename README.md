# README

## Summary of the bug

When `"eagerEsModules": true` is set in a multi-project Relay config, `babel-plugin-relay` transforms `graphql` tagged templates into require calls, like this:

```js
var _MeQuery;
var MeQuery = _MeQuery !== void 0 ? _MeQuery : (_MeQuery = require("./__generated__/MeQuery.graphql"), _MeQuery.hash && _MeQuery.hash !== "bce9f1cc4614c3f306814d78c53b009b" && console.error("The definition of 'MeQuery' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data."), _MeQuery);
```

## Expected behavior

Just like it does with a single-project Relay config, `babel-plugin-relay` should transform `graphql` tagged templates into import declarations, like this:

```js
import _MeQuery from "../__generated__/MeQuery.graphql";
var MeQuery = (_MeQuery.hash && _MeQuery.hash !== "bce9f1cc4614c3f306814d78c53b009b" && console.error("The definition of 'MeQuery' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data."), _MeQuery);
```

I included the dist file in this repo, but if you want to reproduce the bug yourself, here are the steps:

1. Clone the repo.

2. Run these commands:

   ```bash
   npm install
   npm run build:single
   npm run build:multi
   ```
