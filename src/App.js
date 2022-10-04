import './App.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home'; 
import View from './pages/View';
import Edit from './pages/Edit';
import Cadastro from './pages/Cadastro';

function App() {
   return (
     <div>
       <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/cadastro" element={<Cadastro/>} />
        <Route path="/view/:id" element={<View/>}/>
        <Route path="/edit/:id" element={<Edit/>}/>
       </Routes>
       
     </div>
   );
}

export default App;
