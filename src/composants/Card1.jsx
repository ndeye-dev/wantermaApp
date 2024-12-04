import React from 'react'

export default function Card1({img , titre, contenu}) {
  return (
    <div>
      <div className=''>
      <div className="bg-white p-10 flex  flex-col items-center">
          <img src={img} alt="Icone" className="w-[60px] " />
          <h2>{titre}</h2>
          <p>{contenu}</p>
        </div>
      </div>
      {/* <div>
      <h1 className="text-3xl text-[#f17e0a] font-bold mb-5">
        {titre}             
      </h1>
      <p>{contenu}</p>

      </div> */}
    </div>
  )
}
