import React from "react";
import Questions from "./Components/Questions";

const App = () => {
    return (
        <div>
            <div className='container'>
                <h1>FAQ/ACCORDION</h1>
                <div className='box'>
                    <h2>Frequently asked questions</h2>
            <Questions inquiry='Is this a good product?' answer="yes, it is."/>

            <Questions inquiry='How much does it cost?' answer='it costs $50'/>

            <Questions inquiry='Where can I get it from?' answer='any supermarket nearest to you'/>
                </div>
            </div>
        </div>
    )
}
export default App