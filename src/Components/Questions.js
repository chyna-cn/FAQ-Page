import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlus} from '@fortawesome/free-solid-svg-icons'
import './Questions.css'

const Questions = (props) => {
    const [toggle, setToggle] = useState()
    return (
        <div>
            <div className='enquiry'>
                <p>{props.inquiry}</p>
                <FontAwesomeIcon icon={faPlus} border size='xl' className='icon'/>
            </div>
        </div>
    )
}


{/*class Questions extends React.Component{
    state={question: ''}
    render() {
      const ans=()=>{
            if(this.state.question.style === 'block'){
                this.state.question.style = 'visible'
            }
            else{this.state.question.style = 'block'}
        }
        return (
            <div>
                <div className='enquiry'>
                    <p>Is this a good product?</p>
                    <FontAwesomeIcon icon={faPlus} border size='xl' className='icon' onClick={ans}/>
                </div>

                <div className='enquiry invisible'>
                    <p>Yes, it is a good product.</p>
                </div>

                <div className='enquiry'>
                    <p>How much does it cost?</p>
                    <FontAwesomeIcon icon={faPlus} border size='xl' className='icon' onClick={ans}/>
                </div>

                <div className='enquiry invisible'>
                    <p>It costs $50.</p>
                </div>

                <div className='enquiry'>
                    <p>Where can I get it??</p>
                    <FontAwesomeIcon icon={faPlus} border size='xl' className='icon' onClick={ans}/>
                </div>
                <div className='enquiry invisible'>
                    <p>At any supermarket nearest to you.</p>
                </div>

            </div>
        )
    }
}*/
}
export default Questions