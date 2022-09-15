let imgs = document.getElementsByClassName('image')
let div = document.getElementById("overlay");
 let myImg = document.createElement("img");  
for(let i = 0;i<imgs.length;i++)
{
    imgs[i].addEventListener("click",showing);
    // imgs[i].onclick = showing;
}

function showing(e){
    let imgPath = e.target.src;
    myImg.src = imgPath;
    div.appendChild(myImg);
    div.style.display = 'block';
 
}

div.onclick = ()=>{
    div.style.display = 'none';
    div.innerHTML = "";
}
