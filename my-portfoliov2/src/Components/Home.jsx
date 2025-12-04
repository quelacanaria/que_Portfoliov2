import useWindowHeight from './customHooks/useWindowHeight'
import './css/profileAnimate.css'
function Home({currentSection}){

    const windowHeight = useWindowHeight();
    const profile = (windowHeight >= 486 && windowHeight <= 677) ? (currentSection === 'home' ? 'profileAnimate flex' : 'hidden') : 'flex';
    const profileText = (windowHeight >= 486 && windowHeight <= 677) ? (currentSection === 'home' ? 'profileTextAnimate block' : 'block') : 'block';

    return(
        <>
          <main className="mt-0 md:mt-[60px] md:flex w-full overflow-hidden h-[368px] bg-green-xx justify-center items-center 2xl:h-[368px] xl:h-[368px] lg:h-[368px] md:h-[368px] sm:h-[500px] xs:h-[500px] 2xs:h-[500px]"> 
            <section className={`bg-green-xx w-[40%] justify-end items-center lg:p-0 lg:w-[40%] lg:justify-end md:p-0 md:w-[40%] md:justify-end sm:pt-[30px] sm:w-full sm:justify-center xs:p-[30px] 2xs:p-[30px] xs:w-full 2xs:w-full xs:justify-center 2xs:justify-center ${profile}`}>
                <div className="w-[250px] h-[250px] bg-green-xx rounded-[150px] overflow-hidden shadow-xx">
                    <img className="w-[90%] justify-self-center mt-[10px]"  src="./src/Components/image/profile.png" alt="" />
                </div>
            </section>
            <section className={` 2xl:w-[60%] xl:w-[60%] lg:w-[60%] md:w-[60%] sm:w-full xs:w-full ${profileText}`}>
                <div className={`mx-[20px]`}>
                    <p className="2xl:text-[1.3rem] xl:text-[1.3rem] lg:text-[1.3rem] md:text-[1.3rem] sm:text-[1.1rem] xs:text-[1rem]"> <i className="fa-solid fa-user"></i> QUEKENETH S. LACANARIA</p>
                    <p className="2xl:text-[1.3rem] xl:text-[1.3rem] lg:text-[1.3rem] md:text-[1.3rem] sm:text-[1.1rem] xs:text-[1rem]"> <i className="fa-solid fa-user-graduate"></i> Computer Engineering graduate at Bestlink of the Philippines College</p>
                    <p className="2xl:text-[1.3rem] xl:text-[1.3rem] lg:text-[1.3rem] md:text-[1.3rem] sm:text-[1.1rem] xs:text-[1rem]"> <i className="fa-solid fa-graduation-cap"></i> School Year 2021-2025</p>
                    <p className="2xl:text-[1.3rem] xl:text-[1.3rem] lg:text-[1.3rem] md:text-[1.3rem] sm:text-[1.1rem] xs:text-[1rem]"> <i className="fa-solid fa-cake-candles"></i> March 28, 2002</p>
                    <p className="2xl:text-[1.3rem] xl:text-[1.3rem] lg:text-[1.3rem] md:text-[1.3rem] sm:text-[1.1rem] xs:text-[1rem]"> <i className="fa-solid fa-envelope"></i> lacanariaquekeneth46@gmail.com </p>
                    <p className="2xl:text-[1.3rem] xl:text-[1.3rem] lg:text-[1.3rem] md:text-[1.3rem] sm:text-[1.1rem] xs:text-[1rem]"> <i className="fa-solid fa-location-dot"></i> North Fairview Quezon City</p>
                </div>
            </section>
          </main>           
        </>
    )
}

export default Home