function naiveStringSearch(str, keySearch) {
  let matcherCount = 0;
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < keySearch.length; j++) {
      if (str[i + j] !== keySearch[j]) break;
      if (j === keySearch.length - 1) matcherCount++;
    }
  }

  return matcherCount;
}

console.log(naiveStringSearch('helohahalo', 'h'));
