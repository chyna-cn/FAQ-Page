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
                   <Questions inquiry = 'Is this a good product?' id={1}/>

                   <Questions inquiry = 'How much does it cost?' id = {2}/>

                   <Questions inquiry = 'Where can I get it from?' id = {3}/>

               </div>
           </div>
        </div>
    )
}
export default App