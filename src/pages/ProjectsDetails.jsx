import ProjectDetail from '../assets/components/projectDetail/ProjectDetail';
import Header from '../assets/components/navbar/Header';
import { useEffect } from 'react';

const ProjectDetails = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        <>
            <div className='max-w-[1536px] mx-auto px-4'>
                <Header />
                <ProjectDetail />
            </div>
        </>
    );
};

export default ProjectDetails;