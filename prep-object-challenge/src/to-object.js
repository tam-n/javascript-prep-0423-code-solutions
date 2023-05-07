function toObject(keyValuePair) {
  const newObj = {};
  const key = keyValuePair[0];
  const value = keyValuePair[1];
  newObj[key] = value;
  return newObj;
}
toObject();
