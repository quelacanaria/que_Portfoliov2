import React, { useState } from 'react';
import useWindowHeight from './customHooks/useWindowHeight';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";  
import 'swiper/css';    
import "swiper/css/navigation";
import projectData from './proj-datas/Description.json'
import './css/flip.css';
import './css/projectsAnimate.css'
function Projects({currentSection}) {
    const windowHeight = useWindowHeight();
    const [flip, setFlip] = useState('card');
    const [numProj, setNumProj] = useState(0);
    const des = projectData;
    console.log(des);
    
    React.useEffect(() => {
        function countProjects() {
        setNumProj(Object.keys(des.Projects).length);
        }
        countProjects();
    }, []);

    const project = (windowHeight >= 486 && windowHeight <= 800) ? (currentSection === 'projects' ? 'titleAnimate block': 'invisible') : 'block';
    const projectTitle = (windowHeight >= 486 && windowHeight <= 800) ? (currentSection === 'projects' ? 'ProjectsAnimate block': 'hidden') : 'block';

    return(
        <>
          <div className="w-full h-[590px] bg-green-xx content-center pb-[100px]">
                <p className={` mb-[10px] text-center text-[35px] ${project}`}>
                    <i className="fa-solid fa-folder-open"></i> My Projects({numProj})
                </p>
                <div className={`main max-w-[1100px] w-[90%] min-w-[320px] h-[470px] bg-fink-99 mx-auto rounded-2xl p-[10px] ${projectTitle}`}>
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        grabCursor={true}
                        // loop={true}
                        navigation = {{
                            nextEl: '.button-prev',
                            prevEl: '.button-next',
                        }}
                        breakpoints = {{
                                1200: {slidesPerView: 3, spaceBetween: 50},
                                1150: {slidesPerView: 3, spaceBetween: 50},
                                1100: {slidesPerView: 3, spaceBetween: 50},
                                1000: {slidesPerView: 3, spaceBetween: 60},
                                 900: { slidesPerView: 2, spaceBetween: -170},
                                 800: { slidesPerView: 2, spaceBetween: -20},
                                 700: { slidesPerView: 2, spaceBetween: 20},
                                 600: { slidesPerView: 1, spaceBetween: 50},
                                 500: { slidesPerView: 1, spaceBetween: 50},
                                 400: { slidesPerView: 1, spaceBetween: 20},
                                 300: { slidesPerView: 1, spaceBetween: 20},
                                 200: { slidesPerView: 1, spaceBetween: 20},
                                   0: { slidesPerView: 3, spaceBetween: 30},
                                }}
                        // autoplay={{ delay: 1500, disableOnInteraction: false }}
                        >
                    {
                        des && Object.values(des.Projects).map((image, index) => (
                            
                            <SwiperSlide key={index}>
                            <div className={`${flip} mb-[20px] `}>
                                <div className='front w-[280px] h-[400px] bg-white p-[15px] rounded-[10px] shadow-header justify-self-center hover:translate-y-[-10px] duration-300 mt-[10px] mb-[20px] relative flex flex-col '>
                                    <img className='border-1 aspect-video' src={`./projects-images/${image.pic}.png`} alt="" />
                                    <p className='text-[1rem] text-center'>{image.pic}</p>
                                    <div className='overflow-auto'>
                                        <p className='text-[.9rem]'>{image.date}{image.description}</p>
                                    </div>
                                    <div className='mt-auto flex flex-row gap-2 sm:gap-4 justify-between items-center w-full px-1'>
                                        
                                        {image.link !== '' ? (<a href={image.link} target='_blank' rel="noreferrer" 
                                            onMouseEnter={() => setFlip("dontFlip")} 
                                            onMouseLeave={() => setFlip("card")}
                                            className="flex-1 h-[45px] flex items-center justify-center text-[13px] md:text-sm font-bold text-white rounded-lg bg-fink-99 border-2 border-fink-99 hover:bg-transparent hover:text-fink-99 hover:scale-105 active:scale-95 duration-300 shadow-mine"
                                        >
                                            Demo
                                        </a>) : ''}

                                        {image.github !== '' ? (<a 
                                            href={image.github} /* Make sure 'github' exists in your JSON */
                                            target='_blank' 
                                            rel="noreferrer"
                                            onMouseEnter={() => setFlip("dontFlip")} 
                                            onMouseLeave={() => setFlip("card")}
                                            className="flex-1 h-[45px] flex items-center justify-center text-[13px] md:text-sm font-bold text-fink-99 rounded-lg bg-transparent border-2 border-fink-99 hover:bg-fink-99 hover:text-white hover:scale-105 active:scale-95 duration-300 shadow-mine"
                                        >
                                            <i className="fa-brands fa-github mr-2"></i> GitHub
                                        </a>) : ''}
                                    </div>
                                </div>
                                <div className='back max-w-[300px] min-w-[300px] max-h-[400px] min-h-[400px] bg-white p-[15px] rounded-[10px] shadow-header justify-self-center hover:translate-y-[-10px] duration-300 mt-[10px] mb-[10px] relative flex flex-col'>

                                    <p>Frontend</p>
                                    <div className='flex justify-evenly'>
                                        {(image.frontend.length > 0 ? (image.frontend.map((front, index) => (
                                            <img key={index} className='w-[40px]'  src={`./image/${front}.svg`} alt={front} />
                                        ))) : (<p>- - - No Frontend - - -</p>))}
                                    </div>

                                    <p>Backend</p>
                                    <div className='flex justify-evenly'>
                                        {(image.backend.length > 0 ? (image.backend.map((front, index) => (
                                            <img key={index} className='w-[40px]'  src={`./image/${front}.svg`} alt={front} />
                                        ))) : (<p>- - - No Backend - - -</p>))}
                                    </div>

                                    <p>Database</p>
                                    <div className='flex justify-evenly'>
                                        {(image.database.length > 0 ? (image.database.map((front, index) => (
                                            <img key={index} className='w-[40px]'  src={`./image/${front}.svg`} alt={front} />
                                        ))) : (<p>- - - No Database - - -</p>))}
                                    </div>

                                    <p>Deployment</p>
                                    <div className='flex justify-evenly'>
                                        {(image.deployment.length > 0 ? (image.deployment.map((front, index) => (
                                            <img key={index} className='w-[40px]'  src={`./image/${front}.svg`} alt={front} />
                                        ))) : (<p>- - - No Deployment - - -</p>))}
                                    </div>
                                    
                                </div>
                            </div>
                        
                            </SwiperSlide>
                           
                        ))
                    }

                    </Swiper>
                </div>
            </div>
        </>
    )
}

export default Projects;