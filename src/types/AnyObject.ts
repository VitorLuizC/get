/** A type that represents any object. */
type AnyObject<Key extends PropertyKey = PropertyKey, Value = any> = {
  readonly [key in Key]: Value;
};

export default AnyObject;
