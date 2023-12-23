'use client'

import { useState, useEffect } from 'react';

const Alert:React.FC<{Errmsg: string }> = ({Errmsg}) => {
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    setShowAlert(Errmsg !== '');
  }, [Errmsg]);

  return showAlert ? 
    <div className={`fixed animation-slideRight top-5 right-0 transition-opacity duration-300 ${showAlert ? 'opacity-100' : 'opacity-0'}`}>
      {showAlert && (
        <div className="bg-red-500 text-white font-bold rounded-t px-4 py-2">
          تحذير
        </div>
      )}
      {showAlert && (
        <div className="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
          <p>{Errmsg}</p>
        </div>
      )}
    </div>
  : false
};

export default Alert;