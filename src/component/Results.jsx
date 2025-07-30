import { calculateInvestmentResults,formatter } from "../util/investment";
export default function Results({values11,values22,values33,values44})
{
    
    const userInput=({
        initialInvestment:values11,
        annualInvestment:values22,
        expectedReturn:values33,
        duration:values44,
    })
    
   const resultData= calculateInvestmentResults(userInput)
   const Initialinvestment=resultData[0].valueEndOfYear - resultData[0].interest - resultData[0].annualInvestment
   
    return(
        <table id='result'>
            <thread>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            
           <tbody>
            {resultData.map(yearData=>{
                const totalinterest=yearData.valueEndOfYear - yearData.annualInvestment*yearData.year;
                const totalAmountinvested= yearData.valueEndOfYear-totalinterest
                return( <tr key={yearData.year}>
                         <td>{yearData.year}</td>
                        <td>{formatter.format(yearData.valueEndOfYear)}</td> 
                        <td>{formatter.format(yearData.interest)}</td>
                        <td>{formatter.format(totalinterest)}</td>
                        <td>{formatter.format(totalAmountinvested)}</td>
                        
                    </tr>
                )
            })}
           </tbody>
           </thread>
        </table>
    );
}