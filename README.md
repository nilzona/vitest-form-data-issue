# vitest-form-data-issue

This highlights an issue with vitest version `4.0.6`

FormData was modified in [this PR](https://github.com/vitest-dev/vitest/pull/8880/files)

The following code fails:

```javascript
// Test implementation
const form = new FormData();
const key = "prop";
const value = { toDo: "¯_(ツ)_/¯" };

const json = JSON.stringify(value);
const data = new Blob([json], { type: "application/json" });

// set the Blob in FormData
form.set(key, data);

// get the Blob back from FormData
const retrievedBlob = form.get(key);

// this fails, as retrievedBlob is a string
expect(retrievedBlob).toBeInstanceOf(Blob);
```

## How to reproduce

run:

```shell
npm install
```

and

```shell
npm test
```
