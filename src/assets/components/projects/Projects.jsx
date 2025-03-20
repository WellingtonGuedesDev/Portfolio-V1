import { useContext, useRef, useEffect } from 'react';
import Divider from '../divider/divider';
import { Link } from 'react-router-dom';
import { colors } from '../../styles/colors';
import { ThemeContext } from '../../../ThemeContext';
import { titleAnimation } from '../../utils/animations';

const projects = [
    {
        id: 1,
        title: 'Todo List App',
        description: 'A simple todo list app built with React and Firebase.',
        image: 'https://static.wixstatic.com/media/b0335f_e77eead253724d55887335a2a63221bb~mv2.jpg/v1/fill/w_448,h_336,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/SRA.jpg',
        link: 'https://github.com/wellingtonpaulo/todo-list-app',
        stack: ['React', 'Firebase'],
    },
    {
        id: 2,
        title: 'Weather App',
        description: 'A simple weather app built with React and OpenWeatherMap API.',
        image: 'https://static.wixstatic.com/media/b0335f_e77eead253724d55887335a2a63221bb~mv2.jpg/v1/fill/w_448,h_336,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/SRA.jpg',
        link: 'https://github.com/wellingtonpaulo/weather-app',
        stack: ['React', 'OpenWeatherMap API'],
    },
    {
        id: 3,
        title: 'Chatbot',
        description: 'A simple chatbot built with React and Dialogflow.',
        image: 'https://static.wixstatic.com/media/b0335f_e77eead253724d55887335a2a63221bb~mv2.jpg/v1/fill/w_448,h_336,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/SRA.jpg',
        link: 'https://github.com/wellingtonpaulo/chatbot',
        stack: ['React', 'Dialogflow'],
    },
    {
        id: 4,
        title: 'Quiz App',
        description: 'A simple quiz app built with React and Firebase.',
        image: 'https://static.wixstatic.com/media/b0335f_e77eead253724d55887335a2a63221bb~mv2.jpg/v1/fill/w_448,h_336,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/SRA.jpg',
        link: 'https://github.com/wellingtonpaulo/quiz-app',
        stack: ['React', 'Firebase'],
    },
    {
        id: 5,
        title: 'Blog',
        description: 'A simple blog built with React and WordPress.',
        image: 'https://static.wixstatic.com/media/b0335f_e77eead253724d55887335a2a63221bb~mv2.jpg/v1/fill/w_448,h_336,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/SRA.jpg',
        link: 'https://github.com/wellingtonpaulo/blog',
        stack: ['React', 'WordPress'],
    },
    {
        id: 6,
        title: 'Portfolio',
        description: 'A simple portfolio built with React and GitHub Pages.',
        image: 'https://static.wixstatic.com/media/b0335f_e77eead253724d55887335a2a63221bb~mv2.jpg/v1/fill/w_448,h_336,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/SRA.jpg',
        link: 'https://github.com/wellingtonpaulo/portfolio',
        stack: ['React', 'GitHub Pages'],
    },
];


const Projects = () => {
    const { theme } = useContext(ThemeContext)
    const currentColor = colors[theme];
    
    const projetoTitleAnimation = useRef(null)
    const projetosAnimation = useRef(null)

    useEffect(() => {
        titleAnimation(projetoTitleAnimation, 80, 20)
        titleAnimation(projetosAnimation, 80, 20)
    }, [])

    return (
        <>
            <div id='projetos'>
                <h1 ref={projetoTitleAnimation} className={`text-3xl font-bold antialiased md:text-8xl md:justify-normal md:whitespace-nowrap text-[${currentColor.textTransparent}]`}>Projetos Diversos.</h1>
            </div>
            <Divider />
            <div className=''>
                <div ref={projetosAnimation} className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 px-4 md:px-0">
                    {projects.map((project) => (
                        <div key={project.id} className={`bg-[${currentColor.background}] transition-shadow duration-300 shadow-lg hover:shadow-xl rounded-lg`}>
                            <div className="h-48 bg-gray-200 rounded-t-lg mb-4 h-[250px]">
                                <img className="w-full h-full object-cover rounded-t-lg" src={project.image} alt="" />
                            </div>
                            <div className='px-6 py-4'>
                                <div className='flex gap-2 mb-4'>
                                    {project.stack.map((tech) => (
                                        <span key={tech} className={`bg-[${currentColor.backgroundTag}] text-gray-800 font-medium mr-2 px-2.5 py-2 rounded-full dark:bg-gray-900 dark:text-gray-300`}>{tech}</span>
                                    ))}
                                </div>
                                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                                <p className={`text-[${currentColor.textSemiTransparent}]`}>{project.description}</p>
                                <div className="mt-4">
                                    <Link to={`/projeto/${project.id}`}><button className="bg-purple-600 text-white px-4 py-4 rounded-lg hover:bg-purple-700 transition-colors duration-300 cursor-pointer">
                                        View Project
                                    </button></Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Divider />

        </>
    );
};

export default Projects;