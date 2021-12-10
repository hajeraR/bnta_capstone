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
                    <div className="modal-wrapper" showMonth={showMonth}>
                        <header>
                        <p>{calendar[0].month}</p>
                        <div className="zodiac-icon">
                            <img src={calendar[0].zodiacIcon} alt={calendar[0].horrorScope}/>
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
                    </div>
                </section>
        </>
        )
    
    
}
    

    
    
    
    