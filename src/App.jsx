import { useState } from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection';
import TypeWeb from './components/TypeWeb';
import Solusi from './components/Solusi';
import Kenapa from './components/Kenapa';
import HeaderButton from './components/HeaderButton';
import PacketWeb from './components/PacketWeb';
import Accordion from './components/Accordion';
import Footer from './components/Footer';
import TopFooter from './components/TopFooter';
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <HeroSection />
      
      <Kenapa />
      <TypeWeb />
      <PacketWeb />
      <Accordion />
      <TopFooter />
      <Footer />
    </div>
  );
}

export default App
