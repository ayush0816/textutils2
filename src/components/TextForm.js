import React , {useState} from 'react'

function TextForm(props) {

    const handleOnChange =(event)=>{
         setText(event.target.value)
       
    }
    const hanleupclick=()=>{
        let newText= text.toUpperCase()
        setText(newText)
        props.showAlert('Converted to uppercase','success')
    }
    const hanleloclick=()=>{
      let newText= text.toLowerCase()
      setText(newText)
      props.showAlert('Converted to lowercase','success')
  }
  const hanleclick=()=>{
    let newText= text.split(" ")
    let te='';
    newText.forEach((ele)=>{
      te+=ele[0]
    })
    setText(te)
    props.showAlert('Converted to First letter','success')
    
}
  
    const [text,setText] = useState('')

    return (
      <>
        <div className='container'>
        <h1 style={{color: props.mode === 'dark' ? 'white' : 'black'}}>{props.heading}</h1>
      <div className="mb-3">

        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark' ? 'lightgrey' : 'white', color: props.mode === 'dark' ? 'green':'black'}} id="myBox" rows="8"></textarea>
      </div>
      <button className={`btn btn-${props.mode === 'dark' ? 'warning' : 'danger'} mx-1`} onClick={hanleupclick}>Covert To Uppercase</button>
      <button className={`btn btn-${props.mode === 'dark' ? 'warning' : 'danger'} mx-1`} onClick={hanleloclick}>Covert To Lowercase</button>
      <button className={`btn btn-${props.mode === 'dark' ? 'warning' : 'danger'} mx-1`} onClick={hanleclick}>First Letter</button>
        </div>
        <div className='container my-3' style={{color: props.mode === 'dark' ? 'white' : 'black'}} >
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : 'Write Something To Preview It Here'} </p>
        </div>

      </>
    )
}

export default TextForm
