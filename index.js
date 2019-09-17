// Write your solution in this file!
let driver = {};
function updateDriverWithKeyAndValue(obj, key, val) {
  let newObj = {...obj};
  newObj[key] = val;
  return newObj;
}

function destructivelyUpdateDriverWithKeyAndValue(obj, key, val) {
  obj[key] = val;
  return obj;
}

function deleteFromDriverByKey(obj, key) {
  let newObj = {...obj};
  delete newObj[key];
  return newObj;
}

function destructivelyDeleteFromDriverByKey(obj, key) {
    delete obj[key];
    return obj;
  }
  

