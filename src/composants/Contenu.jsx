
import React, { useState, useEffect } from 'react';
import Card from './Cards';
import Img1 from '../assets/image1.png';
import Img2 from '../assets/im2.png';
import Img3 from '../assets/im3.png';
import Card1 from './Card1';
import Buttons from './Buttons';

export default function Contenu() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const cardsData = [
        {
            image: Img1,
            titre: 'Meilleurs prix',
            contenu: 'Dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.'
        },
        {
            image: Img2,
            titre: 'Livraison rapide',
            contenu: 'Dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.'
        },
        {
            image: Img3,
            titre: 'Retours sans frais',
            contenu: 'Dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor'
        },
    ];
    const cardProduct = products[2];

    useEffect(() => {
        // Récupération des produits de l'API
        fetch('https://fakestoreapi.com/products')
            .then((response) => response.json())
            .then((data) => {
                setProducts(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Erreur lors de la récupération des produits:', error);
                setLoading(false);
            });
    }, []);

    return (
        <div>
            {/* Section 1 */}
            <div className="bg-white grid grid-cols-1 md:grid-cols-2 gap-6 p-6 mt-10 mx-auto container">
                <div className="p-10">
                {cardProduct && (
                        <div>
                        <h1 className="text-3xl text-[#f17e0a] font-bold mb-5">
                            {cardProduct.title}
                        </h1>
                        <p>{cardProduct.description}</p>
                    </div>
                    )}
                    <Buttons texte={'Achetez maintenant'}/>
                </div>
                <div>
                    <p>
                        {loading ? (
                            <p>Chargement des images...</p>
                        ) : (
                            <img src={products[2]?.image} alt="Image produit" className="h-[250px] w-[250px]" />
                        )}
                    </p>
                </div>
            </div>

            {/* Section 2 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10 mx-auto container text-center">
                {
                    cardsData.map((cardData) => <Card1 img={cardData.image} titre={cardData.titre} contenu={cardData.contenu} />)
                }
            </div>

            {/* Section 3 */}
            <div className="bg-white grid grid-cols-1 md:grid-cols-2 gap-10 p-6 mt-10 mx-auto container">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="p-10">
                        <h1 className="text-sm text-[#f17e0a] mb-5">{products[19]?.title}</h1>
                        <p>Offre limitée jusqu'à 30%</p>
                        <Buttons texte={'Achetez maintenant'}/>
                    </div>
                    <div>
                        <img src={products[19]?.image} alt="Image tendance" />
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="p-10">
                        <h1 className="text-1xl text-[#f17e0a] mb-5">{products[3]?.title}</h1>
                        <p>Nouvelles Arrivées jusqu'à 50%</p>
                        <Buttons texte={'Achetez maintenant'}/>
                    </div>
                    <div>
                        <img src={products[3]?.image} alt="Image tendance" />
                    </div>
                </div>
            </div>

            {/* Section 4 */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-10 mx-auto container">
                {products.slice(0, 5).map((product) => (
                    <Card
                        key={product.id}
                        image={product.image}
                        title={product.title}
                        price={`${product.price}`} />
                ))}
            </div>

            {/* Section 5  */}
            <div className="bg-white grid grid-cols-1 md:grid-cols-2 gap-6 p-6 mt-10 mx-auto container shadow-lg">
                <div className="p-10">
                    <img src={products[18]?.image} alt="Image tendance" className="h-[350px]" />
                </div>
                <div className="bg-[#eee8aa]">
                    <div className="p-10">
                        <p className="text-2xl font-bold">{products[18]?.title}</p>
                        <p>Suspendisse massa leo, vesti cursus nulla sit amet, placerat lorem.</p>
                        <Buttons texte={'Achetez maintenant'}/>
                    </div>
                </div>
            </div>
        </div>
    );
}
