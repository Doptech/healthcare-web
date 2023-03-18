import React from 'react'

const QRScanContext = React.createContext();

export const Consumer = QRScanContext.Consumer;
export const Provider = QRScanContext.Provider;

const QRContext = () => {
  return (
    <div>QRContext</div>
  )
}

export default QRContext