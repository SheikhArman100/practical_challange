import React from 'react'

const ColorButton = () => {
  return (
    <div className='flex items-center gap-x-4'>
        {/* red */}
        <div className='relative h-6 w-6 bg-red-700'>
            <input type='radio' className='h-6 w-6' value="red"/>
        </div>
        {/* blue */}
        <div className='relative h-6 w-6 bg-blue-700'>
            <input type='radio' className='h-6 w-6' value="blue"/>
        </div>
        {/* yellow */}
        <div className='relative h-6 w-6 bg-yellow-700'>
            <input type='radio' className='h-6 w-6' value="yellow"/>
        </div>
        {/* green */}
        <div className='relative h-6 w-6 bg-green-700'>
            <input type='radio' className='h-6 w-6' value="green"/>
        </div>
    </div>
  )
}

export default ColorButton