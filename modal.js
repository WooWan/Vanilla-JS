
const open_btn=document.querySelector(".open_btn");
const close_btn = document.querySelector(".close_btn");
const popup=document.querySelector(".popup");
const overlay=document.querySelector(".overlay");

open_btn.addEventListener("click", ()=>popup.classList.toggle("active"));
close_btn.addEventListener("click", () => popup.classList.toggle("active"));
overlay.addEventListener("click",()=>popup.classList.toggle("active"));

