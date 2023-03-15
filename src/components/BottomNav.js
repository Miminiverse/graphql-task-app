

import { AddTodo, TodoListItem } from '@mui/icons-material';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import React, { useState } from 'react'
// import { Link } from 'react-router-dom';

const BottomNav = () => {
  const [value, setValue] = useState('task');
  
  return (
    <div>
        <BottomNavigation
            showLabels
            sx={{bgcolor: '#292f38'}}
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
        >
          {/* <BottomNavigationAction href='/' sx={{color: '#ccc'}} label="Tasks" icon={<TodoListItem />} />
          <BottomNavigationAction href='/new ' sx={{color: '#ccc'}} label="AddTask" icon={<AddTodo />} /> */}
        </BottomNavigation>
  </div>
  )
}

export default BottomNav