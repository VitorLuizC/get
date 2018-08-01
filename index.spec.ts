import take from './';
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
  context.is(typeof take, 'function');
});

test('Take value from object', (context) => {
  context.is(take(response, 'data.users[0].name'), 'Bruce');
  context.is(take(response, '["data"].users[0].name'), 'Bruce');
});

test('Can apply expressions to value', (context) => {
  context.is(take(response, 'data.users[0].name + " Wayne"'), 'Bruce Wayne');
});

test('Return placeholder when undefined or unreachable', (context) => {
  context.is(take(response, 'data.users[0].hobby', 'None'), 'None');
  context.is(take(null, 'data.users[1].name', 'Unknown'), 'Unknown');
});
