export const removeEmptyValuesFromFrom = <T>(data: T) => {
  const removeEmpty = Object.entries(data).filter(([k, v], i) => !!v);
  return Object.fromEntries(removeEmpty);
};
