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
export async function getplanatedata(name) {
  const url = `https://images-api.nasa.gov/search?q=${name}`;
  const d = await fetch(url);
  const temp = await d.json();
  const data = temp.collection.items;
  let objects = [];
  for (const cd in data) {
    const isimage = data[cd].data[0].media_type;
    if (isimage == "video") {
      continue;
    }
    //keybord safe
    const keyword = data[cd].data[0].keywords;
    

    const title = data[cd].data[0].title;
    const des = data[cd].data[0].description;
    const date = data[cd].data[0].date_created;

    const imgurl = data[cd].links[0].href;
    objects.push({
      title: title,
      des: des,
      date: date,
      keyword: keyword,
      imgurl: imgurl,
    });
    // console.log(isimage, title, des, date, keyword, imgurl, cd);
    // console.log(isimage);
  }
  //console.log(objects.length);

  return objects;
}
