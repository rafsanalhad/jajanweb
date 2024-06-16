import { useState } from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection';
import Solusi from './components/Solusi';
import Kenapa from './components/Kenapa';
import HeaderButton from './components/HeaderButton';
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen w-full" style={{backgroundColor: '#f0f0f0'}}>
      <Navbar />
      <HeroSection />
      <Solusi />  
      <Kenapa />
    </div>
  );
}

export default App
