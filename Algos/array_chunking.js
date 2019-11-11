function chunk(array, size) {
  const chunked = [];
  let index = 0;

  while (index < array.length) {
    let chunk = array.slice(index, index + size);
    index += size;
    chunked.push(chunk);
  }
  return chunked;
}
