import { useState } from "react";
import { format, addDays } from "date-fns";
import { Clock } from "./components/Clock";
import Thermometer from "./components/thermometer";
import { GlobalStyle } from "./global";
import Footer from "./components/Footer";
import Header from "./components/Header";

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
        <div className="App">
          <div>
            {!!date ? (
              <>
                <h1>Resete a data</h1>
                <button onClick={() => setDate(null)}>Resetar</button>

                <p>
                  Suas próximas férias começam no dia{" "}
                  {format(new Date(date), "dd-MM-yyyy")}
                </p>
                <Clock date={date} />
                <Thermometer date={date} />
              </>
            ) : (
              <>
                <h1>Insira a data das suas próximas férias</h1>
                <input
                  type="date"
                  onChange={(e) => handleDate(e)}
                  min={minDate}
                />
                <p>Insira a data de início da sua próxima férias</p>
              </>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
