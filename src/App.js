import React, { useEffect, useState } from 'react';
import Todo from './Todo'
import './App.css';
import { Button, FormControl, InputLabel,  Input, ListItem, } from '@material-ui/core';
import db from './firebase';
import firebase from 'firebase';
import bg from './todoapp_bg.jpg'


function App() {
  const [todos, setTodos] = useState([]); 
  const [input, setInput] = useState('');
  
  useEffect(() => {
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => ({id: doc.id, todo: doc.data().todo})))
    })
  }, []); 

  const addTodo = (event) => {
    event.preventDefault(); 
    
    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp() 
    })
    
    
    setInput('');
  }
    
    return (
    <div className="App" style={{ backgroundImage: `url(${bg})` }}>
    
      <h1>wolvhe TODO webapp</h1>
      <form>
            <FormControl>
              <InputLabel>Write a todo !</InputLabel>
              <Input value={input} onChange={event => setInput(event.target.value)}/>  
              
            </FormControl>  

            <Button type="submit" onClick={addTodo} variant="contained" color="primary" disabled={!input}>
              ADD
            </Button>
      </form>
      
      <ul>
         {todos.map(todo => (
            <Todo todo={todo}/>
            // <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
