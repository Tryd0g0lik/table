const relevantForm = (arr: string[]): boolean => {
  if ((!Array.isArray(arr)) && ((Array.isArray(arr)) && (arr.length === 0))) {
    const err = new Error();
    err.name = '[relevantForm]';
    err.message = 'Something not that to the entrypointy';
    throw err;
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length === 0) {
      return false;
    }
  }
  return true;
};

export default { relevantForm };
