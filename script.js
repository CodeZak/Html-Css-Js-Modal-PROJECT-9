/***** Methode 1 - my way of doing it*/

let modelBtn = document.querySelector("button")
let cardContent = document.querySelector(".card_content")
let pseudoSection = document.querySelector(":root")
let closeBtn = document.querySelector(".close_btn")

console.log(pseudoSection);

modelBtn.addEventListener("click", function(){
    pseudoSection.style.setProperty('--display', "block")
    cardContent.style.display = "flex"
})


closeBtn.addEventListener("click",function(){
    pseudoSection.style.setProperty('--display', "none")
    cardContent.style.display = "none"

})

/******************Methode 2 // Original - it's simpler and more effective -** i noticed that the page on my method was respending faster though.*/

/* 
const modalBtn = document.querySelector(".modal-btn");
const modal = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-btn");

modalBtn.addEventListener("click", function () {
  modal.classList.add("open-modal");
});
closeBtn.addEventListener("click", function () {
  modal.classList.remove("open-modal");
});
 */