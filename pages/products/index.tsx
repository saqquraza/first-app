import React from 'react'
import Link from 'next/link'
import {useRouter} from 'next/router'

function Index({productID=100}) {
  const router =useRouter()
  function clickHandler(){
      router.replace('/')
  }
  return (
    <div>
       <Link legacyBehavior href='/'><a>Home page</a></Link>
            <ol>
                <li><Link legacyBehavior href='products/1'>Product 1</Link></li>
                <li><Link legacyBehavior href='products/2'><a>Product 2</a></Link></li>
                <li><Link legacyBehavior href='products/3'><a>Product 3</a></Link></li>
                <li><Link legacyBehavior href='products/4' replace><a>Product 4</a></Link></li>  
                <li><Link legacyBehavior href={`products/${productID}`}><a>Product 100</a></Link></li>
            </ol>
            <a href='https://www.youtube.com/watch?v=sigcnKAPddM&list=PLC3y8-rFHvwgC9mj0qv972IO5DmD-H0ZH&index=10&ab_channel=Codevolution' target='blank'> Go to other site out of the app . used Anchor tag</a>
           <hr></hr>
           <button onClick={clickHandler}>Home Page</button>
    </div>
  )
}

export default Index