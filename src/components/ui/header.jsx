import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-white/30 shadow-lg">
      <div className="flex items-center justify-around px-6 py-3">
        <a href="#sobre-mim"><p className="text-lg font-semibold">Helber Avelino</p></a>
        <nav className="hidden md:flex gap-8 text-[16px]">
          <a href="#projetos" className="hover:text-blue-600 transition">Projetos</a>
          <a href="#sobre-mim" className="hover:text-blue-600 transition">Sobre Mim</a>
          <a href="#experiencia" className="hover:text-blue-600 transition">Tecnologias & Experiências</a>
          <a href="#contato" className="hover:text-blue-600 transition">Contato</a>
        </nav>

        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {menuOpen && (
        <nav className="md:hidden flex flex-col items-center gap-6 py-6 bg-white/90 shadow-lg">
          <a href="#projetos" className="hover:text-blue-600 transition" onClick={() => setMenuOpen(false)}>Projetos</a>
          <a href="#quem-sou" className="hover:text-blue-600 transition" onClick={() => setMenuOpen(false)}>Quem sou?</a>
          <a href="#experiencia" className="hover:text-blue-600 transition" onClick={() => setMenuOpen(false)}>Experiência</a>
          <a href="#contato" className="hover:text-blue-600 transition" onClick={() => setMenuOpen(false)}>Contato</a>
        </nav>
      )}
    </header>
  );
};

export default Header;
