import React from 'react';
import Developer from './Developer';
function DeveloperList(props) {
    // console.log(props.developer.length );
  return(
    <div>
        {
        props.developer.map((dev)=>{
        return (
          <ul key={dev.id}>
            <Developer
             dev={dev}
             dispatch={props.dispatch}
             />
          </ul>)
      })
        }
    </div>)
//   ): <h4>the list is empty!</h4>
}

export default DeveloperList;