const btn = document.getElementById("btn")
const container = document.querySelector(".container")
// btn.addEventListener("click", findYum) 
function magic (){
    fetch('https://foodish-api.herokuapp.com/api/')
    .then(res=>res.json())
    .then(data=>{
   container.src=data.image;
    })
}

btn.addEventListener("click",magic);