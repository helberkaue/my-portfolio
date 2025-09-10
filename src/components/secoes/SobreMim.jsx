const SobreMim = () => {
  return (
    <div id="sobre-mim" className="py-12 px-4 sm:px-6 md:px-12 lg:px-24 xl:px-32 min-h-screen flex flex-col lg:flex-row gap-12 justify-center items-center">
      <div className="w-full max-w-4xl flex flex-col items-center lg:items-start text-left">
        <h2 className="text-2xl sm:text-3xl md:text-4xl text-blue-500 font-bold mb-8">
          Sobre mim
        </h2>
        <p className="text-sm sm:text-base md:text-lg tracking-wide mb-6">
          Sou Helber Avelino, tenho 20 anos e atuo como desenvolvedor e analista
          de sistemas na agência de marketing Yellow Kite. Possuo mais de um ano
          de experiência na área de tecnologia, sempre buscando ser curioso e
          proativo no aprendizado. Atualmente, sou graduando em Ciências da
          Computação, no 6º período, e busco constantemente aprimorar minhas
          habilidades. Minha carreira começou como suporte técnico em uma
          startup, e desde então venho evoluindo e consolidando minha trajetória
          no mercado de tecnologia.
        </p>
        <p className="text-sm sm:text-base md:text-lg tracking-wide mb-6">
          Meu objetivo é me tornar um desenvolvedor reconhecido no mercado, com
          foco em desenvolvimento FullStack. Atualmente, estou aprimorando meus
          conhecimentos em front-end, devido às demandas do meu trabalho, mas
          também estudo de forma paralela estruturas e stacks de back-end, para
          construir soluções completas e robustas.
        </p>
      </div>

      <div className="w-full max-w-xs sm:max-w-sm md:max-w-md flex justify-center">
        <img
          src="/images/image-kaue.png"
          alt="Foto de Helber Avelino"
          className="w-full rounded-lg border shadow-lg object-cover"
        />
      </div>
    </div>
  );
};

export default SobreMim;
