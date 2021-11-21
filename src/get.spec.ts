import get from './get';
import test from 'ava';

const response = {
  data: {
    users: [
      {
        name: 'Bruce',
        hobby: undefined
      }
    ]
  }
};

test('Module exports a function', (context) => {
  context.is(typeof get, 'function');
});

test('Gets value from object', (context) => {
  context.is(get(response, 'data.users[0].name'), 'Bruce');
  context.is(get(response, '["data"].users[0].name'), 'Bruce');
});

test('Can apply expressions to value', (context) => {
  context.is(get(response, 'data.users[0].name + " Wayne"'), 'Bruce Wayne');
});

test('Return placeholder when undefined or unreachable', (context) => {
  context.is(get(response, 'data.users[0].hobby', 'None'), 'None');
  // @ts-expect-error checks if 'get' works when object is 'null' at runtime.
  context.is(get(null, 'data.users[1].name', 'Unknown'), 'Unknown');
});
