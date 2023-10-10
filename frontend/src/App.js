import {BrowserRouter, Routes, Route} from 'react-router-dom'
/* components */
import Login from './components/login';
import AuthSuccess from './components/AuthSuccess';
import Dashboard from './components/Dashboard';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Login/>}/>
        <Route exact path='/success' element={<AuthSuccess/>}/>
        <Route exact path='/dashboard' element={<Dashboard/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
