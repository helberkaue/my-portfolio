import { FaLaptopCode, FaEnvelope } from "react-icons/fa";
import SetaAnimada from '../ui/setaAnimada';
import { ReactTyped } from 'react-typed';

const Hero = () => {
    return (
        <div className="relative h-screen flex flex-col justify-center items-center px-6 md:px-12 lg:px-24">
            <div className="flex flex-col gap-2 text-center justify-center max-w-4xl">
                <p className="text-2xl md:text-3xl font-semibold">Olá, me chamo Helber Avelino</p>

                <h1 className="text-4xl md:text-6xl text-blue-600 font-bold">
                    <ReactTyped
                        strings={['FULLSTACK DEVELOPER', 'COMPUTER SCIENTIST']}
                        typeSpeed={150}
                        backSpeed={80}
                        loop={true}
                        cursorChar={'>'}
                        showCursor={true}
                    />
                </h1>

                <div className="flex flex-col items-center gap-8">
                    <p className="text-center text-black md:text-lg px-4 md:px-12 lg:px-32 break-words">
                        Desenvolvedor Full Stack, dedicado em construir sistemas eficientes no Backend, e criar interfaces intuitivas no Frontend, transformando desafios em soluções inteligentes!
                    </p>

                    <div className="flex flex-wrap justify-center gap-4">
                        <button className="border border-green-600 text-lg transition duration-500 hover:bg-green-200 rounded-lg px-6 py-2 flex items-center gap-2">
                            <FaLaptopCode color="green" size={20} /> Projetos
                        </button>
                        <button className="border bg-blue-500 hover:bg-blue-400 text-lg transition duration-500 text-white rounded-lg px-6 py-2 flex items-center gap-2">
                            <FaEnvelope color="white" size={20} /> Contato
                        </button>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-10">
                <SetaAnimada />
            </div>
        </div>
    )
}

export default Hero;
