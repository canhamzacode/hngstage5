import Extexnsion from './Components/Extension/Extexnsion'
import Auth from './page/Auth/Auth'
import Dashboard from './page/Dashboard/Dashboard'
import Home from './page/Home/Home'
import { Route, Routes } from "react-router-dom";
import MyVideo from './page/myVideo/MyVideo';

function App() {

  return (
    <Routes>
      <Route path='/' element="">
        <Route index element={<Home/>}/>
        <Route path='/extension' element={<Extexnsion/>}/>
        <Route path='/auth' element={<Auth/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/video/:id' element={<MyVideo />}/>
      </Route>
    </Routes>
  )
}

export default App
