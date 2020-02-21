// show date
const dateElement = document.getElementById('date');
let options = { weekday: 'long', month: 'short', day: 'numeric' };
let today = new Date();
dateElement.innerHTML = today.toLocaleDateString('en-US', options);

// clear all
const clear = document.querySelector('.clear');
clear.addEventListener('click', function() {
  localStorage.clear();
  location.reload();
});

// get Elements

// const dateElement = document.getElementById('date');
// const list = document.getElementById('list');
const input = document.getElementById('input');
const list = document.getElementById('list');
// classes names
// const check = "css voor check"
// const uncheck = "css voor uncheck"
// const lineThrough = "css voor linethrough"

// create variables
let listArray = [];
let id = 0;

// restore from localstorage
// const loadList = function(array) {
//   array.forEach(item => {
//     addToDo(item.description, item.id, item.done, item.thrash);
//   });
// };

// let data = localStorage.getItem('ToDo');
// if (data) {
//   listArray = JSON.parse(data);
//   id = listArray.length;
//   loadList(listArray);
// } else {
//   listArray = [];
//   id = 0;
// }

// save to localstorage
localStorage.setItem('key', 'value');
let variable = localStorage.getItem('key');

// localStorage.setItem('ToDo', JSON.stringify(list)); // add this everywhere listArray is updated

// insertAdjacentHTML to add new tasks
// const element = getElementById('element');
// element.insertAdjacentHTML(position, something);

// addToDo function
const addToDo = function(toDo, id, done, thrash) {
  const list = document.getElementById('list');

  if (thrash) {
    return;
  }

  //   const DONE = done ? check : uncheck;
  const LINE = done ? lineThrough : '';

  const text = `<li class="item">
    <input type="checkbox" class="checkbox" id="${id}" task="complete"/>
    <p class="text" ${LINE}> ${toDo} </p>
    
              <input
                type="button"
                class="delete"
                id="delete1"
                task="delete"
                id="${id}"
              />
            

    </li>`;

  list.insertAdjacentHTML('beforeend', text);
};

// testje addToDo('drink coffee', 0, false, false);

// add item to list when user presses button
const addEventListenerToAddbutton = function() {
  document.getElementById('add-item').addEventListener('click', function() {
    let input = document.getElementById('input');
    let toDo = input.value;

    // if input is not empty
    if (toDo) {
      addToDo(toDo, id, false, false);
      listArray.push({
        id: id,
        description: toDo,
        done: false,
        thrash: false
      });
      localStorage.setItem('ToDo', JSON.stringify(listArray));
      id++;
    }
    input.value = ''; //tekstveld is leeg bij drukken enter
  });
};

// add item to list when user presses enter
const addEventListenerToEnter = function() {
  document.addEventListener('keyup', function(event) {
    if (event.keyCode == 13) {
      let toDo = input.value;

      // if input is not empty
      if (toDo) {
        addToDo(toDo, id, false, false);
        listArray.push({
          id: id,
          description: toDo,
          done: false,
          thrash: false
        });
        localStorage.setItem('ToDo', JSON.stringify(listArray));
        id++;
      }
      input.value = ''; //tekstveld is leeg bij drukken enter
    }
  });
};

// function complete to do
// Element.classList.toggle gebruiken voor checkbox --> css wijzigen
function completeToDo(element) {
  // element.classlist.toggle(check);
  // element.classlist.toggle(uncheck);
  // element.parentNode.querySelector('.text').classlist.toggle(lineThrough);
  listArray[element.id].done = listArray[element.id].done ? false : true;
}

// remove item
const removeToDo = function(element) {
  element.parentNode.parentNode.removeChild(element.parentNode);
  // listArray[element.id].thrash = true;
};

// target element created dynamically

list.addEventListener('click', function(event) {
  const element = event.target; // return clicked element inside the list
  const elementTask = element.attributes.task.value; // delete or complete
  if (elementTask == 'complete') {
    completeToDo(element);
  } else if (elementTask == 'delete') {
    removeToDo(element); // dit verwijdert alleen de knop
  }
  localStorage.setItem('ToDo', JSON.stringify(listArray));
});

// array maken waar lijst-items in komen, en die naar API kan
//
// let id = 0;
// list = [{},{}, ... ];

// list [0]

// {
// id: "hash",
// description: "drink coffee",
// done: false,
// thrash: false
// }
const addTasksToList = async function() {
  const tasks = await getTasks();

  tasks.forEach(task => {
    addToDo(`${task.description}`);
  });
};

addTasksToList();
addEventListenerToEnter(); // evt na DOM content loaded
addEventListenerToAddbutton();
