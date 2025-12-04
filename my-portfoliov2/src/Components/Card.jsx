import useWindowHeight from "./customHooks/useWindowHeight";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import './css/cardAnimate.css'

const techIcons = [
  "html5", "css3", "tailwindcss", "javascript", "react", "nodejs", "expressjs",
  "java", "springBoot", "php", "xampp", "mongodb", "git", "github"
];

function Card({currentSection}){

const windowHeight = useWindowHeight();
const card = (windowHeight >= 486 && windowHeight <= 677) ? (currentSection === 'home' ? 'cardAnimate flex' : 'hidden') : 'flex';
const cardTitle = (windowHeight >= 486 && windowHeight <= 677) ? (currentSection === 'home' ? 'titleCardAnimate block' : 'invisible') : 'block';

    return(
        <>
          <div className="w-full h-fit bg-green-xx block">
          <div className=" h-[220px]  w-[90%] max-w-[1000px] min-w-[300px] bg-green-xx p-[5px] mx-auto  ">
            <p className={`mb-[20px] text-center text-[35px] ${cardTitle}`}>
              <i className="fa-solid fa-screwdriver-wrench"></i> My TechStack
            </p>
            <div className={`w-full justify-between ${card}`}>
              <button className="button-prev h-[50px] w-[100px] rounded-[50px] self-center hover:scale-120 duration-300 active:scale-90 z-3 2xl:block xl:block lg:block md:block sm:hidden xs:hidden">
                <i className="fa-solid fa-chevron-left text-[30px]"></i>
              </button>
              <Swiper
              modules={[Navigation, Autoplay]}
              grabCursor={true}
              loop={true}
              navigation = {{
                nextEl: '.button-prev',  
                prevEl: '.button-next',
              }}
              breakpoints = {{
                              2000:{slidesPerView: 5, spaceBetween: 10},
                              1200:{slidesPerView: 5, spaceBetween: 10},
                              1100:{slidesPerView: 5, spaceBetween: 10},
                              1000:{slidesPerView: 4, spaceBetween: 10},
                              900: { slidesPerView: 4, spaceBetween: 10},
                              800: { slidesPerView: 4, spaceBetween: 10},
                              700: { slidesPerView: 4, spaceBetween: 10},
                              600: { slidesPerView: 3, spaceBetween: 10},
                              500: { slidesPerView: 3, spaceBetween: 10},
                              400: { slidesPerView: 2, spaceBetween: 2},
                              300: { slidesPerView: 2, spaceBetween: 2},
                              0: { slidesPerView: 2, spaceBetween: 8},
                            }}
              autoplay={{ delay: 1500, disableOnInteraction: false }}>
              {techIcons.map((icon) => (
                <SwiperSlide key={icon}>
                    <img className="w-[100px] justify-self-center self-center rounded-[10px] mt-[10px] mx-[6px] hover:scale-115 duration-300" src={`./src/Components/image/${icon}.svg`} alt={icon} />
                    <p className="text-[1.2rem] text-center break-all">{icon}</p>
                </SwiperSlide>
              ))}
            </Swiper>
              <button className="button-next h-[50px] w-[100px] rounded-[50px] self-center hover:scale-120 duration-300 active:scale-90 z-1 2xl:block xl:block lg:block md:block sm:hidden xs:hidden ">
                <i className="fa-solid fa-chevron-right text-[30px] "></i>
              </button>
            </div>
          </div>
        </div>
        </>
    )
}

export default Card;