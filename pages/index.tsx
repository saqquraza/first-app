import React from 'react'
import Link from 'next/link'
import {useRouter} from 'next/router'
import About from './about'

function Home() {
  const router = useRouter()


  const handleClick=()=>{
    console.log("Placing succesfully")
    router.push('/products')
  }

  const data="hello about"
  
    return (
    <div>
    <h2>
    Home Page
      </h2> 
     <h1> <Link legacyBehavior href='/blog'><a>Blog</a></Link></h1>
     <h2 style={{color:'rebeccapurple'}}> <Link legacyBehavior href='/products'><a>Product</a></Link></h2>
      
      <button onClick={handleClick} style={{color:'blue'}}>Place order(Programitaclly navigate)</button>
       <About data={data}/>
      </div>
  )
}

export default Home