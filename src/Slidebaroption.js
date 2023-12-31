import React from 'react'
import './Slidebaroption.css';

function Slidebaroption({Icon,title,number,selected}) {
  return (
    <div className={'slideroption ${selected && "slidebar-option"} '  }>
        <Icon className="icon"/>
        <h3>{title}</h3>
        <p>{number}</p>
    </div>
  )
}

export default Slidebaroption
