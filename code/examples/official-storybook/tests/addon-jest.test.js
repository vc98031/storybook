// This file is excluded from the `/scripts/test.js` script. (see root `jest.config.js` file)
test('true should be true', () => {
  expect(true).toBe(true);
});

describe('In a describe: ', () => {
  test('true should still be true', () => {
    expect(true).toBe(true);
  });

  test('a list should contain 3 items', () => {
    expect(['a', 'b', '3']).toHaveLength(3);
  });

  test('everything is awesome', () => {
    expect('everything is all right').toEqual('everything is awesome');
  });
});

describe('A bunch of failing tests: ', () => {
  test('true should still be true', () => {
    expect(true).toBe(false);
  });

  test('a list should contain 3 items', () => {
    expect(['a', 'b', '3']).toContain(301);
  });

  test('should work', () => {
    expect(() => {}).toThrow();
  });

  test.todo('Test this Todo later');
});

describe('Skipped tests:', () => {
  test('Would be true if not skipped', () => {
    expect(true).toBe(true);
  });

  test('Could fail, if not skipped', () => {
    expect(() => {}).toThrow();
  });

  test.todo('Test Todo is not skipped');
});
