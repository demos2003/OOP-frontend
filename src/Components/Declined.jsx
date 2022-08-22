import React from 'react'

const Declined = ({deniedData}) => {
    const Denied = ({denied}) => {
        return(
            <div className='request_info'>
                <p>{denied.username}</p>
            <p>{denied.eventcenter}
            </p>
            <p>{denied.duration}</p>
            <p>{denied.desc}</p>
            <p>{denied.dateofbooking}</p>
            <p>{denied.duration}</p>
            </div>
        );
    }
    return (
        <div className='requestContent_holder'>
          {deniedData.map((p) =>(
              <Denied denied={p}/>
          ))}
           
            
        </div>
    )
}

export default Declined
