import React from 'react'
import ManageNode from '../ManageNode'

const TextNode = ({id, content, setContent, type}) => {
  return (
    <div id={id} className='text-node'>
        <textarea
        className='text-box'
        placeholder='Insertar texto...'
        onChange={e => setContent(e.target.value)}
        value={content}
        ></textarea>
        <ManageNode type={type}/>
    </div>
    )
}

export default TextNode