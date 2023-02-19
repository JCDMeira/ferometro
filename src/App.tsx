import { useEffect, useState } from "react";
import { format, addDays } from "date-fns";
import { Clock } from "./components/Clock";
import Thermometer from "./components/thermometer";
import { GlobalStyle } from "./styles/global";
import Footer from "./components/Footer";
import Header from "./components/Header";
import * as S from "./styles/style";

function App() {
  const startDate = (() => {
    const newStartDate = localStorage.getItem("date") || null;
    return newStartDate ? newStartDate : null;
  })();

  const [date, setDate] = useState<null | Date>(
    !!startDate ? new Date(startDate) : null
  );
  const [start, setStart] = useState(false);
  console.log({ startDate, date });

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

  const minDate = format(addDays(new Date(), 1), "yyyy-MM-dd");

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
                <p>
                  Suas próximas férias começam no dia{" "}
                  {format(new Date(date), "dd-MM-yyyy")}
                </p>
              )}
              <Clock date={date} />
              <S.ResetButton
                onClick={() => {
                  setDate(null);
                  setStart(false);
                }}
              >
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
