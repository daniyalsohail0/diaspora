import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ICOCounter from './components/ICOCounter';
import Features from './components/Features';
import TokenomicsOne from './components/TokenomicsOne';
import Roadmap from './components/Roadmap';
import TokenomicsTwo from './components/TokenomicsTwo';
import SocialMedia from './components/SocialMedia';
import CryptoTicker from './components/CryptoTicker';
import IVOBS from './components/IVOBS';
import MediaPartners from './components/MediaPartners';
import TechnicalPartners from './components/TechnicalPartners';
import Team from './components/Team';
import FAQs from './components/FAQs';
import Footer from './components/Footer';


function App() {
  return (
    <div className='bg-black'>
      <Navbar />
      <HeroSection />
      <ICOCounter />
      <Features />
      <TokenomicsOne />
      <Roadmap />
      <TokenomicsTwo />
      <SocialMedia />
      <CryptoTicker />
      <IVOBS />
      <MediaPartners />
      <TechnicalPartners />
      <Team />
      <FAQs />
      <Footer />
    </div>
  );
}

export default App;
