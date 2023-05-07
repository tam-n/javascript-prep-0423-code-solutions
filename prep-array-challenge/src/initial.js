function initial(array) {
  const skipLast = [];
  for (let i = 0; i < array.length - 1; i++) {
    skipLast.push(array[i]);
  }
  return skipLast;
}
initial();
