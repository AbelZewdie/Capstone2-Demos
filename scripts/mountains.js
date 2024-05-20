document.addEventListener("DOMContentLoaded", ()=>{



mountainResults.innerHTML = "Hello"

for(mountain of mountainsArray){
  const name = mountain.name;
  const o = option(name)
  mountainList.appendChild(o);
}

mountainList.addEventListener("change", e=>{
  const mountain = mountainsArray[mountainList.selectedIndex - 1]; //getting info

  // name: "Mt. Washington",
  // elevation: 6288,
  // effort: "Strenuous",
  // img: "Washington-StoryImage_2.jpg",
  // desc: "Mt. Washington (6,288 feet) is the highest peak east of the Mississippi River and north of the Carolinas. The upper part of the mountain has a climate similar to that of northern Labrador and supports a variety of alpine flora and fauna.",
  // coords: {
  //     lat: 44.270403,
  //     lng: -71.303501
  // }
mountainResults.innerHTML = `
<br>
<h3>${mountain.name}</h3>
Elevation: ${mountain.elevation} feet<br>
Lattitute/Longitude: (${mountain.coords.lat}, ${mountain.coords.lng})
Effort: ${mountain.effort}<br>
<p> ${mountain.desc} </p>
<img src="./images/${mountain.img}">
`;


  // mountainResults.innerHTML = mountain.name;
});

// mountainsArray
// mountainList
// mountainResults


}); //end loaded