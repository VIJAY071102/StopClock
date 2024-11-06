import React,{useState}from 'react'

function StopClock() {
    const [min,setMin]=useState(0);
    const [sec,setSec]=useState(0);
    const [millisec ,setMilliSec]=useState(0)

const handleStart=()=>{

    return 
}

const handleStop=()=>{

    return
}

const handleReset=()=>{
    setMilliSec(0);
    set
    return
}

  return (
    <>
    
    <div className='clock-container'>
        <div className='display'>
        00:00:00
        </div>
        <div className='control-buttons'>
            <button className='start-btn' onClick={handleStart}>start</button>
            <button className='stop-btn' onClick={handleStop}>stop</button>
            <button className='reset-btn' onClick={handleReset}>reset</button>
        </div>

    </div>
    </>
  )
}

export default StopClock