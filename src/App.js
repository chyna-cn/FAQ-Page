import React from "react";
import Questions from "./Components/Questions";

const App = () => {
    return (
        <div>
           <div className='container'>
             <h1>FAQ/ACCORDION</h1>
               <div className='box'>
                   <h2>Frequently Asked Questions</h2>
                   <Questions inquiry = 'Is this a good product?'/>
                   <Questions inquiry = 'How much does it cost?'/>
                   <Questions inquiry = 'Where can I get it from?'/>



               </div>
           </div>
        </div>
    )
}
export default App