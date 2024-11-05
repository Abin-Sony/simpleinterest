
import './App.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

function App() {

  const [ Principle, setPrinciple]=useState("")
  const [rate, setRate]=useState("")
  const [year, setYear]=useState("")
  const [isPrinciple, setIsPrinciple]=useState(true)
  const [isRate, setIsRate]=useState(true)
  const [isYear, setIsYear]=useState(true)
  const [Interest,setInterest]=useState(0)

  const validata = (e)=>{
    const {name, value}=e.target
    console.log(name);
    console.log(value);


    if(!! value. match('^[0-9]*$')){
      if(name=='principle'){
        setPrinciple(value)
        setIsPrinciple(true)
      }
      else if (name == 'rate'){
        setRate(value)
        setIsRate(true)
      }
      else{
        setYear(value)
        setIsYear(true)
      }
    }
    else{
      if(name=='principle'){
      setPrinciple(value)
      setIsPrinciple(false)
    }
    else if (name == 'rate'){
      setRate(value)
      setIsRate(false)
    }
    else{
      setYear(value)
      setIsYear(false)
    }

    }
    
    
  }

  const handleReset= ()=>{
    setPrinciple("")
    setRate("")
    setYear("")
    setIsPrinciple(true)
    setIsRate(true)
    setIsYear(true)
    setInterest(0)
  }


const calculate = ()=>{

  setInterest((Principle * rate * year)/100)

}



 

  return (
    <>
    <div className='bg-dark d-flex justify-content-center align-items-center'style={{height:'100vh', width:'100%'}}>
      <div className='bg-light p-5 rounded' style={{width:'530px'}}>
        <h1>Simple Interest App</h1>
        <p>Calculate Your Simple Interest Easily</p>
        <div className='bg-warning p-3  d-flex justify-content-center align-items-center rounded mt-4 flex-column' style={{height:'150px'}}>
          <h1>₹ {Interest}</h1>
          <p>Total simple interest </p>

        </div>
        <div className='my-3'><TextField id="outlined-basic" className='w-100' value={Principle} name='principle' label="₹ Principle Amount " variant="outlined" onChange={(e)=>validata(e)} />
         {isPrinciple==false&& <p className='text-danger'>*invalid input pleace choose valid answer</p>}

        </div>
        <div className="my-3"><TextField id="outlined-basic" className='w-100' value={rate} name='rate' label="Rate of Interest (%)" variant="outlined" onChange={(e)=>validata(e)} /> { isRate==false&&<p className='text-danger'>*invalid input pleace choose valid answer</p>}
        </div>
        <div className="my-3"><TextField id="outlined-basic" className='w-100'value={year} name='year' label="Year (yr)" variant="outlined" onChange={(e)=>validata(e)} /> { isYear==false&&<p className='text-danger'>*invalid input pleace choose valid answer</p>}</div>
        <div className="mb-3 d-flex justify-content-between">
        <Button disabled={isPrinciple&& isRate&& isYear? false:true} variant="contained" style={{width:'190px'}} color='success' className='p-3' onClick={calculate}>Calculate</Button>
        <Button variant="outlined"  style={{width:'190px'}} className='p-3' onClick={handleReset}>Reset</Button>
        </div>

      </div>

    </div>
      
    </>
  )
}

export default App
