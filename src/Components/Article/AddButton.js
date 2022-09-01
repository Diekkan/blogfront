import React from 'react'
import AddButtonIcon from './bx-plus.svg'

const AddButton = ({awaitMode, setAwaitMode}) => {

    function handleClick(){
        if (awaitMode !== true){
            setAwaitMode(true)
            console.log(awaitMode)
        }
        return
    }

    return (
            <div className='add-button' onClick={() => handleClick()}>
                <img id='add-icon' src={AddButtonIcon} alt=''/>
            </div>
            )
}

export default AddButton