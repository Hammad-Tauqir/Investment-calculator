
export default function UserInput({onChange1,onChange2,onChange3,onChange4,values1,values2,values3,values4})
{
  //  const [userinput,setuserinput]= useState({
  //       Initialinvestment:10000,
  //       AnnualInvestment:1200,
  //       Expected:6,
  //       Duration:10,
  //   })

    // function handlechange(newidentifier,newvalue)
    // {
    //      setuserinput(prevvalue =>{
    //         return {
    //              ...prevvalue,[newidentifier]:newvalue,
    //         }
    //      })
    // }
    // const [values1,setvalue1]=useState(1000)
    // const [values2,setvalue2]=useState(500)
    // const [values3,setvalue3]=useState(6)
    // const [values4,setvalue4]=useState(10)
    // function handlechange1(event)
    // {
    //   setvalue1(event.target.value)
    // }

    // function handlechange2(event)
    // {
    //   setvalue2(event.target.value)
    // }

    // function handlechange3(event)
    // {
    //   setvalue3(event.target.value)
    // }
    // function handlechange4(event)
    // {
    //   setvalue4(event.target.value)
    // }
    return(
        <section id='user-input'>
            <div className='input-group'>
              
              <p>
                <label>Initial Inestment</label>
                <input type='number' required  value={values1}onChange={ onChange1} />
                </p>

                <p>
                <label>Annual Inestment</label>
                <input type='number' required  value={values2}onChange={ onChange2} />
              </p>

            </div>

            <div className='input-group'>
              <p>
                <label>Expected Investment</label>
                <input type='number' required  value={values3}onChange={ onChange3} />
                </p>

                <p>
                <label>Duration</label>
                <input type='number' required  value={values4}onChange={onChange4} />
              </p>

            </div>
        </section> 
    )
}