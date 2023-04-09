import { differenceInSeconds } from "date-fns";
import react, { useEffect, useState } from "react";
import { ThermometerProp } from "../../types";
import {
  formatMinutes,
  formatTimeString,
  formatToApresent,
  getNewDate,
} from "../../util";
import * as S from "./styles";

export const Clock: react.FC<ThermometerProp> = ({ date }) => {
  const actualDate = new Date();
  const newDate = getNewDate(date);
  const [difference, setDifference] = useState(
    differenceInSeconds(newDate, actualDate)
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
      setDifference((actual) => {
        if (actual === 0) return actual;
        return actual - 1;
      });
    }, 1000);
    console.log(difference);

    if (difference <= 0) clearInterval(timer);
    return () => clearInterval(timer);
  }, []);

  return (
    <span>
      Suas próximas férias começam em{" "}
      <S.NeonText>{dateTimeFormated}</S.NeonText>
      {timeString}
    </span>
  );
};
