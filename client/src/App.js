import {BrowserRouter, Routes, Route} from 'react-router-dom';
import AllFigures from './components/AllFigures';
import NewFigure from './components/NewFigure';
import OneFigure from './components/OneFigure';
import UpdateFigure from "./components/UpdateFigure";

import LogReg from "./views/LogReg"
import Category from './components/Category';


function App() {

  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="/login" element={<LogReg/>}/>
        <Route path="/figures/:id" element={<OneFigure/>}/>
        <Route path="/figures/edit/:id" element={<UpdateFigure/>}/>
        <Route path="/" element={<AllFigures/>}/>
        <Route path="/new" element={<NewFigure/>}/>
        <Route path="/category/:category" element={<Category/>}/>
        </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;    
