export const getSalesRoute = (minDate: Date, maxDate: Date): string => {
  if (minDate === null || maxDate === null) return `sales`;

  const dmin = minDate.toISOString().slice(0, 10);
  const dmax = maxDate.toISOString().slice(0, 10);

  return `sales?minDate=${dmin}&maxDate=${dmax}`;
};

export const getNotificationRoute = (id: number): string => {
  return `sales/${id}/notification`;
};
