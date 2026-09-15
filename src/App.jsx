import Home from "./pages/Home.jsx"
import FeaturedStaysAll from "./pages/FeaturedStaysAll.jsx"
import Login from "./pages/Login.jsx"
import Login2 from "./pages/Login2.jsx"
import ListProperties from "./pages/ListProperties.jsx"
import PopularStaysAll from "./pages/PopularStaysAll.jsx"
import StayDetailedPage from "./pages/StayDetailedPage.jsx"
import './App.css'
import { BrowserRouter, Route, Routes,} from "react-router-dom"
 import { useState } from "react"
import ProtectedRoute from "./components/ProtectedRoute.jsx"
import Scroll from "./components/Scroll.jsx"
import { User } from "./Context/UserContext.jsx"
function App() {
    const {user}=User()
   
  return (

  
  <>
  
    <BrowserRouter>
    <Scroll/>
  <Routes>
   
    {user?<Route path="/" element={<Home/>}></Route>:<Route path="/" element={<Login2/>}></Route>}
    <Route element={<ProtectedRoute/>}>

     <Route path="/Home" element={<Home/>}></Route>
    <Route path="/PopularDestinationAll" element={<PopularStaysAll/>}></Route>
    <Route path="/FeaturedStaysAll" element={<FeaturedStaysAll/>}></Route>
     <Route path="/FeaturedStaysAll/:id" element={<StayDetailedPage/>}></Route>

    </Route>
    
    {/* <Route path="/ListProperties" element={<ListProperties/>}></Route> */}
  </Routes>
  </BrowserRouter>
  
  
  {/* <ViewAll/> */}
  {/* <Login/> */}
  </>
  )
}

export default App
