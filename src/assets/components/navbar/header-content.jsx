import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { MdEmail } from "react-icons/md";
import { RxDoubleArrowDown } from "react-icons/rx";
import { colors } from '../../styles/colors';
import { ThemeContext } from '../../../ThemeContext';
import { useContext } from 'react';


const Header = () => {
    const { theme } = useContext(ThemeContext)
    const currentColor = colors[theme];

    return (
        <>
            <section style={{ height: `calc(100vh - 110px)` }} className="max-w-[1536px] mx-auto flex flex-col px-4 py-14 md:justify-normal md:py-8 md:relative md:px-0">
                <div className=' flex flex-col gap-4 md:w-1/2 md:mb-8 md:mt-14'>
                    <h1 className={`flex justify-center text-3xl font-bold antialiased md:text-5xl md:justify-normal md:whitespace-nowrap text-base/5 text-[${currentColor.textTransparent}]`}>Hello, i'm Wellington</h1>
                    <h1 className='flex justify-center text-3xl font-bold antialiased md:text-8xl md:justify-normal md:whitespace-nowrap'>Nice To see you</h1>
                    <div className="flex justify-center text-center md:mb-8 md:mt-4">
                        <span className=' md:text-left text-base/5'>Olá, eu sou welligton, desenvolvedor especializado em <strong className={`text-[${currentColor.primary}] font-semibold`}>react</strong>, <strong className={`text-[${currentColor.primary}] font-semibold`}>nodejs</strong>. Transformo ideias em soluções criativas e eficientes. por tecnologia e soluções inovadoras. Com expertise em [suas principais habilidades, ex: desenvolvimento web, mobile, backend, etc.], estou sempre em busca de novos desafios para transformar ideias em realidade. Explore meus projetos e veja como posso contribuir para o sucesso do seu próximo projeto!</span>
                    </div>

                    <div className="flex justify-center gap-4 md:justify-left md:hidden">
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className={`text-2xl text-[${currentColor.primary}] hover:text-[${currentColor.hover}]`} />
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <FaGithub className={`text-2xl text-[${currentColor.primary}] hover:text-[${currentColor.hover}]`} />
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <MdEmail className={`text-2xl text-[${currentColor.primary}] hover:text-[${currentColor.hover}]`} />
                        </a>
                    </div>
                    <div className='flex justify-center text-3xl mt-8 animate-bounce z-0 md:absolute md:top-0 md:transform md:translate-y-1/2 '>
                        <a href="#projetos">
                        <RxDoubleArrowDown />
                        </a>
                    </div>

                    <div className="hidden md:block md:absolute md:top-1/3 md:right-0 md:transform md:-translate-y-1/2 md:flex md:flex-col md:gap-4">
                        <a href="#" target="_blank" rel="noopener noreferrer"
                            className="hover:animate-pulse hover:scale-110 duration-300"
                        >
                            <FaLinkedin className={`text-2xl text-[${currentColor.primary}] hover:text-[${currentColor.hover}] md:w-8 md:h-8`} />
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer"
                            className="hover:animate-pulse hover:scale-110 duration-300"
                        >
                            <FaGithub className={`text-2xl text-[${currentColor.primary}] hover:text-[${currentColor.hover}] md:w-8 md:h-8`} />
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer"
                            className="hover:animate-pulse hover:scale-110 duration-300"
                        >
                            <MdEmail className={`text-2xl text-[${currentColor.primary}] hover:text-[${currentColor.hover}] md:w-8 md:h-8`} />
                        </a>
                    </div>
                </div>

                <div className='flex flex-col mt-12 gap-8 md:flex-row md:mt-12 md:justify-start md:gap-[10rem] md:mt-[6rem]'>
                    <div className='md:w-[250px]'>
                        <h3 className={`text-xl text-[${currentColor.textSemiTransparent}] font-semibold mb-4`}>ATUALMENTE</h3>

                        <p className='text-base/5'>Estudando ciência da computação na universidade cruizeiro do sul</p>
                    </div>
                    <div className='md:w-[250px]'>
                        <h3 className={`text-xl text-[${currentColor.textSemiTransparent}] font-semibold mb-4`}>EM BREVE</h3>

                        <p className='text-base/5'>Cientista da computação com foco em desenvolvimento de software</p>
                    </div>
                    <div className='md:w-[250px]'>
                        <h3 className={`text-xl text-[${currentColor.textSemiTransparent}] font-semibold mb-4`}>PASSADO</h3>

                        <p className='text-base/5'>Desenvolvedor em plataformas de freelancer</p>
                    </div>
                </div>
                

            </section>
        </>
    )

}

export default Header