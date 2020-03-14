let todos = [
  { id: 1, text: 'Learn JavaScript', completed: true },
  { id: 2, text: 'Seek for a job', completed: false },
  { id: 3, text: 'forget everything' }
]

function showTodos() {
  // 1.loop over all the todos
  // 2. for every todo:
  // 1.create '<li>{todos.text}</li>'
  //          2. concatenate to the html

  return todos
    .map(
      todo => `<li ${todo.completed ? 'class="done"' : ''}>${todo.text}</li>`
    )
    .join('')
}

document.querySelector('ul').innerHTML = showTodos()
