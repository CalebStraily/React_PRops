import React from 'react'
import "./style.css"
import Propsinfo from './components/Propsinfo';
import Arraymap from './components/Arraymap';

function App() 
{
    return(
        <div className="container-fluid">
            <Propsinfo name="Mr. Prop" num={9} bool={true}/>
            <Arraymap />
        </div>
    )
}

export default App;