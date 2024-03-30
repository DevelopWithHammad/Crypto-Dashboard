import React from 'react';  

const Info = ({title, text, className, titleClass, textClass, style}) => {
  console.log(className);
  return (
    <div className={`w-1/2 px-6 py-6 mb-12 rounded-2xl mt-6 ${className ? className : ''}`}
    style={style}
    >
        <h4 className={`px-2 py-1 rounded-full text-sm font-medium inline ${titleClass ? titleClass : ''} `} >{title}</h4>
        <p className={`mt-4 text-lg font-medium ${textClass ? textClass : ''}`}>{text}</p>
    </div>
  )
}

export default Info
