import type Path from './types/Path';
import type TypeAtPath from './types/TypeAtPath';

export type { Path, TypeAtPath };

/**
 * Gets value from object using received path (with dots and positions), if
 * value is 'undefined' or unreachable returns the placeholder instead.
 *
 * @example
 * get(object, 'data.users[0].contact.phones[0]');
 * get(values, '[3].count', '0');
 */
function get<T, P extends Path<T>, U>(
  object: T,
  path: P,
  placeholder: U,
): TypeAtPath<T, P> | U;

function get<T, P extends Path<T>>(
  object: T,
  path: P,
): TypeAtPath<T, P> | undefined;

function get(object: unknown, path: string, placeholder?: unknown): unknown;

/**
 * Gets value from object using received path (with dots and positions), if
 * value is 'undefined' or unreachable returns the placeholder instead.
 * @example ```js
 * get(object, 'data.users[0].contact.phones[0]');
 * get(values, '[3].count', '0');
 * ```
 * @param {Object.<string, *>} object
 * @param {string} path - Path expression used to get value from object.
 * @param {*} [placeholder] - Returned when value is undefined or unreachable.
 * @returns {*}
 */
function get(object: any, path: string, placeholder?: any): any {
  try {
    const expression = 'return o' + (path[0] !== '[' ? '.' + path : path);
    const value = new Function('o', expression)(object);
    return value === undefined ? placeholder : value;
  } catch (_) {
    return placeholder;
  }
}

export default get;
