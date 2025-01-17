import './App.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/navBar'
import Paste from './components/Paste'
import ViewPaste from './components/ViewPaste'

const router = createBrowserRouter(
[
  {
    path:'/',
    element :
    <div>
      <Navbar/>
      <Home/>
    </div>
  },

  {
    //To see all the pastes
    path:'/pastes',
    element :
    <div>
       <Navbar/>
       <Paste/>
    </div>
  },

  {
    //To see only specific paste
    path:'/pastes/:id',
    element :
    <div>
       <Navbar/>
       <ViewPaste/>
    </div>
  }
]
)
function App() {

  return (
      <div>
       <RouterProvider router={router}/>
      </div>
  )
}

export default App
