import {BrowserRouter, Routes, Route} from 'react-router-dom';
import AllFigures from './components/AllFigures';
import NewFigure from './components/NewFigure';
import OneFigure from './components/OneFigure';
import UpdateFigure from "./components/UpdateFigure";

import LogReg from "./views/LogReg"
import Digivolving from './components/Digivolving';


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
<<<<<<< Updated upstream

=======
        <Route path="/c/:category" element={<Category/>}/>
>>>>>>> Stashed changes
        </Routes>
    </div>
    </BrowserRouter>
  );
}

<<<<<<< Updated upstream
export default App; 
//       <Route path="category/:category" element={<OneCategory/>}/>
=======
export default App;                
//<Route path="/category" element={<Category/>}/>
>>>>>>> Stashed changes
