
const getLastRootChildIndex = (arr = [], fieldName) => {
  if(arr?.length === 0) return;
  return arr.map(item => item[fieldName]).lastIndexOf(1);
}

module.exports = {getLastRootChildIndex};