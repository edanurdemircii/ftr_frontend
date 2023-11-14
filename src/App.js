import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DoktorGirişi from './pages/DoktorGirişi';
import HastaGirişi from './pages/HastaGirişi';
import Hakkında from './pages/Hakkında';



function App() {

  return (
    <div className='App'>

      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/doktorgirisi" element={<DoktorGirişi/>} />
          <Route path="/hastagirisi" element={<HastaGirişi/>} />
          <Route path="/hakkında" element={<Hakkında/>} />
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;