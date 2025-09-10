
const CardConhecimento = ({ titulo, descricao, image, habilidades }) => {
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
                <div>
                    <p className="text-blue-400 text-lg font-semibold">Habilidades Adquiridas: <p className="text-gray-600 font-semibold text-sm sm:text-base">{habilidades}</p>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CardConhecimento;
