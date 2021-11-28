import test from 'ava';
import type TypeAtPath from './TypeAtPath';

type Assert<TypeA, TypeB> = [TypeB] extends [TypeA] ? true : false;

test('returns the type at received path', (context) => {
  type Response = {
    status: number;
    statusCode: string;
    data?: {
      name: string;
      roles: string[];
    };
  };

  const assertions: true[] = [
    true as Assert<TypeAtPath<Response, 'status'>, number>,
    true as Assert<TypeAtPath<Response, 'statusCode'>, string>,
    true as Assert<TypeAtPath<Response, 'data.name'>, string>,
    true as Assert<TypeAtPath<Response, 'data.roles[0]'>, string>,
  ];

  assertions.forEach((assertion) => {
    context.true(assertion);
  });
});
