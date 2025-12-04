import '../css/successAnimation.css';

function SuccessModal({showSuccess = 'hidden'}){
    return(
        <>
            <section className={`fixed top-0 left-0 w-full h-full justify-center items-center bg-me-100 z-9999 ${showSuccess}`}>
                <div className="h-[300px] w-[300px] mx-auto flex justify-center items-center flex-col bg-white p-[10px] rounded-[20px]">
                    <svg className="checkmark " viewBox="0 0 52 52">
                        <circle className="checkmark__circle" cx="26" strokeWidth="4"  cy="26" r="25" fill="none"/>
                        <path className="checkmark__check" fill="none"  strokeWidth="4" d="M14 27l7 7 16-16"/>
                    </svg>
                    <div className="message text-center">
                        <h2>Thank you!</h2>
                        <p>Your message successfully sent.</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SuccessModal;