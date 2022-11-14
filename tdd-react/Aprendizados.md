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

const asyncCallback = (cb: any) => {
  setTimeout(() => {
    cb(true);
  }, 1000);
};
```

# Callbacks

```ts
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