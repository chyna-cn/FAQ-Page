import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlus} from '@fortawesome/free-solid-svg-icons'
import './Questions.css'

{/*const Questions = (props) => {
    const [toggle, setToggle] = useState()
    return (
        <div>
            <div className='enquiry'>
                <p>{props.inquiry}</p>
                <FontAwesomeIcon icon={faPlus} border size='xl' className='icon'/>
            </div>
        </div>
    )
}*/}


class Questions extends React.Component{
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
}

export default Questions