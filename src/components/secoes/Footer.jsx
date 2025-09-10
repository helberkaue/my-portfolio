import { FaLinkedin, FaGithub, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer id="contato" className="py-6 px-6 md:px-12 lg:px-32 flex justify-center">
            <div className="flex flex-col md:flex-row items-center gap-24">
                
                <p className="text-2xl text-blue-500 font-bold md:mr-8">Contato</p>

                <div className="flex flex-col sm:flex-row gap-8">
                    <div className="flex flex-col gap-4">
                        <a
                            href="https://www.linkedin.com/in/helber-avelino-32391a208/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 w-40 h-11 justify-center rounded-lg"
                        >
                            <FaLinkedin color="green" size={20} />Linkedin
                        </a>
                        <a
                            href="https://github.com/helberkaue"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 w-40 h-11 justify-center rounded-lg"
                        >
                            <FaGithub color="green" size={20} />GitHub
                        </a>
                    </div>

                    <div className="flex flex-col gap-4">
                        <a
                            href="mailto:helber.avelino05@gmail.com"
                            className="flex items-center gap-2 w-40 h-11 justify-center rounded-lg"
                        >
                            <FaEnvelope color="green" size={20} />E-mail
                        </a>
                        <a
                            href="https://wa.me/5582999916628"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 w-40 h-11 justify-center rounded-lg"
                        >
                            <FaWhatsapp color="green" size={20} />WhatsApp
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
