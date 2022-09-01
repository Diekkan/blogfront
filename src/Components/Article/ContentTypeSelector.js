import React, {useState} from 'react'
import TextIcon from './bx-text.svg'
import ImageIcon from './bxs-image.svg'
import VideoIcon from './bxs-video.svg'
import AudioIcon from './bxs-microphone.svg'

const ContentTypeSelector = ({awaitMode, setAwaitMode, setNodeType}) => {
    const contentTypes = ['text','image','video','audio']
    const [closeAnim, setCloseAnim] = useState(false)

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
        setNodeType(type)
        console.log(type)
        return
    }
    
    return(
        <div className={ closeAnim ?
         'content-type-selector-fadeout':
         'content-type-selector'}>
            {
                contentTypes.map(item  =>
                    <div id={item} 
                    className='type-selector-icons'
                    onClick={() => typePick(item)}>
                    <img src={logoType(item)} alt=''/>
                </div>
                )
            }
        </div>
    )
}

export default ContentTypeSelector