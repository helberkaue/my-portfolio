import CardConhecimento from "../ui/cardConhecimento";
import {
    SiNextdotjs,
    SiReact,
    SiJavascript,
    SiTypescript,
    SiTailwindcss,
    SiMysql,
    SiHtml5,
    SiCss3
} from "react-icons/si";


const Conhecimento = () => {
    const cards = [
        { titulo: "Analista de Sistemas Júnior", descricao: "Atuo como Analista de Sistemas com foco em desenvolvimento web e automação de processos, atuando na criação e integração de soluções que otimizam fluxos de trabalho. Tenho experiência em integração de sistemas via APIs e na implantação de ferramentas corporativas, como Yellow Talks e Bitrix, contribuindo para a modernização da comunicação e da gestão empresarial.", image: "/images/image-Yellow.png", habilidades: "Desenvolvimento de sistemas e interfaces, Suporte técnico e implantação de sistemas, Automação de processos e integração de sistemas e Comunicação e trabalho em equipe." },
        { titulo: "Suporte Técnico", descricao: "Trabalhei como Suporte ao cliente utilizando a plataforma Bitrix e Fortics, irei atuar diretamente com a inserção e gestão de usuários, realizando alterações necessárias para garantir o bom funcionamento do sistema. Utilizando meus conhecimentos em computação, poderei solucionar problemas técnicos, otimizar processos e prestar um atendimento eficiente.", image: "/images/image-Myia.png", habilidades: "Suporte técnico em ferramentas, Desenvolvimento de automações e Comunicação efetiva com o time de desenvolvimento." },

    ]
    return (
        <div id="experiencia" className="py-12 lg:py-24 px-12 md:px-24 lg:px-64 min:h-screen flex flex-col justify-center gap-8 items-center">
            <h2 className="text-2xl text-blue-500 md:text-2xl font-bold text-center mb-8">
                Tecnologias & Experiências
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {cards.map((card, index) => (
                    <CardConhecimento
                        key={index}
                        titulo={card.titulo}
                        descricao={card.descricao}
                        image={card.image}
                        habilidades={card.habilidades}
                    />

                ))}
            </div>
            <div className="flex gap-4">
                <SiNextdotjs color="#000000" size={50} />
                <SiReact color="#61DAFB" size={50} />
                <SiJavascript size={50} color="#F7DF1E" />
                <SiTailwindcss color="#06b6d4" size={50} />
                <SiTypescript size={50} color="#3178c6" />
                <SiMysql color="#4479a1" size={50} />
                <SiHtml5 color="#e34f26" size={50} />
                <SiCss3 color="#1572b6" size={50} />

            </div>
        </div>
    )
}
export default Conhecimento;