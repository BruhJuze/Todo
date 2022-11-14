let test = document.body;
let myDiv = document.getElementById("mainDiv");


myDiv.style.backgroundColor = "yellow";
myDiv.style.height = "auto";
myDiv.style.width = "375px";
myDiv.style.padding = "10px";
myDiv.style.boxShadow = "rgba(0, 0, 0, 0.35) 0px 5px 15px" ;



test.style.backgroundColor = "#666633";

class Todo {
  constructor(what, when, isDone) {
    this.what = what;
    this.when = when;
    this.isDone = isDone;
  }
}

let firstThing = new Todo("Wake up", "06:00", true);
let secondThing = new Todo("Shower", "06:25", true);
let thirdThing = new Todo("Eat breakfast", "06:45", true);
let fourthThing = new Todo("Go to school", "07:15", true);
let fithThing = new Todo("Come home & grind with your boys", "~16:00", false);
let sixthThing = new Todo("sleep and repeat at schooldays", "02:00", false);

let todoschoolday = [
  firstThing,
  secondThing,
  thirdThing,
  fourthThing,
  fithThing,
  sixthThing,
];
let tlength = todoschoolday.length;

localStorage.setItem("todo", JSON.stringify(todoschoolday));

let todoFromls = localStorage.getItem("todo");
console.log("todo", todoFromls);

let objTodo = JSON.parse(todoFromls);

console.log(objTodo);

let ul = document.createElement("ul");
let container = document.createElement("div");
ul.id = "myList";

for (let i = 0; i < tlength; i++) {
  let li = document.createElement("li");
  let myCheckbox = document.createElement("input");
  let myLabel = document.createElement("label");
  myCheckbox.setAttribute("type", "checkbox");

  container.className = "container";

  li.className = "todo_li";
 // ul.classname = "todo_ul" 
  myCheckbox.className = "todo_check";
  myLabel.for = "mycheck";
  myCheckbox.id = "mycheck"

li.innerHTML = todoschoolday[i].what + " at " + todoschoolday[i].when;

myCheckbox.innerHTML = myCheckbox.checked = todoschoolday[i].isDone;

console.log('checked')
 // container.appendChild(ul);
  container.appendChild(li);
  container.appendChild(myCheckbox);
  container.appendChild(myLabel);

  myDiv.appendChild(container);

  
}

myList.appendChild(li);

