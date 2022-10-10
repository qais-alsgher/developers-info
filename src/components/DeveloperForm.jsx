import React, { useState } from 'react'
import {actionType} from '../reducers/developerReducer';

function DeveloperForm(props) {
    const [name,setName] =useState('');
    const [language,setLanguage] =useState('JS');
    const [library,setLibrary] =useState('React');
    const [food,setFood] =useState('');
    const [drink,setDrink] =useState('');

const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(name);
    console.log(language);
    console.log(library);
    if(!name) return;
    props.dispatch({
        type:actionType.ADD_DEVELOPER,
        payload: {
            name,
            language,
            library,
            food,
            drink}
    })
    setName('');
    setFood('');
    setDrink('');
}


  return (
    <form onSubmit={handleSubmit} className='d-flex flex-column gap-4 justify-content-center form-dev text-start'>
      <input type='text' placeholder='Name' required value={name} onChange={(e)=>{setName(e.target.value)}}/>
      <div>
      <label className='mb-2'>Programming language</label>
      <select className='w-100' type='select' onChange={(e)=>{setLanguage(e.target.value)}}>
        <option value='JS' selected="selected">JS</option>
        <option value='python'>Python</option>
      </select>

      </div>
      <div>
      <label className='mb-2'>Technologies</label>
      <select type='select' className='w-100' onChange={(e)=>{setLibrary(e.target.value)}}>
        <option value='React' selected="selected">React</option>
        <option value='Django'>Django</option>
        <option value='Next.js'>Next.js</option>
        <option value='Flask'>Flask</option>
      </select>
      </div>
 
      <input type='text' placeholder='favorite food' value={food} onChange={(e)=>{setFood(e.target.value)}} required/>
      <input type='text' placeholder='favorite drink' value={drink} onChange={(e)=>{setDrink(e.target.value)}} required/>
      <button type='submit'>submit</button>
    </form>
  )
}

export default DeveloperForm
