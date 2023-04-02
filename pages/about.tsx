import { useState } from "react"

interface Props{
    data:any
}

const About: React.FC<Props>=({data})=>{
    console.log(data)
    const [count, setCound] = useState<any>(0)
    return (
        <>

            <div style={{ color: 'red' }}>Click to see that increament by one :{count}
           
            </div> 
              <h2>{data} no</h2> 
            <button onClick={()=>{setCound(count+1)}}>Click me</button>
        </>
    )
}

export default About