import { HashLink } from "react-router-hash-link"


function HeaderFooter({currentSection}){
 
    const scrollWithOffset = (el) => {
    const yOffset = -30;
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
    };

    return(
        <>
            <main className="w-full h-[70px] bg-fink-99 fixed bottom-0 right-0 flex justify-center xs:justify-evenly  items-center md:hidden z-999">
              <HashLink smooth to={`/#home`} scroll={scrollWithOffset} className={`m-[20px] font-bold text-white text-[1.3rem] hover:scale-130  active:scale-90  ${currentSection === 'home' ? 'border-b-[5px] ' : ''}`} href=""><i className="fa-solid fa-house"></i></HashLink> 
              <HashLink smooth to={`/#about`} scroll={scrollWithOffset} className={`m-[20px] font-bold text-white text-[1.3rem] hover:scale-130  active:scale-90  ${currentSection === 'about' ? 'border-b-[5px] ' : ''}`} href=""><i className="fa-solid fa-clipboard"></i></HashLink> 
              <HashLink smooth to='/#projects' scroll={scrollWithOffset} className={`m-[20px] font-bold text-white text-[1.3rem] hover:scale-130  active:scale-90  ${currentSection === 'projects' ? 'border-b-[5px] ' : ''}`} href=""><i className="fa-solid fa-folder-open"></i></HashLink>
              <HashLink smooth to={`/#contact`} scroll={scrollWithOffset} className={`m-[20px] font-bold text-white text-[1.3rem] hover:scale-130  active:scale-90  ${currentSection === 'contact' ? 'border-b-[5px] ' : ''}`} href=""><i className="fa-solid fa-phone"></i></HashLink> 
              <HashLink smooth to={`/#links`} scroll={scrollWithOffset} className={`m-[20px] font-bold text-white text-[1.3rem] hover:scale-130  active:scale-90  ${currentSection === 'links' ? 'border-b-[5px] ' : ''}`} href=""><i className="fa-solid fa-link"></i></HashLink> 
            </main>
        </>
    )

}

export default HeaderFooter