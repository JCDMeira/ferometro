import { differenceInSeconds } from "date-fns";
import React from "react";

import * as S from "./styles";

type ThermometerProp = {
  date: null | Date;
};

const Thermometer: React.FC<ThermometerProp> = ({ date }) => {
  const actualDate = new Date();
  const newDate = date || new Date();
  const difference = differenceInSeconds(newDate, actualDate);
  const days = Math.trunc(difference / (60 * 60 * 24));
  const diffDay = days < 365 ? days : 365;
  const SliderHeight = (365 - diffDay) * 2;

  console.log({ days, diffDay, SliderHeight });

  return (
    <S.Thermometer>
      <S.Slider SliderHeight={SliderHeight}>
        <S.Circle />
      </S.Slider>
    </S.Thermometer>
  );
};

export default Thermometer;
