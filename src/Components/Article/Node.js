import React, { useState } from 'react'
import CancelIcon from './bx-x.svg'
import SubmitIcon from './bx-check.svg'

const Node = ({nodeType, id}) => {

    const [ content, setContent ] = useState('')
    const [ type, setType ] = useState(nodeType)


    const closeNode = () => {
        console.log("x")
        setType(null)
    }
    const manageNewNode = () => {
        return (
            <div className='manage-node'>
                <div id='cancel-node' onClick={() => closeNode()}>
                    <img className='button-icon' src={CancelIcon} alt=''></img>
                </div>
            </div>
        )
    }

    if (type === 'text') {
        return (
            <>
                <div id={id} className='text-node'>
                    <textarea
                        className='text-box'
                        placeholder='Escribe aqui'
                        onChange={e => setContent(e.target.value)}
                        value={content}
                    ></textarea>
                    {manageNewNode()}
                </div>
            </>
        )
    }
}
export default Node
/*
    const typeInput = (inputType) => {
        if (inputType === 'text') {
            textNode()
        }
    }
    const manageNewNode = () => {
        return (
            <div className='manage-node'>
                <div id='submit-node'>
                    <img className='button-icon' src={SubmitIcon} alt=''></img>
                </div>
                <div id='cancel-node'>
                    <img className='button-icon' src={CancelIcon} alt=''></img>
                </div>
            </div>
        )
    }
    const textNode = () => {
        return (
            <div className='textnode'>
                <textarea placeholder='Escribir aqui'></textarea>
                {manageNewNode()}
            </div>
        )    
    }
    
    const imageNode = () => {
    
    }
    
    const videoNode = () => {
    
    }
    
    const audioNode = () => {
    
    }
    return (
        <>
        
        </>
        )
    }*/