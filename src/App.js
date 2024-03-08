import './App.css';

import {AddTodo} from './components/AddTodo'
import {Todos} from './components/Todos'

function App() {
  return (
    <div class="container mx-auto" style={{width: '400px' }}>
        <AddTodo />
    <Todos />
  </div>
    
  );
}

export default App;
