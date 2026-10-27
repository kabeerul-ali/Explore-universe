import { getastronomy } from "../operations/datafetch.js";

export async function detail() {
  const data = await getastronomy();
  const index = sessionStorage.getItem("index");
  const backbtn = document.querySelector(".backbtn");
  const title = document.querySelector("#dtitle");
  const des = document.querySelector("#ddes");
  const img = document.querySelector(".img");
  const date = document.querySelector("#ddate");

  //btnfunction
  backbtn.addEventListener("click", () => {
    window.location.href="../index.html";
  });

  const tempd = data.data[index].explanation;
  const tempd1 = cleandes(tempd);
  title.innerText = data.title[index];
  des.innerText = tempd1;
  img.style.backgroundImage = `url(${data.data[index].hdurl})`;
  date.innerText = data.date[index];
}
detail();

function cleandes(data) {
  let skip = false;
  let cleandata = "";
  for (const i of data) {
    if (i == "<") {
      skip = true;
    } else if (i == ">") {
      skip = false;
      continue;
    }

    if (!skip) {
      cleandata += i;
    }
  }
  return cleandata;
}
