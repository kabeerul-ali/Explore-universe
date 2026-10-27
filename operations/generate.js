export function genvideo(url, parent, title) {
  parent.innerHTML = "";
  const element = document.createElement("video");
  element.src = url;
  element.autoplay = true;
  element.loop = true;
  element.muted = false;
  element.controls = false;
  parent.appendChild(element);
  const element1 = document.createElement("h3");
  element1.innerText = title;
  parent.appendChild(element1);
  return "Done";
}
export function genimage(url, parent, title) {
  parent.innerHTML = "";
  const element = document.createElement("img");
  element.src = url;
  parent.appendChild(element);
  const element1 = document.createElement("h3");
  element1.innerText = title;
  parent.appendChild(element1);
  return "Done";
}


