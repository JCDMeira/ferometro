import { useState } from "react";
import "./App.css";
import { compareAsc, format } from "date-fns";

function App() {
  const [date, setDate] = useState<null | Date>(null);

  const handleDate = (value: any) => {
    const date = new Date(value.target.value);
    date.setTime(date.getTime() + date.getTimezoneOffset() * 60 * 1000);
    setDate(date);
  };

  const actualDate = format(new Date(), "yyyy-MM-dd");
  return (
    <>
      <header>
        <h1>Insira a data das suas próximas férias</h1>
        <input type="date" onChange={(e) => handleDate(e)} min={actualDate} />
      </header>
      <main>
        <div className="App">
          <h1>Ferômetro</h1>
          {!!date ? (
            <p>
              Suas próximas férias começam no dia{" "}
              {format(new Date(date), "dd-MM-yyyy")}
            </p>
          ) : (
            <p>Insira a data de início da sua próxima férias</p>
          )}
        </div>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
