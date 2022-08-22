import React from 'react'

const Approved = ({approveData}) => {
   const Approved1 = ({approve}) => {
      return(
         <div className='request_info'>
         <p>Nasiru Iyidemilade Halim</p> 
           <p>Amphitheatre 17/06/2022 8:00am - 10:00am
        </p>
         <p>9:15pm</p> 
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
