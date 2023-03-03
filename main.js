

let form = document.querySelector(".form");

form.addEventListener("submit",function(rk){
    rk.preventDefault();
let input = document.querySelector("input").value;
let result = document.querySelector(".result");
let date = new Date(input);

let date1= new Date();

let oldYear = date.getFullYear();

let cYear = date1.getFullYear();


let oo =cYear-oldYear;

result.innerHTML=`${oo}`;


})

// let date = new Date();

// console.log(date.toLocaleString());

// let input = document.querySelector("input").value;