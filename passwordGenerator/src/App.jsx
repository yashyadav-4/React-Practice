import { useState , useCallback , useEffect , useRef} from 'react'

import './App.css' // using tailwind


function App() {
  const[length , setLength]= useState(8);
  const[numberAllowed , setNoAllowed]= useState(false);
  const[charAllowed , setCharAllowed]=useState(false);
  const[password , setPassword] =useState("");
   
  // useRef hook
  const passwordRef= useRef(null);

  const passwordGenerator=useCallback(()=>{
    let pass="";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let numbers = "0123456789";
    let symbols = "!@#$%^&*()-_=+[]{}|;:'\",.<>?/`~";

    if(numberAllowed){
      str += numbers;
    }
    if(charAllowed){
      str+=symbols;
    }

    for(let i=0;i<length;i++){
      let charInd= Math.floor(Math.random() * str.length );
      pass += str[charInd];
    }
    setPassword(pass);
  } , [length , numberAllowed , charAllowed , setPassword ])

  const copyPasswordToclipboard=useCallback(()=>{
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0,3) // if u want only a limited section to be selected
    window.navigator.clipboard.writeText(password)
  } , [password])

  useEffect(()=>{
    passwordGenerator();
  } , [length , numberAllowed , charAllowed , passwordGenerator])

  return (
    <>
      <div className="container">
        <h1 className="title"> Password Generator</h1>

        <div className="password-box">
          <input
            type="text"
            value={password}
            placeholder="Generate password"
            readOnly
            ref={passwordRef}
          />
          <button onClick={copyPasswordToclipboard}>Copy</button>
        </div>

        <div className="controls">

          <div className="control">
            <div className="control-row">
              <label>Password Length</label>
              <span className="length-value">{length}</span>
            </div>
            <input
              type="range"
              min={6}
              max={40}
              value={length}
              onChange={(e)=>setLength(Number(e.target.value))} // using number bcz length is string in range
            />
          </div>

          <div className="checkbox">
            <label htmlFor="numberInput">Include Numbers</label>
            <input
              type="checkbox"
              id="numberInput"
              defaultChecked={numberAllowed}
              onChange={()=>setNoAllowed(prev=>!prev)}
            />
          </div>

          <div className="checkbox">
            <label htmlFor="charInput">Include Symbols</label>
            <input
              type="checkbox"
              id="charInput"
              defaultChecked={charAllowed}
              onChange={()=>setCharAllowed(prev=>!prev)}
            />
          </div>

        </div>
      </div>

    </>
  )
} 

export default App

// useCallback  lets you cache a function definition between re-renders.

// useEffect lets you synchronize a component with an external system.
//useEffect(setup, dependencies?)


//useRef
// useRef lets you reference a value that’s not needed for rendering.