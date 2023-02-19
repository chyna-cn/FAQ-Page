import React from "react";
import Questions from "./Components/Questions";
import Answers from "./Components/Answers";

const App = () => {
    return (
        <div>
           <div className='container'>
             <h1>FAQ/ACCORDION</h1>
               <div className='box'>
                   <h2>Frequently Asked Questions</h2>
                   <Questions inquiry = 'Is this a good product?'/>
                   <Answers info = 'Yes, it is.'/>
                   <Questions inquiry = 'How much does it cost?'/>
                   <Answers info = 'it costs $50'/>
                   <Questions inquiry = 'Where can I get it from?'/>
                   <Answers info = 'Any supermarket closest to you'/>
               </div>
           </div>
        </div>
    )
}
export default App