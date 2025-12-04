import { HashLink } from "react-router-hash-link";
function Header({currentSection}){ 

  const scrollWithOffset = (el) => {
  const yOffset = -80;
  const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
  window.scrollTo({ top: y, behavior: 'smooth' });
};


  return( 
  
      <> 
        <header className="h-[80px] w-full bg-hays-100 shadow-header z-[9999] fixed top-0 left-0 hidden md:block"> 
          <main className="h-full flex"> 
            <section className="w-[100px] flex justify-end items-center"> 
              <a className="font-bold text-white [text-shadow:2px_2px_5px_hsla(0,0%,0%,.5)] text-[1.1rem]" href="">QueCode</a> 
            </section> 
            <section className="2xl: w-[87%] justify-center items-center hidden md:flex"> 
              <HashLink smooth to={`/#home`} scroll={scrollWithOffset} className={`m-[30px] font-bold text-white [text-shadow:2px_2px_5px_hsla(0,0%,0%,.5)] text-[1.1rem] hover:scale-130 duration-300 active:scale-90 ${currentSection === 'home' ? 'underline decoration-[5px] underline-offset-4' : ''}`} href="">Home</HashLink> 
              <HashLink smooth to={`/#about`} scroll={scrollWithOffset} className={`m-[30px] font-bold text-white [text-shadow:2px_2px_5px_hsla(0,0%,0%,.5)] text-[1.1rem] hover:scale-130 duration-300 active:scale-90 ${currentSection === 'about' ? 'underline decoration-[5px] underline-offset-4' : ''}`} href="">About</HashLink> 
              <HashLink smooth to='/#projects' scroll={scrollWithOffset} className={`m-[30px] font-bold text-white [text-shadow:2px_2px_5px_hsla(0,0%,0%,.5)] text-[1.1rem] hover:scale-130 duration-300 active:scale-90 ${currentSection === 'projects' ? 'underline decoration-[5px] underline-offset-4' : ''}`}href="">Projects</HashLink>
              <HashLink smooth to={`/#contact`} scroll={scrollWithOffset} className={`m-[30px] font-bold text-white [text-shadow:2px_2px_5px_hsla(0,0%,0%,.5)] text-[1.1rem] hover:scale-130 duration-300 active:scale-90 ${currentSection === 'contact' ? 'underline decoration-[5px] underline-offset-4' : ''}`} href="">Contact Me</HashLink> 
              <HashLink smooth to={`/#links`} scroll={scrollWithOffset} className={`m-[30px] font-bold text-white [text-shadow:2px_2px_5px_hsla(0,0%,0%,.5)] text-[1.1rem] hover:scale-130 duration-300 active:scale-90 ${currentSection === 'links' ? 'underline decoration-[5px] underline-offset-4' : ''}`} href="">My Links</HashLink> 
            </section> 
          </main> 
        </header> 
      </> ) 
      } 
      
      export default Header