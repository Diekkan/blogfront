import React, {useState} from 'react'
import Node from './Article/Node'
import AddButton from './Article/AddButton'
import ContentTypeSelector from './Article/ContentTypeSelector'


function Article() {

    const [awaitMode, setAwaitMode] = useState(false);
    const [nodeType, setNodeType] = useState(null);
    const [content, setContent] = useState('');
    const [cancelNode, setCancelNode] = useState(false);

    const renderAddButton = () => {
        if (awaitMode === false) {
            return <AddButton
                    awaitMode={awaitMode}
                    setAwaitMode={setAwaitMode}/>
        }
    }

    const renderContentTypeSelector = () => {
        if (awaitMode === true) {
            return <ContentTypeSelector 
                    awaitMode={awaitMode}
                    setAwaitMode={setAwaitMode}
                    setNodeType={setNodeType}/>
        } 
    }
    const renderNode = () => {
        if (nodeType !== null && cancelNode === false) {
            return <Node nodeType={nodeType} 
                        setContent={setContent}
                        setNodeType={setNodeType}/>
        }
    }

    return (
        <div className='article'>
            {renderNode()}
            {renderAddButton()}
            {renderContentTypeSelector()}
        </div>
    )
}

export default Article