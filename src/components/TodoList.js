
import { Typography, Button } from '@mui/material';
import { ALL_TODOS } from '../lib/api';
import { useQuery } from '@apollo/client';
import TodoListItem from './TodoListItem';

const TodoList = () => {
    const { data, loading, error} = useQuery(ALL_TODOS)
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error...</p>
    return (
        <>
        <Button href="/new" type='button' variant="contained">Add Task</Button>
        <br />
        <div>
            <h2>Total Tasks: {data.posts.length}</h2>
        </div>
        <br/>
        <div>
          {  data.posts.length ? 
          (data.posts.map((todo) => {
            return (
                <TodoListItem key={todo.id} todo={todo} getTodo={ALL_TODOS}/>
            )
          })) : null
          }
        </div>
        </>
    )
}

export default TodoList