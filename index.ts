/**
 * Gets value from object using a string for path expression or return
 * placeholder if value is undefined or unreachable.
 * @example ```js
 * get(object, 'data.users[0].contact.phones[0]');
 * get(values, '[3].toString()', '0');
 * ```
 * @param object
 * @param path - Path expression used to get value from object.
 * @param placeholder - Returned when value is undefined or unreachable.
 */
const get = (object: object, path: string, placeholder?: any) => {
  try {
    const expression = 'return o' + (path[0] !== '[' ? '.' + path : path);
    const value = new Function('o', expression)(object);
    return value === undefined ? placeholder : value;
  } catch (_) {
    return placeholder;
  }
};

export default get;
