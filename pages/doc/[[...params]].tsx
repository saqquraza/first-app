import { useRouter } from 'next/router'
import React from 'react'

function Docs() {
  const router=useRouter();
  const {params =[]}=router.query;
  console.log(params)
  if(params?.length===2){
    return(
      <h2>
        Viewing docs for features {params[0] } and concept {params[1]}
      </h2>
    )
  }
  else if(params?.length===1){
    return(
      <h2>
        Viewing docs for features {params[0] }
      </h2>
    )
  }
  return (
    <div>Docs Home page</div>
  )
}

export default Docs