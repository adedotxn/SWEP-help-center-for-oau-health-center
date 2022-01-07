import React from "react";
import '../../../Styles/Staff/calender_card.css'

const CalenderCard = ({date, openCard, setCard}) => {
    return ( 
        <div className="card-wrapper">
            <div className = "card-overlay">
                <div className = "card">
                   {/* <span>{date}</span>  Should pop up a calender picker? */}
                    <input type="date"  />
                    <div className = "calender">  {/* should display appointments relating to the date picked*/}
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, modi? Dolorem fuga ipsa, illo natus nam impedit adipisci consequuntur magnam ab at, ducimus, quia voluptates veritatis minima repellat! Accusamus, dolore.</p>
                    </div>

                    <div className = "data-btn">
                        <button type="submit" onClick={()=>setCard(!openCard)}> {/* updates date onClick and change the details shown under appointments.js relative to the date picked and automatically closes*/}
                            Change Date
                        </button>
                    </div>
                </div>
                

            </div>
        </div>
     );
}
 
export default CalenderCard;