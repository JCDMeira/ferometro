import { differenceInSeconds } from "date-fns";
import react, { useEffect, useState } from "react";
import * as S from "./styles";

const formatMinutes = (num: number): any => num % 60;

const formatToApresent = (num: number) => (num < 10 ? "0" + num : `${num}`);

const formatTimeString = (hours: number, minutes: number) => {
  if (hours >= 1) {
    return "horas";
  } else if (minutes >= 1) {
    return "minutos";
  } else {
    return "segundos";
  }
};

export const Clock: react.FC<any> = ({ date }) => {
  const actualDate = new Date();
  const [difference, setDifference] = useState(
    differenceInSeconds(date, actualDate)
  );

  const seconds = difference % 60;
  const minutes = formatMinutes(Math.trunc(difference / 60));
  const hours = Math.trunc(difference / 3600);

  const dateTimeFormated = `${formatToApresent(hours)}:${formatToApresent(
    minutes
  )}:${formatToApresent(seconds)}`;

  const timeString = formatTimeString(hours, minutes);

  useEffect(() => {
    const timer = setInterval(() => {
      setDifference((actual) => actual - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <span>
      Suas próximas féerias começam em{" "}
      <S.NeonText>{dateTimeFormated}</S.NeonText>
      {timeString}
    </span>
  );
};
