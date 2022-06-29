
import React from "react"
import {Routes ,Route} from "react-router-dom"
import Layout from "./Layout";
import Home from  "./Home";
import About from "./About";
import Contact from "./Contact";
import Services from "./Services";
import PropsFile from "./PropsFile"



function App(){
    return(<>

    <PropsFile/>
 
   <Routes>
       <Route path="/"  element={<Layout/>}>
           <Route index element={<Home/>}/>
       
           <Route path="About" element={<About/>}/>
             
             
             
           <Route path="Contact" element={<Contact/>}/>
           <Route path="Services" element={<Services/>}/>
     
       </Route>
    
       
   </Routes>
 
  
    </>)
}

export default App;