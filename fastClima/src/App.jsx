import "./App.css";
import BackgroundVideo from "./BackgroundVideo";
import { useState } from "react";
import City from "./City";
import Search from "./Search";

function App() {
  const [city, setCity] = useState(null);
  const [erro, setErro] = useState(null);
  const [sugestoes, setSugestoes] = useState([]);
  return (
    <div className="App">
      <BackgroundVideo />
      <Search
        setCity={setCity}
        setErro={setErro}
        setSugestoes={setSugestoes}
        sugestoes={sugestoes}
      />

      {erro ? (
        <div className="erroMsg center">❌ {erro}</div>
      ) : city ? (
        <City data={city} />
      ) : (
        <div className="infoMsg center">
          <h3>🔍 Pesquise uma cidade para ver o clima!</h3>
        </div>
      )}

      <div className="footer">
        <p>
          Desenvolvido por Álex Bryan. Focado em Web Design e Integração de API.
        </p>
        <p>E-mail: bryanncode@gmail.com @bryanndesign @alexbryannt </p>
      </div>
    </div>
  );
}

export default App;
