import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function Effact() {
const [heigth,setHeight]=useState(window.innerHeight);
const[width,setWidth]=useState(window.innerWidth);
useEffect(()=>{
  window.addEventListener("resize",handleResize);
  console.log("add eventlistener added");
  
  return()=>{
    window.addEventListener("resize",handleResize);
    console.log("add event listener removed");
  } 
  
},[])
function handleResize(){
  setHeight(window.innerHeight)
  setWidth(window.innerWidth);
}
  return (
    <div>
       <p>height:{heigth} width:{width}</p>

    </div>
  )
}

export default Effact