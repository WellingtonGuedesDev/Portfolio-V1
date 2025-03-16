import Projects from '../assets/components/projects/Projects';
import Header from '../assets/components/navbar/Header';
import Divider from '../assets/components/divider/divider';
import { useEffect } from 'react';

const ProjectDetails = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        <>
            <div className='max-w-[1536px] mx-auto px-4'>
                <Header />
                <Divider />
                <Projects />
            </div>
        </>
    );
};

export default ProjectDetails;