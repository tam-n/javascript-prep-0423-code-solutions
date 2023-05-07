function tail(array) {
  const skipFirst = [];
  for (let i = 1; i < array.length; i++) {
    skipFirst.push(array[i]);
  }
  return skipFirst;
}
tail();
