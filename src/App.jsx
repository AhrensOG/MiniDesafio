import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Form from './components/Form';
import Home from './components/Home'
import NavBar from './components/NavBar';

function App() {

  return (
    <BrowserRouter>
      <NavBar/>
      <div>
        <Routes>
          <Route path='/' element={< Home />}/>
          <Route path='/form' element={< Form />}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
