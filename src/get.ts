import type Path from './types/Path';
import type TypeAtPath from './types/TypeAtPath';

/**
 * Gets value from object using a string for its path expression, if value is
 * 'undefined' or unreachable returns the placeholder instead.
 * @example ```js
 * get(object, 'data.users[0].contact.phones[0]');
 * get(values, '[3].count', '0');
 * ```
 * @param object
 * @param path - Path expression used to get value from object.
 * @param [placeholder] - Returned when value is undefined or unreachable.
 */
function get<T, P extends Path<T>, U>(object: T, path: P, placeholder: U): TypeAtPath<T, P> | U;
function get<T, P extends Path<T>>(object: T, path: P): TypeAtPath<T, P> | undefined;
function get(object: unknown, path: string, placeholder?: unknown): unknown;
function get(object: unknown, path: string, placeholder?: unknown): unknown {
  try {
    const expression = 'return o' + (path[0] !== '[' ? '.' + path : path);
    const value = new Function('o', expression)(object);
    return value === undefined ? placeholder : value;
  } catch (_) {
    return placeholder;
  }
}

export default get;
