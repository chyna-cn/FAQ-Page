import React from 'react';
const Answers = (props) => {
    return (
            <div>
             <div className='enquiry invisible'>
                 <p key = {props.id}>{props.info}</p>
             </div>
            </div>
    )
}
export default Answers