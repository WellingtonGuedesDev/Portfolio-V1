import { Link, useParams } from 'react-router-dom';
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from "react-icons/md";
import { colors } from '../../styles/colors';
import { ThemeContext } from '../../../ThemeContext';
import { useContext } from 'react';
import { useState, useEffect } from 'react';

// Swipper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules Swiper
import { FreeMode, Pagination, Autoplay } from 'swiper/modules';

const projects = [
    {
        id: 1,
        title: 'Todo List App',
        description: 'A simple todo list app built with React and Firebase.',
        image: 'https://static.wixstatic.com/media/b0335f_e77eead253724d55887335a2a63221bb~mv2.jpg/v1/fill/w_448,h_336,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/SRA.jpg',
        link: 'https://github.com/wellingtonpaulo/todo-list-app',
        stack: ['React', 'Firebase'],
        client: 'Me',
        timeline: '2024 - Present',
        features: 'Chamadados ao banco de dados, Consumo de API',
    },
    {
        id: 2,
        title: 'Weather App',
        description: 'A simple weather app built with React and OpenWeatherMap API.',
        image: 'https://static.wixstatic.com/media/b0335f_e77eead253724d55887335a2a63221bb~mv2.jpg/v1/fill/w_448,h_336,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/SRA.jpg',
        link: 'https://github.com/wellingtonpaulo/weather-app',
        stack: ['React', 'OpenWeatherMap API'],
        client: 'Me',
        timeline: '2024 - Present',
        features: 'Chamadados ao banco de dados, Consumo de API',
    },
    {
        id: 3,
        title: 'Chatbot',
        description: 'A simple chatbot built with React and Dialogflow.',
        image: 'https://static.wixstatic.com/media/b0335f_e77eead253724d55887335a2a63221bb~mv2.jpg/v1/fill/w_448,h_336,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/SRA.jpg',
        link: 'https://github.com/wellingtonpaulo/chatbot',
        stack: ['React', 'Dialogflow'],
        client: 'Me',
        timeline: '2024 - Present',
        features: 'Chamadados ao banco de dados, Consumo de API',
    },
    {
        id: 4,
        title: 'Quiz App',
        description: 'A simple quiz app built with React and Firebase.',
        image: 'https://static.wixstatic.com/media/b0335f_e77eead253724d55887335a2a63221bb~mv2.jpg/v1/fill/w_448,h_336,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/SRA.jpg',
        link: 'https://github.com/wellingtonpaulo/quiz-app',
        stack: ['React', 'Firebase'],
        client: 'Me',
        timeline: '2024 - Present',
        features: 'Chamadados ao banco de dados, Consumo de API',
    },
    {
        id: 5,
        title: 'Blog',
        description: 'A simple blog built with React and WordPress.',
        image: 'https://static.wixstatic.com/media/b0335f_e77eead253724d55887335a2a63221bb~mv2.jpg/v1/fill/w_448,h_336,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/SRA.jpg',
        link: 'https://github.com/wellingtonpaulo/blog',
        stack: ['React', 'WordPress'],
        client: 'Me',
        timeline: '2024 - Present',
        features: 'Chamadados ao banco de dados, Consumo de API',
    },
    {
        id: 6,
        title: 'Portfolio',
        description: 'A simple portfolio built with React and GitHub Pages.',
        image: 'https://static.wixstatic.com/media/b0335f_e77eead253724d55887335a2a63221bb~mv2.jpg/v1/fill/w_448,h_336,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/SRA.jpg',
        link: 'https://github.com/wellingtonpaulo/portfolio',
        stack: ['React', 'GitHub Pages'],
        client: 'Me',
        timeline: '2024 - Present',
        features: 'Chamadados ao banco de dados, Consumo de API',
    },
];

