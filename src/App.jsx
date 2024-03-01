import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import './App.css';
import Navbar from './assets/components/Navbar';

function App() {
  useEffect(() => {
    let timeoutId;

    const handleScroll = () => {
      clearTimeout(timeoutId);

      timeoutId = setTimeout(() => {
        const scrollPosition = window.scrollY;
        const threshold = window.innerHeight * 0.7; // Adjust this value as needed

        if (scrollPosition >= threshold) {
          // Scroll fully over the second background image
          window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
        } else {
          // Bring the user back to the top
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 50); // Adjust debounce time as needed
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <Navbar />
      <div className="bg-[url('./images/buildingColour.png')] bg-cover">
        <div>
          <h1 className='pt-[16%] text-9xl flex flex-col items-end mr-[50%] '>
            photicted
            <span className="text-xl pr-2">photo addicted</span>
          </h1>
        </div>
        <div className='flex flex-col items-end mr-[46%]'>
          <p className='pt-[38%]'>
            explore my world
          </p>
          <FontAwesomeIcon icon={faChevronDown}  className='h-5 w-5 mr-[6%] mb-[17%]' />
        </div>
      </div>
      <div className='bg-[url(./images/treeColoured.png)] h-screen bg-cover'>
        <div className='text-center w-[35%]'>Discovered my passion for photography in school, where I learned to capture moments through various styles like black and white, landscapes, candid shots, and more. Editing photos allows me to add a personal touch. My diverse interests in perspective, cropping, and zooming drive my photographic journey, fueling my creative soul.</div>
      </div>
    </div>
  );
}

export default App;




/*import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import './App.css'
import Navbar from './assets/components/Navbar'






function App() {
  return (
    <>
      <div className="App">
        <Navbar/>
        <div className="bg-[url('./images/buildingColour.png')] bg-cover">
        
        <div className=''>
          <h1 className=' pt-[16%] text-9xl flex flex-col items-end mr-[50%] '>photicted
          <span className="text-xl pr-2">photo addicted</span></h1>
        </div>
        <div className='flex flex-col items-end mr-[46%]'>
          <p className='pt-[38%]'>
            explore my world
          </p>
          
          <FontAwesomeIcon icon={faChevronDown}  className='h-5 w-5 mr-[6%] mb-[17%]' />
        </div>
        </div>


        <div className='bg-[url(./images/treeColoured.png)] h-screen bg-cover'>
          <div className='text-center w-[35%]'>Discovered my passion for photography in school, where I learned to capture moments through various styles like black and white, landscapes, candid shots, and more. Editing photos allows me to add a personal touch. My diverse interests in perspective, cropping, and zooming drive my photographic journey, fueling my creative soul.</div>
        </div>
      </div>
    </>
  )
}

export default App*/
