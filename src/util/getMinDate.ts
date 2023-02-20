import { addDays, format } from "date-fns";

export const getMinDate = () => format(addDays(new Date(), 1), "yyyy-MM-dd");
