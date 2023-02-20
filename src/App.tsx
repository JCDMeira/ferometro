import { useEffect, useState } from "react";
import { Clock, Footer, Header, Thermometer } from "./components";
import { GlobalStyle } from "./styles/global";
import {
  defineDefaultData,
  formatData,
  getMinDate,
  getStartDate,
} from "./util";
import { DateType } from "./types";
import * as S from "./styles/style";

function App() {
  const startDate = getStartDate();
  const minDate = getMinDate();

  const [date, setDate] = useState<DateType>(defineDefaultData(startDate));
  const [start, setStart] = useState(false);

  const handleDate = (value: any) => {
    const date = new Date(value.target.value);
    date.setTime(date.getTime() + date.getTimezoneOffset() * 60 * 1000);
    setDate(date);
  };

  const handleSetStartDate = () => {
    if (!date) return;
    const dateString = date.toString();
    setStart(true);
    localStorage.setItem("date", dateString);
  };

  const handleReset = () => {
    setDate(null);
    setStart(false);
    localStorage.removeItem("date");
  };

  useEffect(() => {
    if (!!date) {
      setStart(true);
    }
  }, []);

  return (
    <>
      <GlobalStyle />
      <Header />
      <main>
        {start ? (
          <S.Content>
            <S.Divider>
              <Thermometer date={date} />
            </S.Divider>

            <S.Divider>
              {!!date && (
                <p>Suas próximas férias começam no dia {formatData(date)}</p>
              )}
              <Clock date={date} />

              <S.ResetButton onClick={handleReset}>
                Mudar data das férias
              </S.ResetButton>
            </S.Divider>
          </S.Content>
        ) : (
          <S.NoContent>
            <h1>Insira a data das suas próximas férias</h1>
            <input type="date" onBlur={(e) => handleDate(e)} min={minDate} />

            <S.ResetButton onClick={handleSetStartDate}>
              Configurar férias
            </S.ResetButton>
          </S.NoContent>
        )}
      </main>
      <Footer />
    </>
  );
}

export default App;
