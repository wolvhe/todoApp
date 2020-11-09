// import { ListItem } from '@material-ui/core'

import React, { useState } from 'react';
import './Todo.css';
import { List, ListItem, ListItemText, Button, Modal} from '@material-ui/core';
import db from './firebase'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import EditIcon from '@material-ui/icons/Edit';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      
    },
  }));

function Todo(props) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState('');
    const handleOpen = () => {
        setOpen(true);
    };
        
const updateTodo = () => {
    //update the todo , new i/p text

db.collection('todos').doc(props.todo.id).set({
    todo: input
}, { merge: true});

setOpen(false);
}
    return (
        <List>
            <Modal
                open={open}
                onClose={e => setOpen(false)}
            >
                <form>
                <div className={classes.paper}>
                    <h1>Type to edit</h1>
                    <input placeholder={props.todo.todo} value={input} onChange={event => setInput(event.target.value)}/>
                    <Button type="submit" onClick={updateTodo}>Update it!</Button>
                </div>
                </form>
                
            </Modal>
            
            <ListItem>
                <ListItemText primary={props.todo.todo}  />
            </ListItem>
            <EditIcon color="primary" onClick={e => setOpen(true)}>Edit</EditIcon>
            <DeleteOutlineIcon style={{ color: 'red', fontSize: 30}} onClick={event => db.collection('todos').doc(props.todo.id).delete()} />
        </List>
    )
}

export default Todo


