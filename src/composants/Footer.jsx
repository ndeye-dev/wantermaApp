import React from 'react'

export default function Footer() {
    return (
        <div>

            <footer className='bg-black text-center'>
                   {/* section6 */}
            <div className='bg-[#f6f7fb] '>
            <div className='text-center mt-10'>
                <h2 className='p-2'>Wanterma ?</h2>
                <p className='p-2'>Abonnez-vous à notre newsletter pour recevoir des mises à jour sur nos dernières offres!</p>
                <div>
                    <form className="max-w-lg mx-auto pb-7">
                        <div className="flex">                            
                            <div className="relative w-full">
                                <input type="search" id="search-dropdown" className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="Email Address" required />
                                <button type="submit" className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-gray-800   hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    S'abonner
                                </button>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
            </div>
                <div className=' grid grid-cols-1 md:grid-cols-4 gap-6 mt-10 mx-auto container '>
                    <div className='py-4'>
                        <h1 className='text-white font-bold '>A propos</h1>
                        <div className='text-gray-400 text-sm'>
                        <p>Entreprise</p>
                        <p>Localisation</p>
                        <p>Contact</p>
                        <p>Horiares d'ouverture</p>
                        </div>
                    </div>
                    <div className='py-4'>
                        <h1 className='text-white font-bold '>A propos</h1>
                        <div className='text-gray-400 text-sm'>
                        <p>Entreprise</p>
                        <p>Localisation</p>
                        <p>Contact</p>
                        <p>Horiares d'ouverture</p>
                        </div>
                    </div>
                    <div className='py-4'>
                        <h1 className='text-white font-bold '>A propos</h1>
                        <div className='text-gray-400 text-sm'>
                        <p>Entreprise</p>
                        <p>Localisation</p>
                        <p>Contact</p>
                        <p>Horiares d'ouverture</p>
                        </div>
                    </div>
                    <div className='py-4'>
                        <h1 className='text-white font-bold '>A propos</h1>
                        <div className='text-gray-400 text-sm'>
                        <p>Entreprise</p>
                        <p>Localisation</p>
                        <p>Contact</p>
                        <p>Horiares d'ouverture</p>
                        </div>
                    </div>
                </div>
                
            </footer>
            <div className='bg-gray-900 py-4'>
                    <p className='text-gray-400 text-sm text-center'>Cette plateforme est réalisée par <span className='text-1xl text-white font-bold'>NGONE</span></p>
                </div>
        </div>
    )
}