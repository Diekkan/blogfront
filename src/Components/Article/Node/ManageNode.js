import React from "react"
import { useState } from "react"
import CancelIcon from './bx-x.svg'


const ManageNode = ({type}) => {

    return (
        <div className='manage-node'>
            <div id='cancel-node' onClick={() => type(null)}>
                <img className='button-icon' src={CancelIcon} alt=''></img>
            </div>
        </div>
    )
}

export default ManageNode
