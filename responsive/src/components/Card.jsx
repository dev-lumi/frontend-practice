import React from 'react'

const Card = () => {
  return (
    <div className='ring w-80 rounded m-10 p-4 text-black'>
        <h1 className='text-2xl font-semibold mb-3'>Heading</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis id eum unde vero libero, animi similique corrupti qui sunt iste.</p>
        <div className='ring h-40 rounded mt-4 bg-gray-200'></div>
        <div>
          <button className='ring mt-5 px-5 py-2 rounded w-full hover:font-semibold hover:bg-gray-500/30'>click</button>
        </div>
    </div>
  )
}

export default Card