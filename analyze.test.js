import analyze from './analyzeArray';

test('Analyze array', () => {
  const object = analyze([1,8,3,4,2,6]);
  console.log(object);
  expect(object).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6
  });
});