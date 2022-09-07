import React, { useState } from 'react'
import TextNode from './TextNode/TextNode'
import ImageNode from './ImageNode'
import VideoNode from './VideoNode'
import AudioNode from './AudioNode'



const Node = ({nodeType, id}) => {

    const [ content, setContent ] = useState('')
    const [ type, setType ] = useState(nodeType)

    if (type === 'text') {
        return (
            <TextNode id={id}
                      content={content}
                      setContent={setContent}
                      type={setType}/>
        )
    } else if (type === 'image') {
        return (
            <ImageNode id={id}
                      content={content}
                      setContent={setContent}
                      type={setType}/>
        )
    } else if (type === 'video') {
        return (
            <VideoNode id={id}
                      content={content}
                      setContent={setContent}
                      type={type}/>
        )
    } else if (type === 'audio') {
        return (
            <AudioNode id={id}
                       content={content}
                       setContent={setContent}
                       type={type}/>
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