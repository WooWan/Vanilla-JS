
const open_btn=document.querySelector(".open_btn");
const modal=document.querySelector(".modal");
const overlay=document.querySelector(".overlay");
const close_btn=document.querySelector(".close_btn");
const content=document.querySelector(".content");

const open=() =>{
  overlay.classList.toggle("hidden");
  content.classList.toggle("active");
}
const close = () => {
  overlay.classList.toggle("hidden");
  content.classList.toggle("active");
};

open_btn.addEventListener("click", open);
overlay.addEventListener("click",close);
close_btn.addEventListener("click",close);
