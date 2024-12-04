import React from 'react'

export default function Navbar() {
  return (
    <div>
<nav className="bg-white shadow-lg  border-gray-200 dark:bg-gray-900">
    <div className='container mx-auto'>
    <div className=" flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4 ">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-[#f1356d] font-bold">Wanterma</span>
        </a>
        <div className="flex items-center space-x-6 rtl:space-x-reverse">
        <div className="flex items-center">
            <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
                <li>
                    <a href="#" className="text-gray-600 dark:text-white hover:#f1356d" aria-current="page">Tous</a>
                </li>
                <li>
                    <a href="#" className="text-gray-600 dark:text-white hover:#f1356d" aria-current="page">Hommes</a>
                </li>
                <li>
                    <a href="#" className="text-gray-600 dark:text-white hover:#f1356d">Femmes</a>
                </li>
                <li>
                    <a href="#" className="text-gray-600 dark:text-white hover:#f1356d">Enfants</a>
                </li>
                <li>
                    <a href="#" className="text-gray-600 dark:text-white hover:#f1356d">Vente</a>
                </li>
                <li>
                    <a href="#" className="text-gray-600 dark:text-white hover:#f1356d">Chariot <span className='bg-red-600 p-1 text-white rounded-sm'>0</span></a>
                </li>
            </ul>
        </div>
        </div>
    </div>
    </div>  
</nav>
</div>
  )
}

