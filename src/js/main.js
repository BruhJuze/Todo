let myBody = document.body;
let myDiv = document.getElementById("mainDiv");
let newDiv = document.createElement("div");
newDiv.id = "mainDiv";

window.addEventListener("load", (event) => {
  myforloop();
});
window.startDrag("load", (event) => {
  myforloop();
});

myBody.style.backgroundColor = "#666633";

myDiv.style.backgroundColor = "yellow";
myDiv.style.height = "auto";
myDiv.style.width = "375px";
myDiv.style.padding = "10px";
myDiv.style.position = "absolute";
myDiv.style.boxShadow = "rgba(0, 0, 0, 0.35) 0px 5px 15px";
myDiv.style.overflow = "hidden";

newDiv.style.backgroundColor = "yellow";
newDiv.style.height = "auto";
newDiv.style.width = "375px";
newDiv.style.padding = "10px";
newDiv.style.position = "absolute";
newDiv.style.boxShadow = "rgba(0, 0, 0, 0.35) 0px 5px 15px";
newDiv.style.overflow = "hidden";

class Todo {
  constructor(what, when, isDone, title) {
    this.title = title;
    this.what = what;
    this.when = when;
    this.isDone = isDone;
  }
}

let todoTitle = new Todo("", "", "", "Example");
let firstThing = new Todo("Wake up", "06:00", true);
let secondThing = new Todo("Shower", "06:25", false);
let thirdThing = new Todo("Eat breakfast", "06:45", false);
let fourthThing = new Todo("Go to school", "07:15", false);
let fithThing = new Todo("Come home & grind with your boys", "~16:00", false);
let sixthThing = new Todo("sleep and repeat at schooldays", "02:00", false);
//let testThing = new Todo("test", "test", checkTest);

let todoschoolday = [
  firstThing,
  secondThing,
  thirdThing,
  fourthThing,
  fithThing,
  sixthThing,
];

let clearCheckThing = [];

let tlength = todoschoolday.length;

localStorage.setItem("todo", JSON.stringify(todoschoolday));

let todoFromls = localStorage.getItem("todo");
console.log("todo", todoFromls);

let objTodo = JSON.parse(todoFromls);

console.log(objTodo);

let titleEl = document.createElement("h1");
let ul = document.createElement("ul");
let container = document.createElement("div");
let clearBtn = document.createElement("button");
let clearCheckedBtn = document.createElement("button");
let myLabel = document.createElement("label");
let firstround = 0;
let altChecked = false;
let addBtn = document.createElement("button");

myBody.appendChild(addBtn);

container.className = "container";

function functionClear() {
  if (confirm("Are you sure you want to delete this note?")) {
    myDiv.remove();
  }
}

function altCheck() {
  if (myCheck.check == true) {
    altChecked = true;
  } else {
    altChecked = false;
  }
}

function addNote() {
  //let newDiv = document.createElement("div");
  myBody.appendChild(newDiv);
  let tbxName = document.createElement("input");
  let tbxWhen = document.createElement("input");
  let btnSubmit = document.createElement("button");
  btnSubmit.textContent = "Add";
  newDiv.appendChild(tbxName);
  newDiv.appendChild(tbxWhen);
  newDiv.appendChild(btnSubmit);
  dragElement(newDiv);
}

clearBtn.addEventListener("click", functionClear);
clearCheckedBtn.addEventListener("click", myforloop);
addBtn.addEventListener("click", addNote);
addBtn.addEventListener("click", startDrag);

titleEl.style.paddingLeft = "25px";
clearBtn.style.float = "right";
clearBtn.textContent = "X";
clearBtn.style.margin = "5px";
clearCheckedBtn.style.float = "right";
clearCheckedBtn.textContent = "Clear checked";
clearCheckedBtn.style.margin = "5px";
addBtn.style.float = "right";
addBtn.textContent = "+";
addBtn.style.width = "60px";
addBtn.style.margin = "20px";
addBtn.style.fontSize = "xxx-large";

titleEl.innerHTML = todoTitle.title;
container.appendChild(titleEl);

myDiv.appendChild(clearBtn);

function myforloop() {
  myLabel.innerHTML = "";
   
  for (let i = 0; i < tlength; i++) {
    let li = document.createElement("li");
    let myCheckbox = document.createElement("input");
    //let altCheck = false;

    myCheckbox.setAttribute("type", "checkbox");

    li.className = "todo_li";
    myCheckbox.className = "todo_check";
    myLabel.for = "my_Label";
    myCheckbox.id = "my_check";
    myLabel.id = "my_check";

    if (todoschoolday[i].when == "") {
      li.innerHTML = todoschoolday[i].what + todoschoolday[i].when;
    } else {
      li.innerHTML = todoschoolday[i].what + " at " + todoschoolday[i].when;
    }

    myCheckbox.innerHTML = myCheckbox.checked = todoschoolday[i].isDone;

    container.appendChild(ul);
    ul.appendChild(myLabel);
    li.appendChild(myCheckbox);
    myLabel.appendChild(li);

    // console.log(altCheck);

    if (myCheckbox.checked == true && firstround > 0) {
      li.remove();
    }

    myCheckbox.addEventListener("click", function () {
      if (this.checked) {
        altCheck = true;
        todoschoolday[i].isDone = true;
      } else {
        altCheck = false;
        todoschoolday[i].isDone = false;
      }
    });
    console.log(myCheckbox.checked);
  }
  myDiv.appendChild(container);
  console.log(clearCheckThing);
  myDiv.appendChild(clearCheckedBtn); 
  if(firstround == 0){
  firstround++; 
}
}

function startDrag() {
  dragElement(myDiv);
}

function dragElement(elmnt) {
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = elmnt.offsetTop - pos2 + "px";
    elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
    //give shadow:
    myDiv.style.boxShadow = "rgba(0, 0, 0, 10) 0px 10px 20px";
    newDiv.style.boxShadow = "rgba(0, 0, 0, 10) 0px 10px 20px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmousemove = null;
    //remove shadow:
    myDiv.style.boxShadow = "rgba(0, 0, 0, 0.35) 0px 5px 15px";
    newDiv.style.boxShadow = "rgba(0, 0, 0, 0.35) 0px 5px 15px";
  }
}
