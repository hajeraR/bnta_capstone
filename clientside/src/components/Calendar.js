import React, {useRef} from "react";
import {AiOutlineClose} from 'react-icons/ai';
import './Calendar.css';
import {IconContext} from 'react-icons';

export const Calendar = ({showMonth, setShownMonth, setCalendarMonth, calendar}) => {
    const modalRef = useRef();

    const closeMonth = () => {
            setShownMonth("");
            setCalendarMonth([]);
    }
    return(
        <>
                <section className="background" onClick={() => closeMonth()} ref={modalRef}>
                    {/* <div className="modal-wrapper" showMonth={showMonth}>
                        <header>
                        <p>{calendar[0].month}</p>
                        <div class="zodiac-icon">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" viewBox="0 0 234.5 53.7"><path d="M.6 1.4L116.9 52l117-50.6" class="st0"/></svg>
                            </span><img src={calendar[0].zodiacIcon} alt={calendar[0].horrorScope}/>
                        </div>
                        <div zodiacSign="zodiac-sign">{calendar[0].zodiacSign}</div>
                        </header>
                        <div className="horrorscope">
                        <h2>{calendar[0].horrorScope}</h2>
                        </div>
                        <button onClick={() => closeMonth()} className="close">
                            <IconContext.Provider value = {{className: "close-icon"}}>
                                <AiOutlineClose/>
                            </IconContext.Provider>
                        </button>
                    </div> */}
                    <div class="card">
                    <header>
                        <div>{calendar[0].month}</div>
                        <div class="zodiacIcon">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" viewBox="0 0 234.5 53.7"><style></style><path d="M.6 1.4L116.9 52l117-50.6" class="st0"/></svg>
                        </span>Logo</div>
                        <div class="zodiac-sign">{calendar[0].zodiacSign}</div>
                    </header>
                    <div class="horrorscope">
                        <p>{calendar[0].horrorScope}</p>
                    </div>
                    </div>
                </section>
        </>
        )
    
    
}
    

    
    
    
    