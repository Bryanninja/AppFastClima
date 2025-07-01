import { useState } from "react";

function Search({ setCity, setErro, setSugestoes, sugestoes }) {
  const [inputValue, setInputValue] = useState(""); 

  function searchInput(e) {
    e.preventDefault();

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=4d8fb5b93d4af21d66a2948710284366&units=metric`;
    fetch(url)
      .then(res => {
        if (!res.ok) {
          throw new Error("Cidade não encontrada");
        }
        return res.json();
      })
      .then(data => {
        setCity(data);
        setErro(null);
        setSugestoes([]);
      })
      .catch(err => {
        setErro(err.message);
        setCity(null);
        setSugestoes([]);
      });
  }

  async function buscarSugestoes(e) {
    const value = e.target.value;
    setInputValue(value);

    if (value.length < 2) {
      setSugestoes([]);
      return;
    }

    try {
      const res = await fetch(
        `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?namePrefix=${value}&limit=5`,
        {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': '50690fcf0cmshfc2a0dc17900935p1a7521jsn81320e968d2d',
            'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com',
          },
        }
      );

      const json = await res.json();
      const cidades = json.data.map(c => `${c.city}, ${c.countryCode}`);
      setSugestoes(cidades);
    } catch (err) {
      console.error("Erro ao buscar sugestões:", err);
      setSugestoes([]);
    }
  }

  function selecionarSugestao(sugestao) {
    setInputValue(sugestao);
    setSugestoes([]);
  }

  return (
    <div className="searchHeader center">
      <div className="headerLogo">
        <h2>FastClima</h2>
      </div>
      <form className="barSearch" onSubmit={searchInput} autoComplete="off">
        <input
          onChange={buscarSugestoes}
          type="text"
          name="climaSearch"
          placeholder="Digite a Cidade..."
          value={inputValue}
          required
        />
        <input type="submit" value="Buscar" />

        {sugestoes.length > 0 && (
          <ul className="sugestoesLista">
            {sugestoes.map((sugestao, index) => (
              <li
                key={index}
                onClick={() => selecionarSugestao(sugestao)}
                className="sugestaoItem">
                {sugestao}
              </li>
            ))}
          </ul>
        )}
      </form>
    </div>
  );
}

export default Search;
