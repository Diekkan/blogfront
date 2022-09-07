import React from 'react'
import { useState } from 'react'

const ImageNode = ({id, content, setContent, type}) => {

    const [ local, setLocal ] = useState(true)
    const [ submit, setSubmit] = useState(false)

  return (
    <>
        {
            submit ?
            <img src={content} alt=''></img> :
            <>
                <dialog className='upload-img'>
                    <p> Cargar una imagen </p>
                    <div className='upload-options'>
                        <span onClick={() => setLocal(true)}>Archivo local</span>
                        <span onClick={() => setLocal(false)}>URL</span>
                    </div>
                    { local ? 
                        <label className='upload-img-local'>
                            <p> Cargar archivo...</p>
                            <input id='img-local' type='file'></input>
                        </label>
                        :
                        <input className='upload-img-url'
                            onChange={(e) => setContent(e.target.value)}
                            value={content}
                            placeholder='Escribe la URL externa'>    
                    </input>
                    }
                    <div className='submit-img' onClick={() => setSubmit(true)}>Cargar</div>
                </dialog>
            </>
        }
    </>
  )
}

export default ImageNode