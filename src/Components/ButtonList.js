import React from 'react'
import Button from './Button'

const list = ["All", "Songs", "News", "Cricket", "Gaming" ];

const ButtonList = () => {
  return (
    <div className="flex">
      {list.map((item,index) => 
      <Button key={index} name={item}/>
      )}
    </div>
  )
}

export default ButtonList