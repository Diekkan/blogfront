import React, {useState} from 'react'
import TextIcon from './bx-text.svg'
import ImageIcon from './bxs-image.svg'
import VideoIcon from './bxs-video.svg'
import AudioIcon from './bxs-microphone.svg'
import Node from './Node'

const ContentTypeSelector = ({awaitMode, nodeList, setAwaitMode, setNodeList}) => {
    const contentTypes = ['text','image','video','audio']
    const [ closeAnim, setCloseAnim ] = useState(false)
    const [ pickedOption, setPicked ] = useState(null)
    
    const logoType = (type) => {
        if (type === 'text'){
            return TextIcon
        } else if (type === 'image') {
            return ImageIcon
        } else if (type === 'video') {
            return VideoIcon
        } else if (type === 'audio') {
            return AudioIcon
        }
    }
    const typePick = (type) => {
        setCloseAnim(true)
        setTimeout(function(){
            setAwaitMode(false)
        }.bind(this), 700)
        setPicked(type)
        const newNodeList = nodeList
        console.log(newNodeList)
        console.log(newNodeList.length)
        newNodeList.push(<Node nodeType={type} key={`node.${newNodeList.length}`} />)
        setNodeList(newNodeList)
        console.log(type)
    }
    
    return(
        <div className={ closeAnim ?
         'content-type-selector-fadeout':
         'content-type-selector'}>
            {
                pickedOption === null &&
                <>
                {
                    contentTypes.map((item, idx)  =>
                        <div key={`types.${idx}`} 
                        className='type-selector-icons'
                        onClick={() => typePick(item)}>
                        <img src={logoType(item)} alt=''/>
                    </div>
                )}
                </>
                
            }
        </div>
    )
}

export default ContentTypeSelector