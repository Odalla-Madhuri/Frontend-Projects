let todoList = [
  {
    item: 'Complete Todo App', 
    dueDate: '09-11-2023'
  }, 
  {
    item: 'Advance functions', 
    dueDate: '09-11-2023'
  },
  {
    item: 'Myntra Clone', 
    dueDate: '10-11-2023'
  }
];
displayItems();

function addTodo() {
  let inputElement = document.querySelector('#todo-input');
  let dateElement = document.querySelector('#todo-date');
  let todoItem = inputElement.value;
  let todoDate = dateElement.value;
  todoList.push({item: todoItem, dueDate:todoDate});
  inputElement.value = ''; 
  dateElement.value = '';
  displayItems();
}

function displayItems() {
  let containerElement = document.querySelector('.todo-container');

  let newHtml = '';
  for (let i = 0; i < todoList.length; i++) {
    // let item = todoList[i].item;
    // let dueDate = todoList[i].dueDate;
    let {item, dueDate} = todoList[i];
    newHtml += `
      <span>${item}</span>
      <span>${dueDate}</span>
      <button onClick = "todoList.splice(${i}, 1); displayItems();">Delete</button>
    `;
    containerElement.innerHTML = newHtml;
  }
}