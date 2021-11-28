import test from 'ava';
import type AnyObject from './AnyObject';

type Assert<TypeA, TypeB> = [TypeB] extends [TypeA] ? true : false;

test('matches any object', (context) => {
  interface User {
    name: string;
  }

  const assertions: true[] = [
    true as Assert<AnyObject, {}>,
    true as Assert<AnyObject, { name: string; }>,
    true as Assert<AnyObject, User>,

    // Also matches non-literal objects.
    true as Assert<AnyObject, Date>,
    true as Assert<AnyObject, Array<User>>,
  ];

  assertions.forEach((assertion) => {
    context.true(assertion);
  });
});

test('doesn\'t match primitive types object', (context) => {
  const assertions: false[] = [
    false as Assert<AnyObject, string>,
    false as Assert<AnyObject, boolean>,
    false as Assert<AnyObject, symbol>,
  ];

  assertions.forEach((assertion) => {
    context.false(assertion);
  });
});
