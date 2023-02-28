import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlus} from '@fortawesome/free-solid-svg-icons'
import './Questions.css'

const Questions = (props) => {
    const [toggle, setToggle] = useState(false)
    const click = () => {
        setToggle(!toggle)
    }
    return (
        <div>
                    <div className='enquiry'>
                        <p>{props.inquiry}</p>
                        <FontAwesomeIcon icon={faPlus} border size = 'xl' className='icon' onClick={click} />
                    </div>
                    {toggle &&
                        (
                            <div className='enquiry'><p>{props.answer}</p></div>
                        )
                    }
        </div>
    )

        {/*<div>
            <div className='container'>
                <h1>FAQ/ACCORDION</h1>
            <div className='box' style={{height: !toggle ? '50vh' : '70vh'}}>
                <h2>Frequently Asked Questions</h2>
                <div className='enquiry'>
                    <p>{props.inquiry}</p>
                    <FontAwesomeIcon icon={faPlus} border size='xl' className='icon' onClick={click}/>
                </div>
                {toggle &&
                    (
                        <div className='enquiry'><p>{props.answer}</p></div>
                    )
                }
            </div>
        </div>
        </div>*/}

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
}*/
        }

export default Questions