export const getStartDate = () => {
  const newStartDate = localStorage.getItem("date") || null;
  return newStartDate ? newStartDate : null;
};
