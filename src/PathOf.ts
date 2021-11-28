import type AnyObject from './AnyObject';
import type Position from './Position';

type Paths<Parent extends string, Type> =
  | Parent
  | `${Parent}${PathOfProperty<Type>}`;

// prettier-ignore because it messes up the ternaries.
type PathOfProperty<Type> =
  Type extends readonly (infer U)[]
    ? Paths<Position, U>
    : Type extends AnyObject
      ? {
          [Key in keyof Type]:
            Key extends string
              ? `.${Paths<Key, Type[Key]>}`
              : never;
        }[keyof Type]
      : never;

// prettier-ignore because it messes up the ternaries.
type PathOf<Type> =
  Type extends readonly (infer U)[]
    ? Paths<Position, U>
    : Type extends AnyObject
      ? {
          [Key in keyof Type]:
            Key extends string
              ? Paths<Key, Type[Key]>
              : never;
        }[keyof Type]
      : never;

export default PathOf;
