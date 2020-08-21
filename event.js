const panelBtn1=document.querySelector(".panelBtn1");
const panelBtn2 = document.querySelector(".panelBtn2");
const panelBtn3 = document.querySelector(".panelBtn3");
const part1=document.querySelector(".part1");
const part2 = document.querySelector(".part2");
const part3 = document.querySelector(".part3");

panelBtn1.addEventListener("click", ()=>{
    part1.scrollIntoView({behavior:"smooth"});
})
panelBtn2.addEventListener("click", () => {
  part2.scrollIntoView({ behavior: "smooth" });
});
panelBtn3.addEventListener("click", () => {
  part3.scrollIntoView({ behavior: "smooth" });
});