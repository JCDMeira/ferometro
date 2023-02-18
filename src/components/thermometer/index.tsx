import React from "react";

import * as S from "./styles";

const Thermometer: React.FC = () => {
  return (
    <S.Thermometer>
      <S.Slider SliderHeight={100}>
        <S.Circle />
      </S.Slider>
    </S.Thermometer>
  );
};

export default Thermometer;
