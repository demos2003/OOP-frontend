import React from 'react'
import './adminNav.css'

const Pending = ({active1, setActive1, bookData}) => {
const Pending2 =({book}) =>{
   return(
      <div>
        <div className='request_info' onClick={() => setActive1("Test")}>
            <p>{book.name}</p>
            <p>{}
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
