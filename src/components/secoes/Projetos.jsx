import Card from "../ui/card";


const Projetos = () => {
    const cards = [
        { titulo: 'Acesso Livre - Guia de Direitos', descricao: 'Landing page informativa que destaca direitos e orientações sobre acessibilidade. Desenvolvida com foco em comunicação clara, design responsivo e experiência do usuário, voltada para promover inclusão e conscientização.',   image: '/images/image-fund.jpg', tecnologias: 'TypeScript, Javascript, NextJS, ReactJS, TailwindCSS e Vercel', link: 'https://acesso-livre-guia.vercel.app/' },
        { titulo: 'Landing Page Inspiratto', descricao: 'Landing page promocional da linha Inspiratto, apresentando cortes especiais de frango, receitas exclusivas e pontos de venda. Desenvolvida com design responsivo e foco em experiência do usuário, comunicação clara e promoção da marca.',   image: '/images/image-fund.jpg', tecnologias: 'TypeScript, Javascript, NextJS, ReactJS, TailwindCSS, SwiperJS e Vercel', link: 'https://landingpage-bomtodo.vercel.app/' },
        { titulo: 'Pretorian Asset', descricao: 'Site institucional da Pretorian Asset, focado em soluções contábeis e financeiras para empresas e investidores. Apresenta serviços como contabilidade estratégica, recuperação tributária, gestão de colaboradores com atenção à usabilidade e comunicação clara.',  image: '/images/image-fund.jpg', tecnologias: 'Javascript, NextJS, ReactJS, TailwindCSS, SwiperJS e Netlify', link: 'https://asset.pretoriancontabilidade.com.br/' },
        { titulo: 'Yellow Summit', descricao: 'Site do Yellow Summit 2025, focado em marketing, vendas e inovação. Apresenta programação, palestrantes, credenciamento e benefícios do evento, com design responsivo e foco em usabilidade.',  image: '/images/image-fund.jpg', tecnologias: 'TypeScript, Javascript, NextJS e TailwindCSS', link: 'https://yellowsummit.com.br/' }
        // { titulo: 'Huddle Page', descricao: 'Landing page desenvolvida como parte de um desafio do Frontend Mentor, inspirada no design Huddle e voltada para prática de layout responsivo.',  image: '/images/image-fund.jpg', tecnologias: 'HTML, CSS e Javascript', link: 'https://huddle-landing-page-weld-one.vercel.app/' }
    ]
    return (
        <div id="projetos" className="py-12 px-12 md:px-24 lg:px-64 min:h-screen flex flex-col justify-center items-center">
            <h2 className="text-2xl text-blue-500 md:text-2xl font-bold text-center mb-8">
                Projetos Principais
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {cards.map((card, index) => (
                    <Card
                        key={index}
                        titulo={card.titulo}
                        descricao={card.descricao}
                        image={card.image}
                        tecnologias={card.tecnologias}
                        link={card.link}
                    />
                    
                ))}
            </div>
            <div className="pt-12">
                <a href="https://github.com/helberkaue" className="text-blue-600 underline">Mais projetos no GitHub</a>
            </div>
        </div>
    )
}
export default Projetos;