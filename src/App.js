import React from 'react';
import './App.css';
import Input from './components/Input';
import TodoItem from './components/TodoItem';

const todoList = [{
  item: "todo",
  done: false,
  id: 2341234
}, {
  item: "todo2",
  done: true,
  id: 53452354
}]

function App() {
  return (
    <div className="App">
      <div className="app__container" >
        <div className="app_todoContainer" >
          {
            todoList.map(item => (
              <TodoItem
              name={item.item}
              done={item.done}
              id={item.id}
              />
            ))
          }
          <Input />
        </div>
      </div>
    </div>
  );
}

export default App;
