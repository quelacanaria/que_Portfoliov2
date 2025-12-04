import React, { useState, useEffect } from 'react';
import './css/about.css';
import './css/aboutAnimate.css';
function About({currentSection}) {

  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  useEffect(() => {
    const handleResizeHeight = () => setWindowHeight(window.innerHeight);
    window.addEventListener('resize', handleResizeHeight);

    return () => window.removeEventListener("resize", handleResizeHeight);
  }, []);
  
  const decesionHeight = (windowHeight >= 486 && windowHeight <= 677) ? (currentSection === 'about' ? 'aboutAnimate block' : 'hidden') : 'block';

  return (
    <div className="w-full flex justify-center items-center 2xl:h-[550px] xl:h-[550px] lg:h-[550px] md:h-[550px] sm:h-[600px] xs:h-[800px] 2xs:h-[1050px] bg-green-xx">
        <div className={`h-[95%] bg-fink-99 rounded-[10px] content-center mx-auto 2xl:w-[700px] xl:w-[700px] md:w-[700px] sm:w-[600px] xs:w-[400px] 2xs:w-[300px] ${decesionHeight}`}>
          <div className="w-[90%] h-[90%] bg-white mx-auto p-[5px] rounded-[10px] hover:translate-y-[-15px] duration-300 shadow-gg">
            <p className="text-center self-center text-[35px] row-span-1 col-span-4 "><i className="fa-solid fa-clipboard"></i> About</p>
            <p className="mx-[2px] text-[1rem]"> Hi! I’m Quekeneth S. Lacanaria, but you can call me Keneth. 
              I’m a Computer Engineering graduate from Bestlink College of the Philippines with a strong passion 
              for web development. For me, coding isn’t just a job it’s a hobby that allows me to be creative and 
              innovative. I enjoy building and designing websites, from moving divs to crafting beautiful layouts 
              and interactive user experiences. I also love solving whether it’s debugging code, improving functionality, 
              or finding smarter ways to bring ideas to life. It gives me great satisfaction when I achieve the design I 
              envision or successfully solve a problem that users might encounter. In addition, I enjoy connecting designs 
              to databases that can input, display, update, and delete information. Learning new tech stacks and technologies 
              always excites me, as it helps me grow and stay up to date in this fast-evolving field. I’m also teachable and 
              highly collaborative, always eager to learn from others and contribute to a team’s success. My goal is to continuously 
              improve my skills and help the company grow through innovation, dedication, and quality work.</p>
          </div>
      </div>
    </div>
  );
}

export default About;
