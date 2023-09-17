let btn = document.querySelector("button");

btn.addEventListener("click", () => {
  document.querySelector(".num1").innerHTML = 
    Math.floor(Math.random() * 6 ) + 1;
  document.querySelector(".num2").innerHTML = 
    Math.floor(Math.random() * 6 ) + 1;
  document.querySelector(".num3").innerHTML = 
    Math.floor(Math.random() * 6 ) + 1;
 }
);
