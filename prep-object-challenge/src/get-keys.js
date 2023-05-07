function getKeys(object) {
  const array = [];
  for (const objProp in object) {
    array.push(objProp);
  }
  return array;
}
getKeys();
