# Matchers

## Regex

```ts
test('string', () => {
  expect('team').not.toMatch(/I/);
});
```

# Lançar erro

```ts
test('thrown', () => {
  expect(() => {
    throw Error();
  }).toThrow();
});
```

# Callbacks

```ts
const asyncCallback = (cb: any) => {
  setTimeout(() => {
    cb(true);
  }, 1000);
};

it('callback', (done) => {
  asyncCallback((result: boolean) => {
    expect(result).toBe(true);
    done();
  });
});
```

# Mock de um módulo

```ts
test('first example', () => {
  const myMock = jest
    .fn()
    .mockReturnValueOnce(true)
    .mockReturnValueOnce('hello world');

  const result1 = myMock();
  const result2 = myMock();

  expect(myMock).toHaveBeenCalledTimes(2);

  expect(result1).toBe(true);
  expect(result2).toBe('hello world');
});
```

```ts
jest.mock('../lib/storage');
test('third example', () => {
  const username = 'john doe';

  storage.get.mockReturnValueOnce(username);
  const result = getUsername();

  expect(result).toBe(username);
  expect(storage.get).toHaveBeenCalled();
  expect(storage.get).toHaveBeenCalledWith({
    key: 'username',
  });
});
```

# closest (não recomendado)
https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/no-node-access.md
```js
expect(within(table).getByText(/test/i).closest('a')).toHaveAttribute(
  'href',
  'http://localhost:3000/test',
);
```
