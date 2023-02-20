export const defineDefaultData = (data: string | null) =>
  !!data ? new Date(data) : null;
