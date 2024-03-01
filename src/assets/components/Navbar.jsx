import React from 'react';
// import { BeakerIcon } from '@heroicons/react/24/solid'

const navbar = () => {
    let Links = [
        {name: 'login', link: '/'},
    ]
    return (
        <div className='shadow-md w-full fixed top-0 left-0'>
            <div className='md:px-10 py-4 px-7 bg-black flex justify-between items-center'>
                {/* logo here */}
                <div className='flex text-2xl cursor-pointer items-center text-white'>
                    {/* <BeakerIcon className='w-7 h-7 text-white'/> */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
                    </svg>

                    
                </div>

                {/* links here */}
                <ul className='flex pl-9 md:pl-0 text-white'>
                    {
                        Links.map(link => (
                            // eslint-disable-next-line react/jsx-key
                            <li className='text-2xl'>
                                <a href="/">
                                    {link.name}
                                </a>
                            </li>
                        ))
                    }
                  
                </ul>
                
            </div>
            
        </div>
    );
};

export default navbar;