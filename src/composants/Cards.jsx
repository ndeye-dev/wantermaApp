
import React from 'react';
import Buttons from './Buttons';

export default function Card({ image, title, price }) {
  return (
    <div className='bg-white p-10 shadow-lg'>
      <img src={image} alt={title} className='h-[260px]' />
      <p>{title}</p>
      <p className='text-[#f17e0a]'>{price}</p>
      <Buttons texte={'Voir produit'}/>
    </div>
  );
}