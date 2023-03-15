import React, { useState } from 'react'
import { useMutation } from '@apollo/client'
import { CREATE_POST } from '../lib/api';
import {OutlinedInput, FormControl, InputLabel, Button, Box} from '@mui/material'
import { useNavigate } from 'react-router-dom'

const AddTodo = () => {
    const navigate = useNavigate()
    const [todo, setTodo] = useState({})
    const [createPost, { isadding }] = useMutation(CREATE_POST)
    if (isadding) return <p>Adding...</p>

    const handleOnChange = (e) => {
        setTodo({
            ...todo,
            [e.target.name]: e.target.value
        })
    }

    const onClick = (e) => {
        createPost({
            variables: {...todo}
        })
        navigate('/')

    }



    return (
    <Box
    sx={{ maxWidth: '100%'}}>
      <FormControl fullWidth sx={{ my: 1 }}>
        <InputLabel sx={{color: '#000000'}}>Title</InputLabel>
        <OutlinedInput
          onChange={handleOnChange}
          name='title'
          label="title"
          sx={{border: '1px solid #000000'}}
        />
      </FormControl>
      <FormControl fullWidth sx={{ my: 1 }}>
        <InputLabel sx={{color: '#000000'}}>Assigned To</InputLabel>
        <OutlinedInput
          onChange={handleOnChange}
          name='assignedTo'
          label="Assigned To"
          sx={{border: '1px solid #000000'}}
        />
      </FormControl>
       <Button onClick={onClick} type='submit' sx={{ my: 1, py: 2 }} fullWidth variant="contained">Add Task</Button>
    </Box>
  )
}

export default AddTodo