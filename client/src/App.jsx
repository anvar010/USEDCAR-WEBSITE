import './App.css'
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SellYourCar from './pages/SellYourCarForm';
import Login from './pages/Login';
import AdminPage from './pages/adminPage/AdminLanding';
import UserDetails from './pages/UserDetails';
import CarDetailsTable from './pages/SellCarDetails';







function App() {

  return (
    <>
      <Router>
    <Routes>
      <Route path='/home' element ={<Home/>}/>
      <Route path='/sellyourcar' element={<SellYourCar/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/admin' element={<AdminPage/>}/>
      <Route path='/user-details' element={<UserDetails/>}/>
      <Route path='/car-details' element={<CarDetailsTable/>}/>
    </Routes>
     
</Router>
    </>
  )
}

export default App
