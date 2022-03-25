const form = document.getElementById("input_form");
const list = document.getElementById("todo-list");
const filter = document.getElementById("filter");
const filterButton = document.getElementById("filterButton");

form.addEventListener("submit", addItem);
list.addEventListener("click", handleChange);
filterButton.addEventListener("click", filterItems);

let arr = [];

function addItem(event) {
  event.preventDefault();
  const itemText = form.elements["todoText"].value;

  const item = createListItem(itemText);
  list.appendChild(item);
  arr.push(itemText);

  form.elements["todoText"].value = "";
}

function createListItem(itemText) {
  const todoItem = document.createElement("div");

  // create delete button
  const deleteBtn = document.createElement("input");
  deleteBtn.type = "button";
  deleteBtn.classList.add("todo-list__item-delete-btn");
  deleteBtn.value = "delete";

  // create completed button
  const completeBtn = document.createElement("input");
  completeBtn.type = "button";
  completeBtn.classList.add("todo-list__item-complete-btn");
  completeBtn.value = "completed";

  // create p tag element for the actual text
  const todoText = document.createElement("p");
  todoText.classList.add("todo-list__item-text");
  todoText.innerHTML = itemText;

  todoItem.classList.add("todo-list__item");
  todoItem.appendChild(todoText);
  todoItem.appendChild(deleteBtn);
  todoItem.appendChild(completeBtn);

//   console.log(todoItem);

  return todoItem;
}

function handleChange(event) {
  const btn = event.target.classList[0];
  const item = event.target.parentElement;

  if (btn === "todo-list__item-delete-btn") {
    // delete
    item.remove();
  } else if (btn === "todo-list__item-complete-btn") {
    // complete
    item.children[0].classList.toggle("complete");
  }
}

function filterItems(e) {
  const filterBy = filter.value;
  console.log(filter.value);
  const todos = list.childNodes;

  todos.forEach((todo) => {
    let status = todo.children[0].classList;
    
    if(status === undefined)
        status = "remaining";
    
    if (filterBy === "all") {
        todo.style.display = "block";
    } else {
        console.log(status, filterBy);
      if (status.contains(filterBy)) {
        todo.style.display = "block";
      } else {
        todo.style.display = "none";
      }
    }
  });
}
