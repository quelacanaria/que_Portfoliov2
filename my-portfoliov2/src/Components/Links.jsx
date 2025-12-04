import useWindowHeight from './customHooks/useWindowHeight';
import './css/linksAnimate.css'
function Links({ currentSection}){

    const windowHeight = useWindowHeight();
    const link = (windowHeight >= 486 && windowHeight <= 677) ? (currentSection === 'links' ? 'linksAnimate flex' : 'hidden') : 'flex'; 

    return(
        <>
            <div   className={`w-full h-[550px] flex items-center bg-green-xx mb-[60px] md:mb-0 `}>
                <div className={`w-[80%] min-w-[300px] max-w-[600px] h-[450px] bg-fink-99 mx-auto rounded-2xl  items-center justify-center ${link}`}>
                    <div className="w-[90%] min-w-[250px] max-w-[550px] h-[400px] bg-white rounded-2xl grid grid-cols-4 grid-rows-5 gap-x-[5px] gap-y-[5px] pb-[20px] hover:translate-y-[-10px] duration-300 shadow-gg">
                        <p className="text-center self-center text-[35px] row-span-1 col-span-4 "><i className="fa-solid fa-link"></i> My Links</p>
                        <a className="row-span-1 col-span-1 inline-block justify-self-end self-center" href="#"><img className="w-[50px] hover:scale-120 active:scale-90 duration-300" src="./src/Components/image/whatsApp.svg" alt="" /></a>
                        <p className="row-span-1 col-span-3 inline-block self-center break-all pr-[25px]  text-[1.1rem] md:text-[1.2rem]">+639510010846</p>
                        <a className="row-span-1 col-span-1 inline-block justify-self-end self-center" target="_blank" href="mailto:lacanariaquekeneth46@gmail.com"><img className="w-[50px] hover:scale-120 active:scale-90 duration-300" src="./src/Components/image/gmail1.svg" alt="" /></a>
                        <p className="row-span-1 col-span-3 inline-block self-center break-all pr-[25px] text-[1.1rem] md:text-[1.2rem]">lacanariaquekeneth46@gmail.com</p>
                        <a className="row-span-1 col-span-1 inline-block justify-self-end self-center" target="_blank" href="https://www.facebook.com/queque.neth"><img className="w-[50px] hover:scale-120 active:scale-90 duration-300" src="./src/Components/image/facebook.svg" alt="" /></a>
                        <p className="row-span-1 col-span-3 inline-block self-center break-all pr-[25px] text-[1.1rem] md:text-[1.2rem]">https://www.facebook.com/queque.neth</p>
                        <a className="row-span-1 col-span-1 inline-block justify-self-end self-center" target="_blank" href="https://github.com/quelacanaria"><img className="w-[50px] hover:scale-120 active:scale-90 duration-300" src="./src/Components/image/github.svg" alt="" /></a>
                        <p className="row-span-1 col-span-3 inline-block self-center break-all pr-[25px] text-[1.1rem] md:text-[1.2rem]">https://github.com/quelacanaria</p>
                        <a className="row-span-1 col-span-1 inline-block justify-self-end self-center" target="_blank" href="https://www.linkedin.com/in/quekeneth/"><img className="w-[50px] hover:scale-120 active:scale-90 duration-300" src="./src/Components/image/linkedin.svg" alt="" /></a>
                        <p className="row-span-1 col-span-3 inline-block self-center break-all pr-[25px]  text-[1.1rem] md:text-[1.2rem]">https://www.linkedin.com/in/quekeneth/</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Links;