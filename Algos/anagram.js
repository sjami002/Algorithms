function anagrams(stringA, stringB) {
  return cleaningStr(stringA) === cleaningStr(stringB);

  function cleaningStr(str) {
    return str
      .replace(/[^\w]/g, "")
      .toLowerCase()
      .split("")
      .sort()
      .join();
  }
}
