/**
 * Take value from object using a string for path expression or return
 * placeholder if value is undefined or unreachable.
 * @example ```js
 * take(object, 'data.users[0].contact.phones[0]');
 * take(values, '[3].toString()', '0');
 * ```
 * @param object
 * @param path - Path expression used to take value from object.
 * @param placeholder - Returned when value is undefined or unreachable.
 */
const take = (object: object, path: string, placeholder: any = null) => {
  try {
    const expression = 'return o' + (path[0] !== '[' ? '.' + path : path);
    const value = new Function('o', expression)(object);
    return value === undefined ? placeholder : value;
  } catch (_) {
    return placeholder;
  }
};

export default take;
