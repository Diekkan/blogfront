import React from 'react'
import CancelIcon from './bx-x.svg'
import SubmitIcon from './bx-check.svg'

const Node = ({nodeType, setContent, setNodeType}) => {

    const closeNode = () => {
        console.log("x")
        setNodeType(null)
    }
    const manageNewNode = () => {
        return (
            <div className='manage-node'>
                <div id='submit-node'>
                    <img className='button-icon' src={SubmitIcon} alt=''></img>
                </div>
                <div id='cancel-node' onClick={() => closeNode()}>
                    <img className='button-icon' src={CancelIcon} alt=''></img>
                </div>
            </div>
        )
    }

    if (nodeType === 'text') {
        return (
            <>
                <div id='1' className='text-node'>
                    <input className='text-box' placeholder='Escribe aqui'></input>
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