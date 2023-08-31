import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Add from './component/Add';
import View from './component/View';
import Edit from './component/Edit';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Add/>}></Route>
        <Route path='/view' element={<View/>}></Route>
        <Route path='/edit/:id' element={<Edit/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
