
const clock= document.querySelector("h1");
function time(){
  const date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let second = date.getSeconds();
  if(hours>12){
    hours=hours-12;
  }
  if(second<10) second='0'+second;
  if(minutes<10) minutes= '0'+minutes;
  clock.innerHTML = `${hours}:${minutes}:${second}`;
}
setInterval(time,1000);

