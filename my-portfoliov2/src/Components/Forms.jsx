import React, { useState } from 'react';
import useWindowHeight from './customHooks/useWindowHeight';
import axios from 'axios';
import SuccessModal from './modals/SuccessModal.jsx';
import LoadingModal from './modals/LoadingModal.jsx';
import FailedModal from './modals/FailedModal.jsx';
import './css/formsAnimate.css'
function Forms({currentSection}){
    const url = 'http://localhost:5000/api/post';
    const [sendMessage, setSendMessage] = useState(null);
    const [success, setSuccess] = useState('hidden');
    const [loading, setLoading] = useState('hidden');
    const [failed, setFailed] = useState('hidden');
    const windowHeight = useWindowHeight();
    const [inputs, setInputs] = useState({
        name: '',
        subject: '',
        email: '',
        phone: '',
        message: ''
    });

const handlerSubmit = (event, index) => {
    event.preventDefault();
    setSendMessage(index);
    } 

const submit = async(event) => {
    try{
        setLoading('flex');
        const response = await axios.post(url, inputs);
        console.log(response.data);
    }catch(error){
        console.log('error -> ', error.message);
        setTimeout(() => {
            setFailed('flex');
            setTimeout(() => {
                setFailed('hidden');
            }, 4000)
        }, 0)

    }finally{
        setLoading('hidden');
        setSendMessage(null);
        setTimeout(() => {
            setSuccess('flex');
            setTimeout(() => {
                setSuccess('hidden');
            }, 4000)
        }, 0)
        setInputs({
            name: '',
            subject: '',
            email: '',
            phone: '',
            message: ''
            });
    }       

}

    const contact = (windowHeight >= 486 && windowHeight <= 677) ? (currentSection === 'contact' ? 'formsAnimate block' : 'hidden') : 'block';
    

    return(
        <>
            <div className="w-full h-[950px] md:h-[550px]  bg-green-xx content-center">
                <div className={`w-[80%] min-w-[320px] max-w-[800px] h-[900px] md:h-[500px] bg-fink-99 mx-auto rounded-2xl content-center ${contact}`}>
                    <form onSubmit={handlerSubmit} className="w-[80%] min-w-[300px] h-[90%] bg-white mx-auto rounded-2xl grid p-[20px] grid grid-cols-6  2xl:grid-rows-9 xl:grid-rows-9 lg:grid-rows-9 md:grid-rows-9 sm:grid-rows-12 xs:grid-rows-12 gap-x-0 md:gap-x-[10px] gap-y-[5px] hover:scale-105 duration-300 shadow-gg">
                        <p className="col-span-6 row-span-1 text-center self-center text-[35px] "><i className="fa-solid fa-phone"></i> Contact Me</p>
                        <label className="text-[1.2rem] self-center justify-self-start md:justify-self-end row-span-1 2xl:col-span-2 xl:col-span-2 lg:col-span-2 md:col-span-2 xs:col-span-6" htmlFor="">Company Name:</label>
                        <input value={inputs.name} name='name' onChange={event => setInputs({...inputs, name: event.target.value})} className="text-[1.2rem] h-[45px] p-[5px] border-2 col-span-8 md:col-span-3 row-span-1" placeholder="CompanyName.Inc" type="text" required/>
                        <label className="text-[1.2rem] self-center justify-self-start md:justify-self-end row-span-1 2xl:col-span-2 xl:col-span-2 lg:col-span-2 md:col-span-2 xs:col-span-6" htmlFor="">Subject:</label>
                        <input value={inputs.subject} name='subject' onChange={event => setInputs({...inputs, subject: event.target.value})} className="text-[1.2rem] h-[45px] p-[5px] border-2 col-span-8 md:col-span-3 row-span-1" placeholder="Job Offer" type="text" required/>
                        <label className="text-[1.2rem] self-center justify-self-start md:justify-self-end row-span-1 2xl:col-span-2 xl:col-span-2 lg:col-span-2 md:col-span-2 xs:col-span-6" htmlFor="">Email:</label>
                        <input value={inputs.email} name='email' onChange={event => setInputs({...inputs, email: event.target.value})} className="text-[1.2rem] h-[45px] p-[5px] border-2 col-span-8 md:col-span-3 row-span-1" placeholder="johndoe@123.com" type="email" required/>
                        <label className="text-[1.2rem] self-center justify-self-start md:justify-self-end row-span-1 2xl:col-span-2 xl:col-span-2 lg:col-span-2 md:col-span-2 xs:col-span-6" htmlFor="">Contact Number:</label>
                        <input value={inputs.phone} name='phone' onChange={event => setInputs({...inputs, phone: event.target.value})} className="text-[1.2rem] h-[45px] p-[5px] border-2 col-span-8 md:col-span-3 row-span-1 [&::-webkit-inner-spin-button]:hidden" placeholder="09123456789" inputMode="numeric" type="number" required/>
                        <label className="text-[1.2rem] self-center justify-self-start md:justify-self-end row-span-1 2xl:col-span-2 xl:col-span-2 lg:col-span-2 md:col-span-2 xs:col-span-6" htmlFor="">Message:</label>
                        <textarea value={inputs.message} name='message' onChange={event => setInputs({...inputs, message: event.target.value})} className="text-[1.2rem] h-[80px] p-[5px] border-2 col-span-8 md:col-span-3 row-span-2" placeholder="Hi Quekeneth nice meeting you!" type="text" required/>
                        <button className="w-[90%] md:w-[270px] h-[70px] text-[1.2rem] justify-self-center self-center border-2 bg-fink-99 
                        text-white border-transparent shadow-mine hover:bg-white hover:text-fink-99 hover:border-fink-99
                         hover:shadow-fink-99 hover:scale-120 active:scale-90 active:shadow-none duration-300 col-span-6 row-span-2 ">Send</button>
                    </form>
                </div>
            </div>
            {sendMessage !== null && (
            <main className="w-full h-screen fixed top-[0px] left-[0px] bg-me-100 flex justify-center items-center z-[9999]">
                <section className="w-[280px] h-[360px] p-[10px] bg-white rounded-2xl overflow-hidden shadow-mine hover:scale-105 duration-300 grid">
                    <div>
                        <p>Double-check your details. A verification email will be sent—if you don’t receive it, your email may be incorrect.</p>
                    </div>
                    <div className='mx-[10px] mb-[10px]'>
                        <p className='break-all'><strong>Name:</strong> {inputs.name}</p>
                        <p><strong>Subject:</strong> {inputs.subject}</p>
                        <p><strong>Email:</strong> {inputs.email}</p>
                        <p><strong>Phone:</strong> {inputs.phone}</p>
                        <p><strong>Message:</strong> {inputs.message}</p>
                    </div>
                    <div className='flex justify-evenly align-bottom'>
                        <button className="mx-[5px] w-[90px] h-[50px] border-[5px] border-fink-99 rounded-lg font-bold text-fink-99 bg-transparent shadow-fink-99 hover:scale-115 active:scale-90 duration-300" onClick={() => submit()}>Send</button>
                        <button className="mx-[5px] w-[90px] h-[50px] border-2-transparent rounded-lg font-bold text-white bg-fink-99 shadow-mine hover:scale-115 active:scale-90 duration-300" onClick={() => setSendMessage(null)}>Cancel</button>
                    </div>
                </section>
            </main>
            )}
            <LoadingModal showLoading={loading}/>
            <SuccessModal showSuccess = {success} />
            <FailedModal showFailed={failed}/>
        </>
    )
}

export default Forms;