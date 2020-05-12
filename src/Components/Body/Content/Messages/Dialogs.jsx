import React from 'react'

const Dialogs = (propps) => {
    return (
        <div className=''>
            <div>{propps.name}  {propps.dateSend.toString()}</div>
            <div>{propps.message}</div>
            <br/>
        </div>
        
    );
};

export default Dialogs;