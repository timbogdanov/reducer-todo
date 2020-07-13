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

  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <div className='App'>
      <input value={inputValue} onChange={handleChanges} />
      <button
        onClick={() => dispatch({ type: 'ADD_TODO', payload: inputValue })}
      >
        Add Todo
      </button>

      {state.map((todo) => (
        <div key={todo.id}>
          <span
            style={
              todo.completed
                ? { textDecoration: 'line-through' }
                : { textDecoration: 'none' }
            }
          >
            {todo.item}
          </span>
          <button onClick={() => handleCompleted(todo.id)}>Complete!</button>
        </div>
      ))}
    </div>
  );
}

export default App;
