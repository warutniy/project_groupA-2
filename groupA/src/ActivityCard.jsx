import React, { useState } from 'react';
import './ActivityCard.css';
import walkImage from './assets/icon/walk.png';
 
const ActivityCard = () => {
    
    const activity = [
        {
            id: 1,
            activityName: 'Go Shopping',
            username: 'John Doe',
            description: 'Go to the Department Store for buying new shirts and new shoes in order to use for a new job on Monday.',
            image: walkImage,
            activityType: 'Walk',
            date: '04/09/2023',
            duration: '00:53:41',
            distance: '4.0 KM'
        }
    ]

    const [card, setCard] = useState(activity);

    return (
        <div>
            {card.map((item) => (
                <div className='activity-card' key={item.id}>
                    <div className='header'>
                        <h2 className='activity-name'>{item.activityName}</h2>
                        <span className="icon">
                            <ion-icon color="primary" size="large" name="create-outline"></ion-icon>
                            <ion-icon color="danger" size="large" name="trash-outline"></ion-icon>
                        </span>
                    </div>
                    
                    <div className='activity-card-detail'>
                        <p className='name'>{item.username}</p>
                        <hr /><br />
                        <label className='description'>{item.description}</label>
                        
                        <div className='activity-tab'>
                            <div className='activity-left-tab'>
                                <img className='activity-image' src={item.image} />
                                <p className='activity-type'>{item.activityType}</p>
                            </div>
                            <div className='activity-right-tab'>
                                <div className='detail'>
                                    <p>Date</p>
                                    <span>{item.date}</span>
                                </div>
                                <div className='detail'>
                                    <p>Duration</p>
                                    <span>{item.duration}</span>
                                </div>
                                <div className='detail'>
                                    <p>Distance</p>
                                    <span>{item.distance}</span>
                                </div>
                            </div>
                        </div>
                        <hr />
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ActivityCard