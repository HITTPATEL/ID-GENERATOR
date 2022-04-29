

function myFun(container,img,name,batch,id){

   
   container.innerHTML=null
    let box= document.createElement("div");
    let h1=document.createElement("h1")
    h1.innerText="MASAI STUDENT"
    let img1=document.createElement("img");
    img1.src=img
    let p1=document.createElement("h3")
    p1.innerText=`Name :- ${name}`
    let p2=document.createElement("h3")
    p2.innerText=`Batch :- ${batch}`
    let p3=document.createElement("h3")
    p3.innerText=`Student id :- ${id}`
  box.append(h1,img1,p1,p2,p3,)
 container.append(box)
    
}

export {myFun}