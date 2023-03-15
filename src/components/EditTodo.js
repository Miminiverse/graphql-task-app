import React, { useState } from 'react'
import { useMutation } from '@apollo/client'
import { List, ListItemButton, ListItemIcon, ListItemText, Typography, Stack, Button, Modal, Box, FormControl, OutlinedInput, InputLabel } from '@mui/material';


const EditTodo = ({open, handleClose, handleOnChange, handleUpdate}) => {

    return (
    <>
    <Modal open={open} onClose={handleClose}
    aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description">
        <Box>
            <FormControl fullWidth sx={{ my: 1 }}>
                <InputLabel sx={{color: '#000000'}}>Title</InputLabel>
                <OutlinedInput
                    onChange={handleOnChange}
                    name='title'
                    label="title"
                    sx={{color: "#000000"}}
                    />
            </FormControl>
            <FormControl fullWidth sx={{ my: 1 }}>
                <InputLabel sx={{color: '#000000'}}>Assigned To</InputLabel>
                <OutlinedInput
                    onChange={handleOnChange}
                    name='assignedTo'
                    label="assignedTo"
                    sx={{color: "#000000"}}
                />
            </FormControl>
            <Button href="/" sx={{ my: 1, py: 2 }} fullWidth variant="contained" 
            onClick={handleUpdate}
            type="submit"
            >
                Update
            </Button>
        </Box>
      </Modal>
    </>
    )
}

export default EditTodo