import '../css/failedAnimation.css'
function FailedModal({showFailed = 'hidden'}){
    return(
        <>
            <main className={`fixed top-0 left-0 w-full h-full justify-center items-center bg-me-100 z-9999 ${showFailed}`} >
						<div className="messageContainer1">
							<svg className="wrongmark" viewBox="0 0 52 52">
        						<circle className="wrongmark__circle" cx="26" cy="26" r="25" fill="none"/>
           	 					<path className="wrongmark__wrong" fill="none" strokeWidth="4" strokeLinecap="round" d="M19 19 L34 35 M34 19 L19 35"/>
							</svg>
							<div className="message">
								<h2>ERROR!!</h2>
								<p>Oops! There was a problem sending</p>
								<p>your message.</p>
							</div>
						</div>
			</main>
        </>
    )
}

export default FailedModal; 