import React from 'react'
import { Avatar, AvatarImage } from '../ui/avatar'

const FemaleAvatar = () => {
  return (
    <div>
      <Avatar className='h-[150px] w-[150px]'>
        <AvatarImage src="/Female.jpg" />
      </Avatar>
    </div>
  )
}

export default FemaleAvatar
