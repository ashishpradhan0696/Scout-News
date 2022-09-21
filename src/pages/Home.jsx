import React from 'react'
import Carousel from '../components/carousel/Carousel'
import Navbar from '../components/Navbar'
import News from '../components/News'
import { useState ,useEffect} from 'react'

export default function Home({key, category,setProgress }) {

  // let state;
  // useEffect(() => {
  //   if(localStorage.getItem("darkMode")===null || localStorage.getItem("darkMode")===false) {
  //     state=false;
  //   }
  //   else{
  //       state=true;
  //     }
  // }, [])
  

  
// console.log("state is", state);
const [darkMode, setDarkMode] = useState(false);


  const toggleDarkMode = () => {
   
        if (darkMode === false) {
            setDarkMode(true);
           // localStorage.setItem("darkMode",true);
        }
        else {
            setDarkMode(false);
            //localStorage.setItem("darkMode",false);
        }
  }

  // console.log("darkMode is" ,darkMode);
  // console.log("localstrage is" ,localStorage.getItem("darkMode"));

 
  return (
    <>
    <div className='mainContainer' style={{backgroundColor: darkMode==true ? "#121212":"whitesmoke"}}>
        <Navbar darkMode={darkMode}  toggleDarkMode={toggleDarkMode}/>
        <Carousel/>
        <News key={key} category={category} setProgress={setProgress} darkMode={darkMode} />
      </div>  
    </>
  )
}
