const findKeyByValueInEnum = (enumObj: any, value: string) => {
  const indexOfS = Object.values(enumObj).indexOf(value);
  return Object.keys(enumObj)[indexOfS];
};

export { findKeyByValueInEnum };
