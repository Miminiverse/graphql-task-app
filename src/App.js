
import './App.css';
import { Route, Routes } from "react-router-dom";
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import BottomNav from './components/BottomNav';

function App() {
  
  return (

    <div className='app-wrapper'>
        <h1>Task Manager</h1>
        <Routes>
          <Route path="/" element={<TodoList />} />
          <Route path="/new" element={<AddTodo  /> } />
        </Routes>
    </div>

);
}

export default App;
