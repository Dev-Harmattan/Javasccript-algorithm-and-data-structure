const charCount = (str) => {
  let obj = {};
  for (let item of str) {
    if (isAlphanumeric(item)) {
      obj[item] = ++obj[item] || 1;
    }
  }

  return obj;
};

const isAlphanumeric = (item) => {
  let charCode = item.charCodeAt(item);
  if (
    !(charCode > 96 && charCode < 123) &&
    !(charCode > 64 && charCode < 91) &&
    !(charCode > 45 && charCode < 58)
  ) {
    return false;
  }
  return true;
};

console.log(charCount('hello is world!'));
