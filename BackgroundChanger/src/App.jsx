import { useState } from "react"


function App() {
  const [color , setColor]=useState("black")

  return (
    <>
      <div className="w-full h-screen duration-200" 
      style={{backgroundColor:color}}>
        <div className="fixed bottom-12 inset-x-0 px-2 flex flex-wrap justify-center ">
          <div className="flex  gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{background:"red"}} onClick={()=>{setColor("Red")}} >Red</button>
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{background:"green"}} onClick={()=>{setColor("green")}}>Green</button>
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{background:"blue"}} onClick={()=>{setColor("blue")}}>Blue</button>
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{background:"pink"}} onClick={()=>{setColor("pink")}}>Pink</button>
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{background:"purple"}} onClick={()=>{setColor("purple")}}>Purplle</button>
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{background:"orange"}} onClick={()=>{setColor("orange")}}>Orange</button>
          </div>
        </div>
        
      </div>
    </>
  )
}

export default App

// onclick doesnt need a paramter value it needs a callback method or a function to execute so pass a function rather than a variable 