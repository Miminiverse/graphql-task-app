
import { DELETE_POST, UPDATE_POST } from '../lib/api';
import { useMutation } from '@apollo/client'
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'
import {AssignmentInd, Delete, Update} from '@mui/icons-material';
import { List, ListItemButton, ListItemIcon, ListItemText, Typography, Stack, Button, Modal, Box, FormControl, OutlinedInput, InputLabel } from '@mui/material';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '30%',
    height: '200px',
    padding: '30px',
    boxShadow: 24,
    backgroundColor: '#ffffff',
  };

const TodoListItem = ({todo, getTodo}) => {
    const navigate = useNavigate()
    const [open, setOpen] = useState(false)
    const [editTodo, setEditTodo] = useState({})
    const [deletePost] = useMutation(DELETE_POST,  {
        refetchQueries: [
            {query: getTodo}
        ]
    })

    const handleDelete = () => {
        deletePost ({
            variables: {
                id: todo.id
            }
        })
    }

    const handleOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }


    const handleOnChange = (e) => {
        setEditTodo (
            {
                ...editTodo,
                [e.target.name]: e.target.value
            }
        )
    }


    const [updatePost] = useMutation(UPDATE_POST,  {
        refetchQueries: [
            {query: getTodo}
        ]
    })

    const handleUpdate = (e) => {
        e.preventDefault()
        updatePost({
            variables: {
                id: todo.id,
                ...editTodo
            }
        })
        setOpen(false)
    }
    
    return (
        
        <li className='list-item'>
            <List sx={{ width: '100%'}} component="nav" aria-labelledby="nested-list-subheader"
            >
                <p>
                    Task: {todo.title}
                </p>
                <p>
                    Assigned to: {todo.assignedTo} 
                </p>

            </List>
            <Stack direction="row" spacing={1}>
                <Button className='btn-delete task-btn' onClick={handleDelete}>
                  Delete
                </Button>
                <Button className='btn-delete task-btn'  onClick={handleOpen}>
                    Edit
                </Button>
            </Stack>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
            <Box
            sx={style}>
            <FormControl fullWidth sx={{ my: 1 }}>
                <InputLabel sx={{color: '#000000'}}>Title</InputLabel>
                <OutlinedInput
                    onChange={handleOnChange}
                    name='title'
                    label="Title"
                    sx={{color: '#000000'}}
                />
            </FormControl>
            <FormControl fullWidth sx={{ my: 1 }}>
                <InputLabel sx={{color: '#000000'}}>Assigned To</InputLabel>
                <OutlinedInput
                    onChange={handleOnChange}
                    name='assignedTo'
                    label="Assigned To"
                    sx={{color: '#000000'}}
                />
            </FormControl>
            <Link to='/'>
                <Button onClick={handleUpdate} type='submit' sx={{ my: 1, py: 2 }} fullWidth variant="contained">Update</Button>
            </Link>
            </Box>
          </Modal>
          
        </li>
        
      )
}

export default TodoListItem