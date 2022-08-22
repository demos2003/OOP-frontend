import React from 'react'

const Approved = ({approveData}) => {
   const Approved1 = ({approve}) => {
      return(
         <div className='request_info'>
         <p>{approve.username}</p>
            <p>{approve.eventcenter}
            </p>
            <p>{approve.duration}</p>
            <p>{approve.desc}</p>
            <p>{approve.dateofbooking}</p>
            <p>{approve.duration}</p>
      </div>
      );
   }
  return (
    <div>
      {approveData.map((p) => (
           <Approved1 approve={p}/>  
      ))}
     
    </div>
  )
}

export default Approved
