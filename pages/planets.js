import {getplanatedata} from"../operations/generate.js";

export async function showallimage(){
    const planatname=sessionStorage.getItem("planatename");
    sessionStorage.clear();
    const data=await getplanatedata("sun");
    console(data);
   

}
showallimage();