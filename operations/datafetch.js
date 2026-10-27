const astronomyurl=`https://science.nasa.gov/wp-json/wp/v2/apod-basic/${'?count=10'}` //  "?count=10",

export async function getastronomy() {
    let d=await fetch(astronomyurl);
    let data= await d.json();
    let mediatyp=[];
    let url=[];
    let title=[];
    let date=[];
    for (const i of data) {
        mediatyp.push(i.media_type);
        url.push(i.hdurl);
        title.push(i.title);
        date.push(i.date);        
    }
    let obj={
        date:date,
        media:mediatyp,
        title:title,
        url:url,
        data:data
    }
    return obj;

    
}