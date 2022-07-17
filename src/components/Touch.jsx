import React from 'react'
import '../styles/components/Touch.scss'
const Touch = ({icon,detailName,detailContent}) => {
  return (
    <div className="touch-section">
    <div className="icon">
        {icon}
    </div>
    <div className="details">
        <div className="detail-name">
            {detailName}
        </div>
        <div className="detail-content">
            <a href="#">{detailContent}</a>
        </div>
    </div>
</div>
  )
}

export default Touch