// taken verkrijgen

const getTasks = async function() {
  try {
    const tasksUrl =
      'https://wincacademydatabase.firebaseio.com/raimon/tasks.json';
    const result = await fetch(tasksUrl, { method: 'GET' });
    const data = await result.json();
    console.log('the tasks', data);
    let tasks = Object.keys(data).map(key => ({
      id: key,
      description: data[key].description,
      done: data[key].done
    }));
    console.log('After the tasks array', tasks);
    return tasks;
  } catch (error) {
    console.log(error);
  }
};

getTasks();

// // Post function met handmatige invoer
// const postTask = async function() {
//   const postUrl =
//     'https://wincacademydatabase.firebaseio.com/raimon/tasks.json';
//   try {
//     const resultTask = await fetch(postUrl, {
//       method: 'POST',
//       body: JSON.stringify({ description: 'test123', done: 'false' })
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

// postTask();

// Post function met invoer vanuit ToDo lijst
const postTask = async function() {
  const postUrl =
    'https://wincacademydatabase.firebaseio.com/raimon/tasks.json';
  try {
    const resultTask = await fetch(postUrl, {
      method: 'POST',
      body: JSON.stringify({
        description: document.getElementByID('input').value,
        done: 'false'
      })
    });
  } catch (error) {
    console.log(error);
  }
};

// deleteTask(); nog maken

// }
// const result = await fetch(newTasksapiUrl, {
//   method: 'POST',
//   body: { description: ToDo, done: false }
// });


