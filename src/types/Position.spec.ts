import test from 'ava';
import type Position from './Position';

type Assert<TypeA, TypeB> = [TypeB] extends [TypeA] ? true : false;

test('matches any array position', (context) => {
  const assertions: true[] = [
    true as Assert<Position, '[0]'>,
    true as Assert<Position, '[12897]'>,
    true as Assert<Position, '[189]'>,
  ];

  assertions.forEach((assertion) => {
    context.true(assertion);
  });
});

test("doesn't matches invalid array position", (context) => {
  const assertions: false[] = [
    false as Assert<Position, '["1"]'>,
    false as Assert<Position, '1'>,
    false as Assert<Position, 'length'>,
  ];

  assertions.forEach((assertion) => {
    context.false(assertion);
  });
});
