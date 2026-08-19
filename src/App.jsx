import Home from "./pages/Home.jsx"
import ViewAll from "./pages/viewAll.jsx"
import Login from "./pages/Login.jsx"
import ListProperties from "./pages/ListProperties.jsx"
import './App.css'
import { BrowserRouter, Route, Routes,} from "react-router-dom"
function App() {
  return (

  
  <>
  <BrowserRouter>
  <Routes>

    <Route path="/" element={<Login/>}></Route>
    <Route path="/Home" element={<Home/>}></Route>
    <Route path="/ViewAll" element={<ViewAll/>}></Route>
    <Route path="/ListProperties" element={<ListProperties/>}></Route>
  </Routes>
  </BrowserRouter>
  
  {/* <ViewAll/> */}
  {/* <Login/> */}
  </>
  )
}

export default App
