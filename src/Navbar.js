import React from 'react'


export default function Navbar(props) {
  return (
    <div className='Navbar'>
      <img src='https://cdn-icons-png.flaticon.com/512/4290/4290854.png' alt='cart-icon'></img>
      <span>{props.count}</span>
    </div>
  )
}
