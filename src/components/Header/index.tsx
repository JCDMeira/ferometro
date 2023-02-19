import React from "react";

import * as S from "./styles";

const Header: React.FC = () => {
  return (
    <S.Header>
      <h1>Ferômetro</h1>
      <p>
        Aqui você consegue saber exatamente quanto tempo falta para as suas
        férias. E se planejar adequadamente para curtir.
      </p>
      <p>
        Se ainda não testou, é só inserir a data das suas próximas férias abaixo
      </p>
    </S.Header>
  );
};

export default Header;
