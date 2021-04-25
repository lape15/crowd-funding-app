function flagErrorBamboo(amount) {
  let errorAmount = false;
  if (Number(amount) < 25) errorAmount = true;
  return errorAmount;
}

function flagErrorBlack(amount) {
  let errorAmount = false;
  if (Number(amount) < 75) errorAmount = true;
  return errorAmount;
}

function flagErrorMahogany(amount) {
  let errorAmount = false;
  if (Number(amount) < 200) errorAmount = true;
  return errorAmount;
}

const filterOutInvalid = (value) => {
  let valueError = false;
  if (value === '') valueError = true;
  return valueError;
};

const filterString = (str) => {
  let errorString = false;
  if (str.match(/[a-z]/i)) errorString = true;
  return errorString;
};
export {
  flagErrorBamboo,
  flagErrorBlack,
  flagErrorMahogany,
  filterOutInvalid,
  filterString,
};
