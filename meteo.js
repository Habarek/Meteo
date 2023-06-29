// création d'une fonction météo

let meteo = async () => {
  // Je crée une variable appelé response qui stock les informations de l'url de l'API
  const response = await fetch(
    // url de l'API en entrant les coordonné latitude et longitude pour choisir la ville et entrée la APIKey

    `https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=ac1c129ec60cf8ea6784f12adee4b904&units=metric&lang=fr`
  );
  //   console.log(response);

  //   création de la variable infoMeteo pour stocker l'ensemble des informations dont j'ai besoin
  const infoMeteo = await response.json();
  console.log(infoMeteo);

  // Je stock la température dans la variable nommé température
  let temperature = infoMeteo.main.temp;
  console.log(temperature);
  //   Je stock le taux d'humidité dans la variable nommé humidite
  let humidite = infoMeteo.main.humidity;
  console.log(humidite);
  // Je stock les informations du tableau d'objet
  let description = infoMeteo.weather[0];
  console.log(description);
  //   Je stock la description du ciel dans la variable nommé ciel
  let ciel = description.description;
  console.log(ciel);

  //   Je crée une variable appelé ville pour stocker le nom de la ville
  let ville = infoMeteo.name;
  //   console.log(ville);

  const iconElement = document.getElementById("weather-icon");

  // Pour récupérer l'icône de l'API en fonction de son code
  const icon = infoMeteo.weather[0].icon;
  const iconUrl = `http://openweathermap.org/img/wn/${icon}.png`;
  iconElement.src = iconUrl;

  let villeEtTemperature = document.getElementById("temperature");

  // Affichage de la météo dans le fichier HTML
  villeEtTemperature.innerHTML =
    ville + " " + temperature + "°C " + " " + humidite + "% d'humidité " + ciel;
};
meteo();
