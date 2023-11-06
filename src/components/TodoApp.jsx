import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import "../style/todoapp.scss"

const TodoApp = () => {
const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, newTodo]);
      setNewTodo('');
    }
  };

  const handleDeleteTodo = (index) => {
    setTodos(todos.filter((todo, i) => i !== index));
  };

  return (
    <div className='TodoApp'>
      <h1>TODO App</h1>
      <input type="text" value={newTodo} placeholder="Введите текст" onChange={handleInputChange} />
      <button className="btn_add" onClick={handleAddTodo}>Добавить</button>
      <ul>
        <AnimatePresence>
          {todos.map((todo, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.5 }}
            >
              {todo}
              <button className="btn_delete" onClick={() => handleDeleteTodo(index)}>Удалить</button>
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    </div>
  )
};

export default TodoApp;
