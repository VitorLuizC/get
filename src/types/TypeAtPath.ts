import type Path from './Path';
import type Position from './Position';

type Accessor<T> = Position | Extract<keyof T, string>;

// NOTE: Those "prettier-ignore" were placed because Prettier messes up the
// ternaries in types, but besides that, they're working fine.

// prettier-ignore
type NextTypeAtPath<T, P extends string> =
  P extends `.${infer P2}`
    ? P2 extends Path<T>
      ? TypeAtPath<T, P2>
      : never
    : P extends Path<T>
      ? TypeAtPath<T, P>
      : never;

// prettier-ignore
type TypeAt<T, A extends string> =
  A extends Position
    ? T extends readonly (infer U)[]
      ? U
      : never
    : A extends keyof T
      ? T[A]
      : never;

// prettier-ignore
type TypeAtPath<T, P extends Path<T>> =
  P extends Accessor<T>
    ? TypeAt<Required<T>, P>
    : P extends `${Accessor<T>}${infer P2}`
      ? P extends `${infer A}${P2}`
        ? NextTypeAtPath<TypeAt<Required<T>, A>, P2>
        : never
      : never;

export default TypeAtPath;
