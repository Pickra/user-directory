# Tests

## Unit tests
Unit tests use the [jest](https://jestjs.io/docs/en/expect) testing framework + the [testing-library](https://testing-library.com/docs/react-testing-library/api) for interacting with the DOM.

Please note that [getBy*](https://testing-library.com/docs/dom-testing-library/api-queries#getby),
[getAllBy*](https://testing-library.com/docs/dom-testing-library/api-queries#getallby), [findBy*](https://testing-library.com/docs/dom-testing-library/api-queries#findby) + [findAllBy*](https://testing-library.com/docs/dom-testing-library/api-queries#findallby) queries throw an error on a failed match. Can be used with or without a, jest, `expect` function.
```typescript
getByText('Cool User');
findByText('Cool User');
```

...as opposed to [queryBy*](https://testing-library.com/docs/dom-testing-library/api-queries#queryby) + [queryAllBy*](https://testing-library.com/docs/dom-testing-library/api-queries#queryallby) where an expect is required...
```typescript
expect(queryAllByText('Users').length).toBe(2);
```

### Run 1 test at a time: `npm t filename`
https://jestjs.io/docs/en/cli?origin_team=T6A5MBRC1#running-from-the-command-line

