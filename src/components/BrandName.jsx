import React from 'react'
import '../styles/components/BrandName.scss'
const BrandName = ({isFooter=false}) => {
  let footerClasses = `brand ${isFooter===true?'footer':''}`
  return (
    <div className={footerClasses}>
        <span>Cryo</span>
    </div>
  )
}

export default BrandName