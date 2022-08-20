import React from 'react'
import './adminNav.css'

const Pending = ({active1, setActive1, bookData}) => {
const Pending2 =({book}) =>{
   return(
      <div>
        <div className='request_info' onClick={() => setActive1("Test")}>
            <p>Nasiru Iyi</p>
            <p>Amphitheatre 17/06/2022 8:00am - 10:00am
            </p>
            <p>9:15pm</p>
         </div>
      </div>
   )
}
   
   return (
      <div className='requestContent_holder'>
         {bookData.map((p) =>(
             <Pending2 book={p}/>
         ))}
         </div>
   )
}

export default Pending
