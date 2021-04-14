import recursiveFact from '../recursiveFact';

describe('factorial', () => {
  it('factorialize(0) should return 1', () => {
    expect(recursiveFact(0)).toBe(1);
  });
  it('factorialize(5) should return 120', () => {
    expect(recursiveFact(5)).toBe(120);
  });
  it('factorialize(10) should return 3628800', () => {
    expect(recursiveFact(10)).toBe(3628800);
  });
  it('factorialize(20) should return 2432902008176640000', () => {
    expect(recursiveFact(20)).toBe(2432902008176640000);
  });
});
