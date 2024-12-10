import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import Sidebar from './assets/Component/Sidebar.jsx'  
import Navbar from './assets/Component/Navbar.jsx' 
import  Mainmenu  from './assets/Component/Mainmenu.jsx' 

// import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <div className="body">
  <StrictMode>

    {/* <App /> */}
 
    <Sidebar />
<Navbar />
<Mainmenu />
  
  </StrictMode>,
  </div>
)
