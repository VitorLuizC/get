import type AnyObject from './AnyObject';
import type Position from './Position';

type Paths<P extends string, T> =
  | P
  | `${P}${NextPath<T>}`;

// NOTE: Those "prettier-ignore" were placed because Prettier messes up the
// ternaries in types, but besides that, they're working fine.

// prettier-ignore
type NextPath<T> =
  T extends readonly (infer U)[]
    ? Paths<Position, U>
    : T extends AnyObject
      ? {
          [K in keyof T]-?:
            K extends string
              ? `.${Paths<K, T[K]>}`
              : never;
        }[keyof T]
      : never;

// prettier-ignore
type Path<T> =
  T extends readonly (infer U)[]
    ? Paths<Position, U>
    : T extends AnyObject
      ? {
          [K in keyof T]-?:
            K extends string
              ? Paths<K, T[K]>
              : never;
        }[keyof T]
      : never;

export default Path;
