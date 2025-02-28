import React from 'react'
import Button from './Button'
import { BiEdit } from 'react-icons/bi'

const Profile = () => {
  return (
    <div className='h-auto flex flex-col justify-center items-center gap-2'>
      <div className='size-28 bg-white dark:bg-secondaryDark rounded-full'>

      </div>

      <p className='text-secondaryDark dark:text-white'>Nathan Solomon</p>
      <Button text='Edit Profile' icon={<BiEdit/>} iconPosition='right' className='w-max'/>
    </div>
  )
}

export default Profile