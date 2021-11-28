import type Path from './types/Path';
import type TypeAtPath from './types/TypeAtPath';

export type { Path, TypeAtPath };

/**
 * Gets a nested value from an object using a path string (like 'a.b[0].d'). If
 * value is 'undefined' or unreachable returns the placeholder instead.
 *
 * @example
 * const phone = get(response, 'data.users[0].contact.phones[0]', null);
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
 * Gets a nested value from an object using a path string (like 'a.b[0].d'). If
 * value is 'undefined' or unreachable returns the placeholder instead.
 *
 * @example ```js
 * const phone = get(response, 'data.users[0].contact.phones[0]', null);
 * ```
 *
 * @param {Object.<string, *>} object
 * @param {string} path
 * @param {*} [placeholder]
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
