import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlus} from '@fortawesome/free-solid-svg-icons'
import './Questions.css'
import Answers from "./Answers";

const Questions = (props) => {
    const [toggle, setToggle]= useState(false)
    return (
        <div>
            <div className='enquiry'>
                <p key = {props.id}>{props.inquiry}</p>
                <FontAwesomeIcon icon={faPlus} border size='xl' className='icon' onClick={()=>setToggle(!toggle)}/>
            </div>

            {toggle &&(

                <Answers info = 'Yes, it is.'/>,
                <Answers info = 'It costs $50'/>,
                <Answers info = 'Any supermarket nearest to you'/>
            )}
        </div>
    )
}
{/*class Questions extends React.Component{
    state={question: ''}
    render() {
        return (
            <div>
                <div className='enquiry'>
                    <p>{this.props.inquiry}</p>
                    <FontAwesomeIcon icon={faPlus} border size='xl' className='icon'/>
                </div>
            </div>
        )
    }
}*/}

export default Questions