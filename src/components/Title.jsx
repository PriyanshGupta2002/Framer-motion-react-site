import React from 'react'
import '../styles/components/Title.scss'
const Title = ({title,color,lineCenter=false}) => {
  return (
    <div className={`title ${lineCenter===true?"center":""}`}>
        <h2>{title}</h2>
        <div className={`${color}`}>
            
        </div>
    </div>
  )
}

export default Title