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

export async function tvon(data, tv) {
  let imageind = [];
  for (let i = 0; i < data.media.length; i++) {
    if (data.media[i] === "image") {
      imageind.push(i);
    }
  }
  if (imageind.length === 0) {
    console.warn("No images found");
    return "No images";
  }
  //create all as element as div
  for (const i of imageind) {
    const element = document.createElement("div");
    element.setAttribute("id", `img${i}`);
    element.setAttribute("class", "img");
    element.style.zIndex = i;
    element.style.backgroundImage = `url(${data.url[i]})`;
    const name = document.createElement("h3");
    name.innerText = data.title[i];
    name.style.zIndex = i;

    tv.appendChild(element);
    element.appendChild(name);
  }
  let i = 0;
  let timeoutid;
  let innertimeid;
  let temptime;
  let temptime2;
  function slides() {
    let ind = imageind[i];
    let nextind = imageind[(i + 1) % imageind.length];
    let element = document.querySelector(`#img${ind}`);
    let nextelment = document.querySelector(`#img${nextind}`);
    tv.querySelectorAll(".img").forEach((element) => {
      element.style.animation = "none";
      element.style.display = "none";
    });
    element.style.display = "block";
    element.style.animation = "come 5000ms ease-in-out 1";
    temptime2 = setTimeout(() => {
      clearTimeout(temptime2);
      nextelment.style.display = "block";
    }, 4100);
    innertimeid = setTimeout(() => {
        element.style.display = "none";
        document.querySelector(`#${element.id} h3`).style.display='none';       
      nextelment.style.animation = "come 5000ms ease-in-out 1";

      clearTimeout(innertimeid);
    }, 5000);
    //update i
    i = (i + 2) % imageind.length;
    clearTimeout(timeoutid);
    timeoutid = setTimeout(slides, 10000);
    //console.log(timeoutid);
  }
  slides();

  return "done";
}
