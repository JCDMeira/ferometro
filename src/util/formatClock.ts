export const formatMinutes = (num: number): any => num % 60;

export const formatToApresent = (num: number) =>
  num < 10 ? "0" + num : `${num}`;

export const formatTimeString = (hours: number, minutes: number) => {
  if (hours >= 1) {
    return "horas";
  } else if (minutes >= 1) {
    return "minutos";
  } else {
    return "segundos";
  }
};
