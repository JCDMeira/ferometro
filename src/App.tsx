import { useState } from "react";
import { format, addDays } from "date-fns";
import { Clock } from "./components/Clock";
import Thermometer from "./components/thermometer";
import { GlobalStyle } from "./styles/global";
import Footer from "./components/Footer";
import Header from "./components/Header";
import * as S from "./styles/style";

function App() {
  const [date, setDate] = useState<null | Date>(null);

  const handleDate = (value: any) => {
    const date = new Date(value.target.value);
    date.setTime(date.getTime() + date.getTimezoneOffset() * 60 * 1000);
    setDate(date);
  };

  const minDate = format(addDays(new Date(), 1), "yyyy-MM-dd");
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>
        {!!date ? (
          <S.Content>
            <S.Divider>
              <Thermometer date={date} />
            </S.Divider>
            <S.Divider>
              <h1>Resete a data</h1>
              <button onClick={() => setDate(null)}>Resetar</button>

              <p>
                Suas próximas férias começam no dia{" "}
                {format(new Date(date), "dd-MM-yyyy")}
              </p>
              <Clock date={date} />
            </S.Divider>
          </S.Content>
        ) : (
          <>
            <h1>Insira a data das suas próximas férias</h1>
            <input type="date" onChange={(e) => handleDate(e)} min={minDate} />
            <p>Insira a data de início da sua próxima férias</p>
          </>
        )}
      </main>
      <Footer />
    </>
  );
}

export default App;
