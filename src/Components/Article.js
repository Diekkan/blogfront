import React, {useState, useEffect} from 'react'
import Node from './Article/Node'
import AddButton from './Article/AddButton'
import ContentTypeSelector from './Article/ContentTypeSelector'


function Article() {

    const [awaitMode, setAwaitMode] = useState(false);
    /*const [nodeType, setNodeType] = useState(null);*/
    const [nodeList, setNodeList] = useState([]);
    const [cancelNode, setCancelNode] = useState(false);
    /*
    const renderAddButton = () => {
        if (awaitMode === false) {
            return 
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

    useEffect(() => {
        console.log(nodeList)
        console.log(nodeList.length)
        console.log()
        let newList = nodeList
        newList.push(<Node nodeType='text' />)
        console.log(`setting nodeList to\n ${newList}`)
        setNodeList(newList)
    }, [nodeList])
    */
    return (
        <div className='article'>
            <>
                {
                    nodeList &&
                    nodeList.map(item => 
                        item
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