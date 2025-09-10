import './App.css';
import Hero from './components/secoes/Hero';
import ButtonStatic from './components/ui/buttonStatic';
import Header from './components/ui/header';
import Projetos from './components/secoes/Projetos';
import SobreMim from './components/secoes/SobreMim';
import Footer from './components/secoes/Footer';
import Conhecimento from './components/secoes/Conhecimento';
import LinesAnimation from './components/ui/LinesAnimation'; // sem chaves se o export for default

function App() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Fundo animado */}
      <div className="absolute inset-0 -z-10">
        <LinesAnimation />
      </div>

      {/* Conteúdo */}
      <Header />
      <Hero />
      <Projetos />
      <SobreMim />
      <Conhecimento />
      <Footer />
      <ButtonStatic />
    </div>
  );
}

export default App;
