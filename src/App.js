import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';




function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type,
    })

    setTimeout(()=>{
      setAlert(null)
    },1500)
    
  }
  const toggleMode =()=>{
    
     if(mode === 'dark') {
        setMode('light') 
        document.body.style.backgroundColor = 'white'
        showAlert('Light Mode is enabled','success')
     }
     else{
        setMode('dark')
        document.body.style.backgroundColor = '#557A95'
        showAlert('Dark Mode is enabled','success')
     }
  }
  return (
    <>
     <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <div className="container my-3">
     <TextForm heading="Enter the text below to analyze" showAlert={showAlert} mode={mode} />
    </div>

    </>
    
  );
}

export default App;
