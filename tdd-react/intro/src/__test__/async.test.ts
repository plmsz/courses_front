// callbacks

const asyncCallback = (cb: any) => {
  setTimeout(() => {
    cb(true);
  }, 1000);
};

const asyncPromise = () =>
  new Promise((resolve, reject) => {
    resolve(true);
  });

describe('async code', () => {
  it('callback', (done) => {
    asyncCallback((result: boolean) => {
      expect(result).toBe(true);
      done();
    });
  });

  test('example of async with promises', () => {
    return asyncPromise().then((result) => expect(result).toBe(true));
  });

  test('example of async with async await', async () => {
    const result = await asyncPromise();
    expect(result).toBe(true);
  });
});

export {};
