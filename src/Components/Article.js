import React, {useState, useEffect} from 'react'
import Node from './Article/Node/Node'
import AddButton from './Article/AddButton'
import ContentTypeSelector from './Article/ContentTypeSelector'


function Article() {

    const [awaitMode, setAwaitMode] = useState(false);
    const [nodeList, setNodeList] = useState([]);
    const [cancelNode, setCancelNode] = useState(false);

    return (
        <div className='article'>
            <>
                {
                    nodeList &&
                    nodeList.map((item) => {
                        return item
                    }
                    )
                }
            </>            
            {/*renderNode()*/}
            { !awaitMode ? 
                <AddButton
                    awaitMode={awaitMode}
                    setAwaitMode={setAwaitMode}/> :
                <ContentTypeSelector 
                    awaitMode={awaitMode}
                    nodeList={nodeList}
                    setAwaitMode={setAwaitMode}
                    setNodeList={setNodeList}/>
            }
        </div>
    )
}

export default Article