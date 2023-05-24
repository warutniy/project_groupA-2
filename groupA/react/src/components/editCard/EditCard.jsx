import React from 'react';
// import { useSearchParams } from "react-router-dom";
import '../editCard/editCard.css';

// const EditCard = function({ onSubmitEditCard, onChangeActivityName, onChangeDate, onChangeDescription, onChangeStartTime, onChangeFinishTime, onChangeActivityType, onChangeDistance, card }) {
//     return (
//         <div className="wrapper create_card">
//             <span className="icon-close">
//                 <a href='/dashboard'><ion-icon name="close"></ion-icon></a>
//             </span>

//             <div className="form-box"> {/*container*/}
//                 <div className="title">EDIT AN ACTIVITY CARD</div>
//                 <form onSubmit={onSubmitEditCard}>
//                     <div className="user-details">
//                         <div className="input-box">
//                             <span className="details">Activity Name</span>
//                             <input type="text" onChange={onChangeActivityName} placeholder="Enter your activity name" required />
//                         </div>
//                         <div className="input-box">
//                             <span className="details">Activity Date</span>
//                             <input className="dateTime" onChange={onChangeDate} type="date" placeholder="" required />
//                         </div>
//                         <div className="input-box message">
//                             <span className="details">Description</span>
//                             <textarea onChange={onChangeDescription} placeholder="Put your description here!!!" rows="5"></textarea>
//                         </div>
//                         <div className="input-box">
//                             <span className="details">Start-Time</span>
//                             <input className="dateTime" type="time" onChange={onChangeStartTime} placeholder="" required />
//                         </div>
//                         <div className="input-box">
//                             <span className="details">Finish-Time</span>
//                             <input className="dateTime" type="time" onChange={onChangeFinishTime} placeholder="" required />
//                         </div>
//                         <div className="input-box">
//                             <span className="details">Activity Type</span>
//                             <select className="minimal" onChange={onChangeActivityType} placeholder="" required >
//                                 <option value="" > Please Select One... </option>
//                                 <option value="Walking" >Walking</option>
//                                 <option value="Swimming" >Swimmimg</option>
//                                 <option value="Running" >Running</option>
//                                 <option value="Biking" >Biking</option>
//                                 <option value="Badminton" >Badminton</option>
//                             </select>
//                         </div>
//                         <div className="input-box">
//                             <span className="details">Distance (km)</span>
//                             <input type="text" onChange={onChangeDistance} placeholder="Enter your distance" required />
//                         </div>
//                     </div>
//                     <button type="submit" className="btn" >Edit Card</button>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default EditCard;


const EditCard = function({ onSubmitEditCard, onChangeActivityName, onChangeDate, onChangeDescription, onChangeStartTime, onChangeFinishTime, onChangeActivityType, onChangeDistance, card }) {

    // let [searchParams, setSearchParams] = useSearchParams();
    // searchParams.get("id")
    // // console.log(searchParams.get("id"))

    // // console.log(card);
    return (
        <div className="wrapper create_card">
            <span className="icon-close">
                <a href='/dashboard'><ion-icon name="close"></ion-icon></a>
            </span>

            <div className="form-box">
                <div className="title">EDIT AN ACTIVITY CARD</div>
                <form onSubmit={onSubmitEditCard}>
                    <div className="user-details">
                        <div className="input-box">
                            <span className="details">Activity Name</span>
                            <input type="text" onChange={onChangeActivityName} placeholder="Enter your activity name" value={card.activityName} required />
                        </div>
                        <div className="input-box">
                            <span className="details">Activity Date</span>
                            <input className="dateTime" onChange={onChangeDate} type="date" value={card.date} required />
                        </div>
                        <div className="input-box message">
                            <span className="details">Description</span>
                            <textarea onChange={onChangeDescription} placeholder="Put your description here!!!" rows="5" value={card.description}></textarea>
                        </div>
                        <div className="input-box">
                            <span className="details">Start-Time</span>
                            <input className="dateTime" type="time" onChange={onChangeStartTime} value={card.startTime} required />
                        </div>
                        <div className="input-box">
                            <span className="details">Finish-Time</span>
                            <input className="dateTime" type="time" onChange={onChangeFinishTime} value={card.finishTime} required />
                        </div>
                        <div className="input-box">
                            <span className="details">Activity Type</span>
                            <select className="minimal" onChange={onChangeActivityType} value={card.activityType} required>
                                <option value="">Please Select One...</option>
                                <option value="Walking">Walking</option>
                                <option value="Swimming">Swimming</option>
                                <option value="Running">Running</option>
                                <option value="Biking">Biking</option>
                                <option value="Badminton">Badminton</option>
                            </select>
                        </div>
                        <div className="input-box">
                            <span className="details">Distance (km)</span>
                            <input type="text" onChange={onChangeDistance} placeholder="Enter your distance" value={card.distance} required />
                        </div>
                    </div>
                    <button type="submit" className="btn">Edit Card</button>
                </form>
            </div>
        </div>
    );
};

export default EditCard;