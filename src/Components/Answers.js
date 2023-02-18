import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";

const Answers =(props)=>{
    return(
        <div>
            <div className='enquiry'>
                <p>Yes, it is a good product.</p>
            </div>

            <div className='enquiry'>
                <p>It costs $50.</p>
            </div>

            <div className='enquiry'>
                <p>At any supermarket nearest to you.</p>
            </div>

        </div>
    )
}

export default Answers