import './App.css';
import {Route, Routes, Link} from 'react-router-dom';
import Home from './components/Home';
import ShowList from './components/ShowItems';
import ShowSingleItem from './components/ShowSingleItem';
import NavBarBoot from './components/NavBarBoot';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import { AuthProvider } from './context/AuthContext'



function App() {
  return (
    <div className="App">
    <AuthProvider>
    <NavBarBoot/>
      <Routes>
        <Route path='/home' element={<Home/>} />
        <Route path='/posts' element={<ShowList/>} />
        <Route path='/posts/:id' element={<ShowSingleItem/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
    </AuthProvider>
   
    </div>
  );
}

export default App;
