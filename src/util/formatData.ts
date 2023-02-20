import { format } from "date-fns";

export const formatData = (date: Date) => format(new Date(date), "dd-MM-yyyy");
