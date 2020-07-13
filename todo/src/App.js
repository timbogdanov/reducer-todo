import React, { useReducer, useState, useEffect } from 'react';
import { initialState, reducer } from './reducers/todoReducer';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChanges = (e) => {
    setInputValue(e.target.value);
  };

  const handleCompleted = (id) => {
    dispatch({ type: 'TOGGLE_TODO', payload: { id } });
  };

  const filterTodos = () => {
    dispatch({ type: 'FILTER_TODOS' });
  };

  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <div className='App'>
      <input className='input' value={inputValue} onChange={handleChanges} />
      <button
        className='addTodo'
        onClick={() => dispatch({ type: 'ADD_TODO', payload: inputValue })}
      >
        Add Todo
      </button>
      <button className='filterTodos' onClick={() => filterTodos()}>
        Filter out Completed
      </button>

      {state.map((todo) => (
        <div className='todoItem' key={todo.id}>
          <span
            style={
              todo.completed
                ? { textDecoration: 'line-through' }
                : { textDecoration: 'none' }
            }
          >
            {todo.item}
          </span>
          <button
            className='completeTodo'
            onClick={() => handleCompleted(todo.id)}
          >
            &#10003;
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;
