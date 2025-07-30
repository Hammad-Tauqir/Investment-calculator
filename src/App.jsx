import { useState } from "react"
import Header from "./component/Header"
import UserInput from "./component/userinput"
import Results from "./component/Results"
function App() {
  const [values1,setvalue1]=useState(1000)
  const [values2,setvalue2]=useState(500)
  const [values3,setvalue3]=useState(6)
  const [values4,setvalue4]=useState(10)
  function handlechange1(event)
  {
    setvalue1(event.target.value)
  }

  function handlechange2(event)
  {
    setvalue2(event.target.value)
  }

  function handlechange3(event)
  {
    setvalue3(event.target.value)
  }
  function handlechange4(event)
  {
    setvalue4(event.target.value)
  }
  const inputIsvalid=values4>=1
 
  return (
    <>
    <Header/>
    <UserInput onChange1={handlechange1} onChange2={handlechange2} onChange3={handlechange3} onChange4={handlechange4} values1={values1} values2={values2} values3={values3} values4={values4}/>
    {!inputIsvalid && <p className="center">please enter a duration grater than 1</p>}
    {inputIsvalid && <Results values11={+values1} values22={+values2} values33={+values3} values44={+values4}/>}
    </>
  )
}

export default App
