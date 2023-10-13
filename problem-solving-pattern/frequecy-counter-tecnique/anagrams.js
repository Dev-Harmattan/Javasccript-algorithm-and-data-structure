const isAnagrams = (firstString, secondString) => {
  const firstStringObjectMap = {};
  const secondStringObjectMap = {};

  for (let value of firstString) {
    firstStringObjectMap[value] = (firstStringObjectMap[value] || 0) + 1;
  }

  for (let value of secondString) {
    secondStringObjectMap[value] = (secondStringObjectMap[value] || 0) + 1;
  }

  for (let key in firstStringObjectMap) {
    if (!(key in secondStringObjectMap)) {
      return false;
    }

    if (!(firstStringObjectMap[key] === secondStringObjectMap[key])) {
      return false;
    }
  }

  return true;
};

const result = isAnagrams('car', 'rac');
console.log('result ', result);
