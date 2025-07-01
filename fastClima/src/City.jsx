function City({data}){
    const { main, name, weather, sys } = data;

    const iconCode = weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

    const traducaoClima = {
    "clear sky": "Céu limpo",
    "few clouds": "Poucas nuvens",
    "scattered clouds": "Nuvens dispersas",
    "broken clouds": "Nuvens quebradas",
    "shower rain": "Chuva forte",
    "rain": "Chuva",
    "thunderstorm": "Trovoada",
    "snow": "Neve",
    "mist": "Névoa",
    "light rain": "Chuva leve"
    };

    return(
    
        <div className="widgetTemp center">
            <div className="descriptionTemp">
                <h3>O tempo em {name}, {sys?.country} encontra-se em:</h3>
                <p>Temperatura {main?.temp}°C</p>
                <p>Sensação térmica: {main?.feels_like}°C</p>
                <p>Clima: {traducaoClima[weather?.[0]?.description] || weather?.[0].description}</p>
            </div>
                        
            <div className="boxTemp">
                <img className="cloudIcon" src={iconUrl} alt="" />
                <h2>{Math.round(main?.temp)}°</h2>
                <p>{traducaoClima[weather?.[0]?.description] || weather?.[0]?.description}</p>
            </div>
        </div>
    )
}

export default City;