import { useState } from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection';
import TypeWeb from './components/TypeWeb';
import Solusi from './components/Solusi';
import Kenapa from './components/Kenapa';
import HeaderButton from './components/HeaderButton';
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <HeroSection />
      <Solusi />  
      {/* <Kenapa /> */}
      <TypeWeb />
    </div>
  );
}

export default App
