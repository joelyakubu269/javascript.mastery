const has_duplicates = (numbers) => {
  let nlist = [];
  for (const num of numbers) {
    if (nlist.includes(num)) {   // check ALL stored values
      return true;
    }
    nlist.push(num);             // store after checking
  }
  return false;                  // only after the loop finishes
};

console.log(has_duplicates([1, 2, 3, 2])); // true
console.log(has_duplicates([1, 2, 3, 4])); // false