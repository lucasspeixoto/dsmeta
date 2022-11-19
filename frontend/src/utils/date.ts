export const dateFormat = (date: string): string => {
  return new Date(date).toLocaleDateString();
};
