function compact(array) {
  const omit = [];
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (element) {
      omit.push(element);
    }
  }
  return omit;
}
compact();
