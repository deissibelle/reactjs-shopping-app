

import './App.css'
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Banner from './components/Banners/Banner';

import Menu from './components/Menus/Menu';
function App() {
  

  return (
    <>
 <main className='overflow-x-hidden'>
  <Navbar/>
  <Hero/>
  <Menu/>
  <Banner/>
 </main>
    </>
  )
}

export default App
 