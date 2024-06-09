import {Routes, Route } from 'react-router-dom'
import HeroSection16 from './components/HeroSection16'
import Documentation from './components/Documentation'
import Hero from './components/Hero'
import { FooterWithSocialLinks } from './components/FooterWithSocialLinks'



function App() {
 

  return (
    <>
    <HeroSection16 />
  
    <Routes>
      <Route path='/' element={<Hero />}/>
      <Route path='/documentation' element={<Documentation />}/>
    </Routes>

      <FooterWithSocialLinks />
    </>
  )
}

export default App
