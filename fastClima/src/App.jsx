import './App.css'
import BackgroundVideo from './BackgroundVideo';
import { useState } from 'react';
import City from './City';
import Search from './Search';

function App() {
  const[city, setCity] = useState(null)
  const [erro, setErro] = useState(null)
  const [sugestoes, setSugestoes] = useState([])
  return (
 <div className="App">

      <BackgroundVideo/>
      <Search setCity={setCity} setErro={setErro} setSugestoes={setSugestoes} sugestoes={sugestoes} />

      {erro ? (
        <div className="erroMsg center">❌ {erro}</div>
      ) : city ? (
        <City data={city} />
      ) : (
        <div className="infoMsg center">🔍 Pesquise uma cidade para ver o clima!</div>
      )}
    </div>
  )
}

export default App;
