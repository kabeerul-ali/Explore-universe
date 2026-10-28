import { getplanatedata } from "../operations/generate.js";
import {cleandes}from"./pages.js";
const parent = document.querySelector(".planate");
const mname=document.querySelector("#name");
export async function showallimage() {
  const planatname = sessionStorage.getItem("planatename");
  sessionStorage.clear();
  const data = await getplanatedata(planatname);
  //setname url
  mname.innerHTML+=decodeURIComponent(planatname);
  //console.log(data);
  for (const i of data) {
    const img = document.createElement("div");
    img.setAttribute("class", "img");
    img.style.backgroundImage = `url(${i.imgurl})`;
    parent.appendChild(img);
    const title = document.createElement("div");
    title.setAttribute("class", "title");
    title.innerText = i.title;
    parent.appendChild(title);
    const des = document.createElement("div");
    des.setAttribute("class", "des");
    const des1=cleandes(i.des);
    des.innerText = des1;
    parent.appendChild(des);
    const keyword = document.createElement("div");
    keyword.setAttribute("class", "names");
    keyword.innerText = i.keyword;
    parent.appendChild(keyword);
    const date = document.createElement("div");
    date.setAttribute("class", "date");
    date.innerText = i.date;
    parent.appendChild(date);
  }
}
showallimage();
