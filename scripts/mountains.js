// function that can "fetch" the sunrise/sunset times
async function getSunsetForMountain(lat, lng) {
  let response = await fetch(
    `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}&date=today`);
  let data = await response.json();
  return data;
}

document.addEventListener("DOMContentLoaded", () => {
  // mountainResults.innerHTML = "Hello"

  for (mountain of mountainsArray) {
    const name = mountain.name;
    const o = option(name)
    mountainList.appendChild(o);
  }

  mountainList.addEventListener("change", async e => {
    const mountain = mountainsArray[mountainList.selectedIndex - 1]; //getting info
    const sunData = await getSunsetForMountain(mountain.coords.lat, mountain.coords.lng);

    mountainResults.innerHTML = `
<br>
    <img src="./images/${mountain.img}">
<br>
<h3>${mountain.name}</h3>
Elevation: ${mountain.elevation} feet<br>
Lattitute/Longitude: (${mountain.coords.lat}, ${mountain.coords.lng})
Effort: ${mountain.effort}<br>
<p> ${mountain.desc} </p>
Sunrise : ${sunData.results.sunrise} <br>
Sunset: ${sunData.results.sunset}
`;
  });
}); //end loaded