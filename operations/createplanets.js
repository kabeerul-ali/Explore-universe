import { spaceImages, getimage } from "./imagefech.js";
export function createplanets(uni) {
  for (const i of spaceImages) {
    const planets = document.createElement("div");
    planets.setAttribute("class", "planets");
    const img = document.createElement("div");
    img.setAttribute("class", "img");
    //give red bg for sun
    if (i.name== "Sun") {
      img.style.backgroundColor = "#3d0404";
      console.log("sun mil gya");
    }
    const photo = document.createElement("img");
    photo.setAttribute("src", i.url);
    img.appendChild(photo);
    const heading = document.createElement("h2");
    heading.innerText = i.name;
    planets.appendChild(img);
    planets.appendChild(heading);
    uni.appendChild(planets);
  }
  return "done";
}
