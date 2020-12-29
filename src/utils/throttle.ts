export const throttle = <T extends any[]>(fn: (...args: T) => void, timeout = 500) => {
  let isAvailable = true;

  return (...args: T) => {
    if (isAvailable) {
      fn(...args);
      isAvailable = false;
      setTimeout(() => {
        isAvailable = true;
      }, timeout);
    }
  };
};
