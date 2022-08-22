import React from 'react'

const Declined = ({deniedData}) => {
    const Denied = ({denied}) => {
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
        <div className='requestContent_holder'>
          {deniedData.map((p) =>(
              <Denied denied={p}/>
          ))}
           
            
        </div>
    )
}

export default Declined
