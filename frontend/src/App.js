import {BrowserRouter, Routes, Route} from 'react-router-dom'
/* components */
import Login from './components/login';
import AuthSuccess from './components/AuthSuccess';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Login/>}/>
        <Route exact path='/success' element={<AuthSuccess/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
