import { MdFileDownload } from "react-icons/md";

const ButtonStatic = () => {
  return (
    <div className="fixed bottom-8 right-8 z-50">
      <button className="flex items-center gap-2 px-8 py-2 text-white font-semibold rounded-lg bg-gradient-to-r from-blue-400 to-blue-700 hover:from-blue-400  hover:to-blue-600 transition duration-500 text-sm md:text-base shadow-lg">
        <MdFileDownload size={20} />
        Currículo
      </button>
    </div>
  );
};

export default ButtonStatic;
