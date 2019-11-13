export const formatMessage = message => {
  switch (typeof message) {
    case 'string':
      return message;
    default:
      return message;
  }
};
