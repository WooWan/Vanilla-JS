const btn=document.querySelector(".addBtn"),
  toDoInput=document.querySelector(".todo__input"),
  toDoList=document.querySelector(".todo__list"),
  toDoForm=document.querySelector(".todo__form");

const TODOS_LS='toDos';
let toDos=[];
function deletedToDo(event){
  // console.dir(event.target.parentNode);
  const li=event.target.parentNode;
  toDoList.removeChild(li);
  const cleanToDOS=toDos.filter((element)=>{
    console.log(element.id, li.id)
    return element.id!==parseInt(li.id);
  });
  console.log(cleanToDOS);
  toDos=cleanToDOS;
  saveToDos();
}
function saveToDos(){
  localStorage.setItem(TODOS_LS,JSON.stringify(toDos));
}

function paintToDo(text){
  //text= 사용자가 todo에 입력한 값
  const li=document.createElement("li");
  const span=document.createElement("span");
  const delBtn=document.createElement("button");
  delBtn.addEventListener("click",deletedToDo)
  const newID=toDos.length+1;
  span.innerHTML=text;
  // delBtn.addEventListener("click",deletedToDo);
  delBtn.innerHTML="X";
  li.appendChild(span);
  li.appendChild(delBtn);
  li.id=newID;
  toDoList.appendChild(li);
  const toDoObj={
    text:text,
    id:newID,
  };
  toDos.push(toDoObj);
  saveToDos();
}
function handleSubmit(event){
  event.preventDefault();
  const currentValue=toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value="";
}
function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach((ele)=>{
      paintToDo(ele.text);
    })
  }
}
function init(){
  loadToDos();
  toDoForm.addEventListener("submit",handleSubmit);
}

init();