import test from 'ava';
import type PathOf from './PathOf';

type Assert<TypeA, TypeB> = [TypeB] extends [TypeA] ? true : false;

test("doesn't allow invalid paths", (context) => {
  type Response = {
    status: number;
    statusCode: string;
    data: {
      name: string;
    }[];
  };

  const assertions: false[] = [
    false as Assert<PathOf<Response>, ''>,
    false as Assert<PathOf<Response>, '.'>,
    false as Assert<PathOf<Response>, '.[0]'>,
    false as Assert<PathOf<Response>, '[0]'>,
    false as Assert<PathOf<Response>, '.status'>,
    false as Assert<PathOf<Response>, 'data.roles'>,
  ];

  assertions.forEach((assertion) => {
    context.true(assertion);
  });
});

test('allows mix of objects and arrays', (context) => {
  type Response = {
    data: {
      name: string;
      roles: string[];
      repositories: [
        {
          name: string;
          stars: number;
        },
      ];
    };
  };

  const assertions: true[] = [
    true as Assert<PathOf<Response>, 'data'>,
    true as Assert<PathOf<Response>, 'data.name'>,
    true as Assert<PathOf<Response>, 'data.roles'>,
    true as Assert<PathOf<Response>, 'data.roles[0]'>,
    true as Assert<PathOf<Response>, 'data.repositories'>,
    true as Assert<PathOf<Response>, 'data.repositories[0]'>,
    true as Assert<PathOf<Response>, 'data.repositories[0].name'>,
    true as Assert<PathOf<Response>, 'data.repositories[0].stars'>,
  ];

  assertions.forEach((assertion) => {
    context.true(assertion);
  });
});

test('allows nested arrays', (context) => {
  type Matriz = Array<{
    x: number;
    y: number;
  }>[][];

  const assertions: true[] = [
    true as Assert<PathOf<Matriz>, '[0]'>,
    true as Assert<PathOf<Matriz>, '[0][0]'>,
    true as Assert<PathOf<Matriz>, '[0][0][0]'>,
    true as Assert<PathOf<Matriz>, '[0][0][0].x'>,
    true as Assert<PathOf<Matriz>, '[0][0][0].y'>,
  ];

  assertions.forEach((assertion) => {
    context.true(assertion);
  });
});