const ProjectDetail = () => {
    const { id } = useParams();
    const { theme } = useContext(ThemeContext)
    const [screenWidth, setScreenWidth] = useState(false);
    const currentColor = colors[theme];

    useEffect(() => {
        window.addEventListener('resize', () => {
          
          if (window.innerWidth < 1200) {
            setScreenWidth(true)
            console.log(screenWidth)
          } else {
            setScreenWidth(false)
          }
        });
      }, [screenWidth]);

    return (
        <>
            <div className='hidden xl:block object-contain fixed top-[50%] left-[4rem] translate-y-[-50%]'>
                <Link to={parseInt(id) === 1 ? `/projeto/${projects.length}` : `/projeto/${parseInt(id) - 1}`}>
                    <MdKeyboardDoubleArrowLeft className={`text-5xl text-[${currentColor.primary}] animate-slide-in-from-right cursor-pointer`} />
                </Link>
            </div>
            <div className='hidden xl:block object-contain fixed top-[50%] right-[4rem] translate-y-[-50%]'>
                <Link to={parseInt(id) === projects.length ? `/projeto/1` : `/projeto/${parseInt(id) + 1}`}>
                    <MdKeyboardDoubleArrowRight className={`text-5xl text-[${currentColor.primary}] animate-slide-in-from-left cursor-pointer`} />
                </Link>
            </div>

            <div className='mb-12'>
                <div className='image'>
                    <img src="https://static.wixstatic.com/media/b0335f_279c7bd9c53a4bc7a5cd60da51029977~mv2.png/v1/fill/w_1573,h_630,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/b0335f_279c7bd9c53a4bc7a5cd60da51029977~mv2.png" alt="" />
                </div>

                <div className='info mt-12 max-w-[1200px] mx-auto px-4'>
                    <div className=''>
                        <h1 className='text-3xl font-bold antialiased mb-4'>{projects[id - 1].title}</h1>
                        <p className='mb-1'>{projects[id - 1].description}</p>
                        <p>Tecnologias utilizadas: {projects[id - 1].stack.join(', ')}</p>
                    </div>

                    <div className='flex flex-col xl:flex-row mt-12 gap-8 md:mt-12 md:justify-start md:gap-[10rem] md:mt-[6rem]'>





                        <Swiper
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            slidesPerView={1}
                            spaceBetween={30}
                            freeMode={true}
                            width={250}
                            modules={[FreeMode, Pagination, Autoplay]}
                            className="mySwiper w-full"
                        >
                            <SwiperSlide>
                                <div className='md:w-[250px] flex flex-col items-center'>
                                    <h3 className={`text-xl text-[${currentColor.textTransparent}] font-semibold mb-4`}>Cliente</h3>

                                    <p className='text-base/5'>{projects[id - 1].client}</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='md:w-[250px]'>
                                    <h3 className={`text-xl text-[${currentColor.textTransparent}] font-semibold mb-4`}>Funcionalidades</h3>

                                    <p className='text-base/5'>{projects[id - 1].features}</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='md:w-[250px]'>
                                    <h3 className={`text-xl text-[${currentColor.textTransparent}] font-semibold mb-4`}>Timeline</h3>

                                    <p className='text-base/5'>{projects[id - 1].timeline}</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='md:w-[250px]'>
                                    <h3 className={`text-xl text-[${currentColor.textTransparent}] font-semibold mb-4`}>Stack</h3>

                                    <p className='text-base/5'>{projects[id - 1].stack.join(', ')}</p>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>

            <div className='my-[6rem] md:my-[10rem]'>
                <div className='info max-w-[1200px] mx-auto px-4'>
                    <p className={`font-bold antialiased text-[${currentColor.primary}] text-base mb-2`}>Overview</p>

                    <h2 className='text-3xl font-bold antialiased mb-4'>Minha Função</h2>
                    <p className='text-base/5'>Eu era responsável pela pesquisa de usuários, prototipagem, design de pôsteres e edição de vídeo. Criei uma renderização 3D de um espaço de descoberta usando Cinema 4D, usei Figma para design de pôsteres e Adobe Premiere para edição de vídeo. Todos participaram durante todo o processo geral de ideação, pesquisa e entrevista com usuários.</p>

                    <h2 className='text-3xl font-bold antialiased mt-12 mb-8'>Processo do Design</h2>
                    <img src="https://static.wixstatic.com/media/b0335f_997b826ba45e4496ad3e75802428b799~mv2.png/v1/fill/w_677,h_55,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Group.png" alt="" />
                </div>
            </div>

            <div className='my-[10rem]'>
                <div className='info mt-12 max-w-[1200px] mx-auto px-4'>
                    <p className={`font-bold antialiased text-[${currentColor.primary}] text-base mb-2`}>Protótipagem</p>

                    <h2 className='text-3xl font-bold antialiased mb-4'>Prototipo do projeto</h2>
                    <p className='text-base/5 mb-8'>Eu era responsável pela pesquisa de usuários, prototipagem, design de pôsteres e edição de vídeo. Criei uma renderização 3D de um espaço de descoberta usando Cinema 4D, usei Figma para design de pôsteres e Adobe Premiere para edição de vídeo. Todos participaram durante todo o processo geral de ideação, pesquisa e entrevista com usuários.</p>

                    <div className='flex justify-center'>
                        <img className='center' src="https://static.wixstatic.com/media/b0335f_e24499f6baa74e56bcca3d1045bb6b31~mv2.png/v1/fill/w_655,h_654,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Group%2027.png" alt="" />
                    </div>
                </div>
            </div>

            <div className='my-[10rem]'>
                <div className='info mt-12 max-w-[1200px] mx-auto px-4'>
                    <p className={`font-bold antialiased text-[${currentColor.primary}] text-base mb-2`}>Design System</p>

                    <h2 className='text-3xl font-bold antialiased mb-4'>Identidade Visual</h2>
                    <p className='text-base/5 mb-8'>Eu era responsável pela pesquisa de usuários, prototipagem, design de pôsteres e edição de vídeo. Criei uma renderização 3D de um espaço de descoberta usando Cinema 4D, usei Figma para design de pôsteres e Adobe Premiere para edição de vídeo. Todos participaram durante todo o processo geral de ideação, pesquisa e entrevista com usuários.</p>

                    <div className='flex justify-center'>
                        <img className='center' src="https://static.wixstatic.com/media/b0335f_0767085b87cd4514beb9319e53ad5e3b~mv2.png/v1/fill/w_619,h_434,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Screen%20Shot%202021-10-31%20at%2010_05_23%20PM.png" alt="" />
                    </div>
                </div>
            </div>

            <div className='my-[10rem]'>
                <div className='info mt-12 max-w-[1200px] mx-auto px-4'>
                    <p className={`font-bold antialiased text-[${currentColor.primary}] text-base mb-2`}>Projeto Final</p>

                    <h2 className='text-3xl font-bold antialiased mb-4'>Projeto Final</h2>
                    <p className='text-base/5 mb-8'>Eu era responsável pela pesquisa de usuários, prototipagem, design de pôsteres e edição de vídeo. Criei uma renderização 3D de um espaço de descoberta usando Cinema 4D, usei Figma para design de pôsteres e Adobe Premiere para edição de vídeo. Todos participaram durante todo o processo geral de ideação, pesquisa e entrevista com usuários.</p>

                    <div className='gap-8'>
                        <Swiper
                            autoplay={screenWidth ? { delay: 2500, disableOnInteraction: false, } : undefined}
                            slidesPerView={screenWidth ? 1 : 1}
                            spaceBetween={30}
                            freeMode={true}
                            width={200}
                            modules={[FreeMode, Pagination, Autoplay]}
                            className="mySwiper w-full"
                        >
                            <SwiperSlide>
                                <img className='w-[250px]' src="https://static.wixstatic.com/media/b0335f_0767085b87cd4514beb9319e53ad5e3b~mv2.png/v1/fill/w_619,h_434,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Screen%20Shot%202021-10-31%20at%2010_05_23%20PM.png" alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img className='w-[250px]' src="https://static.wixstatic.com/media/b0335f_ab9a1df9609c4a6d8fb1d5669da76396~mv2.gif" alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img className='w-[250px]' src="https://static.wixstatic.com/media/b0335f_c99388621e3947eda80a73f2ff382b78~mv2.png/v1/fill/w_255,h_546,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/quiz%203.png" alt="" />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProjectDetail;