import React, { useState } from 'react'
import QRCode from 'react-qr-code'
const QRcodeGEN = ({value}) => {
  return (
    <>
            {
                console.log(value)
            }
        <div className=''>
            <QRCode value={value}/>
            {/* <div className=''>
                <input type="text"  value={text} onChange={(e)=>setText(e.target.value)} />
                <button>Generate</button>
            </div> */}
        </div>
    </>
  )
}

export default QRcodeGEN