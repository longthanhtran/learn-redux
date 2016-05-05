import expect from 'expect'

const testAddCounter = () => {
  const listBefore = [];
  const listAfter = [0];

  Object.freeze(listBefore);

  expect(
    addCounter(listBefore)
  ).toEqual(listAfter);
};

const testRemoveCounter = () => {
  const stateBefore = [0, 10, 20];
  const stateAfter = [0, 20];

  Object.freeze(stateBefore);

  expect(
    removeCounter(stateBefore, 1)
  ).toEqual(stateAfter);
};

const testIncrementCounter = () => {
  const stateBefore = [0, 10, 20];
  const stateAfter = [0, 11, 20];

  Object.freeze(stateBefore);

  expect(
    incrementCounter(stateBefore, 1)
  ).toEqual(stateAfter);
};

testAddCounter();
testRemoveCounter();
testIncrementCounter();
console.log('All tests passed');
