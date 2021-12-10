import React, {useRef} from "react";
import './Calendar.css';

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
                    <h2>{calendar[0].horrorScope}</h2>
                    <button onClick={() => closeMonth()} className="close"></button>
                    </div>
                </section>
        </>
        )
    
    
}
    

    
    
    
    