import React from 'react'

export default function Buttons({texte}) {
  return (
    <div>
      <button className='text-sm p-2 bg-gray-800 text-white px-2 mt-4' type='button'>
        {texte}
      </button>
    </div>
  )
}
