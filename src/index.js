// import navbar from "../components/navbar.js"
import "../styles/style.css"
// document.getElementById("navbar").innerHTML=navbar();
// console.log(navbar())

import {myFun}  from "../components/fetch.js"

document.querySelector("form").addEventListener("submit",addData)
function addData(){
    event.preventDefault()
    console.log("hittu")
    let img=document.getElementById("img").value; 
    let name=document.getElementById("name").value; 
    let batch=document.getElementById("batch").value; 
    let id=document.getElementById("id").value; 
   let container= document.querySelector("#container")

    myFun(container,img,name,batch,id,container)
   
  img.innerText=null;
  name.innerText=null;
  batch.innerText=null;
  id.innerText=null;
}
    


