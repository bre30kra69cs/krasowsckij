const createLoggerManager = () => {
  const error = (value?: string) => {
    console.error(value);
  };

  return {
    error
  };
};

export const loggerManager = createLoggerManager();
