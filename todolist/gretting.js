const form =document.querySelector(".form"),
  input=document.querySelector("input"),
  greeting=document.querySelector(".greeting");

function preventEvent(event){
  event.preventDefault();
  form.classList.toggle("showing");
  localStorage.setItem('name',input.value);
  paintGreeting(input.value);
}
function paintGreeting(name){
  greeting.classList.toggle("showing");
  greeting.innerHTML = `Hello ${name}`;
}

function checkUser(){
  const currentuser=localStorage.getItem("user");
  console.log(currentuser);
  if(currentuser==null){
    //등록된 유저가 없을 경우
    form.addEventListener("submit", preventEvent);
  }else{
    //paintGreeting
    paintGreeting(currentuser);
    console.log("sdds");
  }
}
checkUser();