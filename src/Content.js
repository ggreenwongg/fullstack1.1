import React from 'react';
import './index.css';

const Content = ({part}) => {
    return(
        <div className="list">
            <ul>
                {part.map(i => <li>{i.name}    Number : {i.exercises}</li> )}
            </ul>
           
        </div>
    )
}
export default Content;