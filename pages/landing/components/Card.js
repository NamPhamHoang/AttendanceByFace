import React from 'react'

const Card = props => {
  const { icon, title, content, nameClass } = props; 
  return (
    <div className={nameClass ? `big-card-bg ${nameClass}` : 'big-card-bg'}>
      <img className='icon-card' src={icon} alt="Icon"/>
      <p className='card-title'>{title}</p>
      <p className='card-content'>{content}</p>
    </div>
  )
}
export default Card;
