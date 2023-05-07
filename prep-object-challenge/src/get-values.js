function getValues(object) {
  const array = [];
  for (const objProp in object) {
    const objValue = object[objProp];
    array.push(objValue);
  }
  return array;
}
getValues();
