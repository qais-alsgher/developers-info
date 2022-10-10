import React from 'react'
import {actionType} from '../reducers/developerReducer';

function Developer(props) {
    // console.log()
    const handleDelete =(id)=>{
        props.dispatch({type:actionType.REMOVE_DEVELOPER , id:id})
    }
  return (
    <div className='list-unstyled list-dev text-start'>
    <li onClick={()=>{handleDelete(props.dev.id)}}><span className='delete-dev'>X</span></li>
    <li>{props.dev.name}</li>
    <li>{props.dev.language}</li>
    <li>{props.dev.library}</li>
    <li>{props.dev.food}</li>
    <li>{props.dev.drink}</li>
    </div>

  )
}

export default Developer
