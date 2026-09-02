import Home from "./pages/Home.jsx"
import FeaturedStaysAll from "./pages/FeaturedStaysAll.jsx"
import Login from "./pages/Login.jsx"
import ListProperties from "./pages/ListProperties.jsx"
import PopularStaysAll from "./pages/PopularStaysAll.jsx"
import StayDetailedPage from "./pages/StayDetailedPage.jsx"
import './App.css'
import { BrowserRouter, Route, Routes,} from "react-router-dom"
function App() {
  return (

  
  <>
  <BrowserRouter>
  <Routes>

    <Route path="/" element={<Login/>}></Route>
    <Route path="/Home" element={<Home/>}></Route>
    <Route path="/PopularDestinationAll" element={<PopularStaysAll/>}></Route>
    <Route path="/FeaturedStaysAll" element={<FeaturedStaysAll/>}></Route>
     <Route path="/FeaturedStaysAll/:id" element={<StayDetailedPage/>}></Route>
    <Route path="/ListProperties" element={<ListProperties/>}></Route>
  </Routes>
  </BrowserRouter>
  
  {/* <ViewAll/> */}
  {/* <Login/> */}
  </>
  )
}

export default App
