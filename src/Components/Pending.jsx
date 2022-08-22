import React from 'react'
import './adminNav.css'


const Pending = ({ active1, setActive1, bookData, active2, setActive2, }) => {
   const Pending2 = ({ book }) => {
      // setActive2(book._id)
      return (
         <div>
            <div className='request_info' onClick={() => setActive1("Test")} >
               <p>{book.username}{setActive2(book._id)
               }</p>
               <p>{book.eventcenter}
               </p>
               <p>{book.duration}</p>
               <p>{book.desc}</p>
               <p>{book.dateofbooking}</p>
               <p>{book.duration}</p>
            </div>
         </div>
      )
   }

   return (
      <div className='requestContent_holder'>
         {bookData.map((p) => (
            <Pending2 book={p} />
         ))}
      </div>
   )
}

export default Pending
