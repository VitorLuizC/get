import test from 'ava';
import type Path from './Path';

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
    false as Assert<Path<Response>, ''>,
    false as Assert<Path<Response>, '.'>,
    false as Assert<Path<Response>, '.[0]'>,
    false as Assert<Path<Response>, '[0]'>,
    false as Assert<Path<Response>, '.status'>,
    false as Assert<Path<Response>, 'data.roles'>,
  ];

  assertions.forEach((assertion) => {
    context.true(assertion);
  });
});

test('returns possible paths of deep object', (context) => {
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
    true as Assert<Path<Response>, 'data'>,
    true as Assert<Path<Response>, 'data.name'>,
    true as Assert<Path<Response>, 'data.roles'>,
    true as Assert<Path<Response>, 'data.roles[0]'>,
    true as Assert<Path<Response>, 'data.repositories'>,
    true as Assert<Path<Response>, 'data.repositories[0]'>,
    true as Assert<Path<Response>, 'data.repositories[0].name'>,
    true as Assert<Path<Response>, 'data.repositories[0].stars'>,
  ];

  assertions.forEach((assertion) => {
    context.true(assertion);
  });
});

test('returns possible paths of nested arrays', (context) => {
  type Matriz = Array<{
    x: number;
    y: number;
  }>[][];

  const assertions: true[] = [
    true as Assert<Path<Matriz>, '[0]'>,
    true as Assert<Path<Matriz>, '[0][0]'>,
    true as Assert<Path<Matriz>, '[0][0][0]'>,
    true as Assert<Path<Matriz>, '[0][0][0].x'>,
    true as Assert<Path<Matriz>, '[0][0][0].y'>,
  ];

  assertions.forEach((assertion) => {
    context.true(assertion);
  });
});
