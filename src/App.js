import './App.css';
import MainDashboard from './components/MainDashboard';
import { DndContext, closestCenter } from '@dnd-kit/core';
import { arrayMove, SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'
import Boards from './components/Boards'
import { useState } from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Board from './components/Board';

function App() {
  
  const [langs, setLang] = useState(['JS', 'PYTHON', 'TS'])

  

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainDashboard />} />
          <Route path='/:name' element={<Board />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
