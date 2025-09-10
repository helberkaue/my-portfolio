import { FaLaptopCode } from "react-icons/fa";

const Card = ({ titulo, descricao, image, tecnologias, link }) => {
    return (
        <div className="bg-white rounded-xl shadow-md p-6 sm:p-8 md:p-10 flex flex-col gap-4 hover:shadow-lg transition w-full max-w-sm md:max-w-md mx-auto">
            <h1 className="text-base sm:text-lg md:text-xl text-green-600 font-semibold text-center">
                {titulo}
            </h1>

            <img
                src={image}
                alt={titulo}
                className="w-full h-40 sm:h-48 md:h-56 object-cover rounded-lg"
            />

            <div className="flex flex-col flex-1 justify-between">
                <p className="text-gray-600 text-sm sm:text-base text-left mb-4">
                    {descricao}
                </p>

                <div className="text-left text-sm sm:text-base">
                    <span className="text-green-600 font-medium">Tecnologias Utilizadas: </span>
                    <span className="text-black">{tecnologias}</span>
                </div>
            </div>

            <div className="flex justify-center">
                <a href={link} target="_blank" rel="noopener noreferrer">
                    <button className="border mt-6 border-green-600 text-sm sm:text-base md:text-lg transition duration-500 hover:bg-green-200 rounded-lg px-4 sm:px-6 py-2 flex items-center gap-2">
                        <FaLaptopCode color="green" size={20} /> Projeto
                    </button>
                </a>
            </div>
        </div>
    );
};

export default Card;
