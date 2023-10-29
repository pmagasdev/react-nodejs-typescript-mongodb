# 3. development-conventions

Date:

## Status

Completed

## Context

We align how to create new file, new folder, define test structure.

## Decision

### File Name

- We use camelCase, like `fileName`.
- If it's a Class or React component we use `FileName`.
- If it's a test file, we use test as suffix, like `"abc.test.js`

### Dir Name

- We use kebab-Case, like `dir-name`

### Test File Structure

```js
describe("ClassName", () => {
    describe("method", () => {
        it("should xyz" () => {
        }
    }
}
```
