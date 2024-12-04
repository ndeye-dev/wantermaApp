
import React, { useState, useEffect } from 'react';
import Img1 from '../assets/image1.png';
import Img2 from '../assets/im2.png';
import Img3 from '../assets/im3.png';

export default function Contenu() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        // Récupération des produits de l'API
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => {
                setProducts(data);
                setLoading(false); 
                console.log(data);
                
            })
            .catch(error => {
                console.error("Erreur lors de la récupération des produits:", error);
                setLoading(false);
            });
    }, []);

    return (
        <div>
            {/* section1 */}
            <div className='bg-white grid grid-cols-1 md:grid-cols-2 gap-6 p-6 mt-10 mx-auto container'>
                <div className='p-10'>
                    <h1 className='text-3xl text-[#f17e0a] font-bold mb-5'>{products[2]?.title}</h1>
                    <p>
                       {products[2]?.description}
                    </p>
                    <button className='bg-gray-800 text-white py-2 px-4 mt-4' type='button'>
                        Achetez maintenant
                    </button>
                </div>
                <div className=''>
                    <p>
                      
                        {loading ? <p>Chargement des images...</p> : <img src={products[2]?.image} alt="Image produit" className='h-[250px] w-[250px]' />}
                    </p>
                </div>
            </div>
            
            {/* section2 */}
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4  mt-10 mx-auto container'>
                <div className='bg-white p-10 '>
                    <img src={Img1} alt="Icone" className='w-[60px]'/>
                    <h2>meilleurs prix</h2>
                    <p>Dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
                </div>
                <div className='bg-white p-10'>
                    <img src={Img2} alt="Icone" className='w-[60px]'/>

                    <h2>Livraison rapide</h2>
                    <p>Dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
                </div>
                <div className='bg-white p-10'>
                    <img src={Img3} alt="Icone" className='w-[60px]'/>

                    <h2>Retours sans frais</h2>
                    <p>Dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
                </div>
            </div>

            {/* section3 */}
            <div className='bg-white grid grid-cols-1 md:grid-cols-2 gap-6 p-6 mt-10 mx-auto container'>
                <div className='grid grid-cols-1 md:grid-cols-2'>
                    <div className=' p-10'>
                        <h1 className='text-sm text-[#f17e0a] mb-5'>{products[19]?.title}</h1>
                        <p>
                            Offre limitee jusqu'a 30%
                        </p>
                        <button className='bg-gray-800 text-white  px-2 mt-4' type='button'>
                            Achetez maintenant
                        </button>
                    </div>
                    <div>
                    <img src={products[19]?.image} alt="Image tendance" />
                    </div>
                </div>
                <div className=''>
                    <div className='grid grid-cols-1 md:grid-cols-2'>
                        <div className='p-10 '>
                            <h1 className='text-1xl text-[#f17e0a] mb-5'>{products[3]?.title}</h1>
                            <p>
                                Nouvelles Arrivees jusqu'a 50%
                            </p>
                            <button className='bg-gray-800 text-white  px-2 mt-4' type='button'>
                                Achetez maintenant
                            </button>
                        </div>
                        <div>
                        <img src={products[3]?.image} alt="Image tendance" />

                        </div>
                    </div>
                </div>
            </div>

          
            {/* section4 */}
             <div className=' grid grid-cols-1 md:grid-cols-4 gap-6 mt-10 mx-auto container'>
                 <div className='bg-white p-10 shadow-lg'>
                     <img src={products[3]?.image} alt="" />
                     <p>{products[3]?.title}</p>
                     <p className='text-[#f17e0a]'>francs 500</p>
                     <button className='bg-gray-800 text-white  px-2 mt-4' type='button'>
                         Voir produit
                     </button>
                 </div>
                 <div className='bg-white p-10 shadow-lg'>
                     <img src={products[16]?.image} alt="" />
                     <p>{products[16]?.title}</p>
                     <p className='text-[#f17e0a]'>francs 500</p>
                     <button className='bg-gray-800 text-white  px-2 mt-4' type='button'>
                         Voir produit
                     </button>
                 </div>
                 <div className='bg-white p-10 shadow-lg'>
                     <img src={products[7]?.image} alt="" />
                     <p>{products[7]?.title}</p>
                     <p className='text-[#f17e0a]'>francs 500</p>
                     <button className='bg-gray-800 text-white  px-2 mt-4' type='button'>
                         Voir produit
                     </button>
                 </div>
                 <div className='bg-white p-10 shadow-lg'>
                     <img src={products[0]?.image} alt="" />
                     <p>{products[0]?.title}</p>
                     <p className='text-[#f17e0a]'>francs 500</p>
                     <button className='bg-gray-800 text-white  px-2 mt-4' type='button'>
                         Voir produit
                     </button>
                 </div>
                 <div className='bg-white p-10 shadow-lg'>
                     <img src={products[4]?.image} alt="" />
                     <p>{products[4]?.title}</p>
                     <p className='text-[#f17e0a]'>francs 500</p>
                     <button className='bg-gray-800 text-white  px-2 mt-4' type='button'>
                         Voir produit
                     </button>
                 </div>
             </div>

            {/* section5 */}
            <div className='bg-white grid grid-cols-1 md:grid-cols-2 gap-6 p-6 mt-10 mx-auto container shadow-lg'>
                <div className='p-10'>
                    <img src={products[18]?.image} alt="Image tendance" />
                </div>
                <div className='bg-[#eee8aa]'>
                    <div className='p-10 '>
                        <p className='text-2xl font-bold'>
                        {products[18]?.title}
                        </p>
                        <p>Suspendisse maasa leo , vesti cursus nulla sit amet, placeratlorem.</p>
                        <button className='bg-gray-800 text-white  px-2 mt-4' type='button'>
                            Achetez maintenant
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
