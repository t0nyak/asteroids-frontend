export const calculateMagnitude = (magnitude: number) => {
  if (magnitude < 19) {
    return 1;
  }
  if (magnitude < 23) {
    return 2;
  }
  if (magnitude < 28) {
    return 3;
  }
  return 4;
};
