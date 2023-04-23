import React from 'react';
import './ActivityCard.css';
 
const ActivityCard = () => {
    // const activity = [
    //     {
    //         id: 1,
    //         activityName: 'Go Shopping',
    //         username: 'John Doe',
    //         description: 'Go to the Department Store for buying new shirts and new shoes in order to use for a new job on Monday.',
    //         image: '',
    //         activityType: 'Walk',
    //         date: '',
    //         duration: '00:53:41',
    //         distance: '4.0 KM'
    //     }
    // ]

    return (
        <div className='activity-card'>
            <div className='header'>
                <h2 className='activity-name'>Go Shopping</h2>
                <span className="icon">
                    <ion-icon color="primary" size="large" name="create-outline"></ion-icon>
                    <ion-icon color="danger" size="large" name="trash-outline"></ion-icon>
                </span>
            </div>
            
            <div className='activity-card-detail'>
                <p className='name'>John Doe</p>
                <hr /><br />
                <label className='description'>Go to the Department Store for buying new shirts and new shoes in order to use for a new job on Monday.</label>
                
                <div className='activity-tab'>
                    <div className='activity-left-tab'>
                        {/* <img className='activity-image' /> */}
                        <svg viewBox="0 0 320 512" fill="currentColor" height="4em" width="4em">
                            <path d="M256 48c0 26.5-21.5 48-48 48s-48-21.5-48-48 21.5-48 48-48 48 21.5 48 48zM126.5 199.3c-1 .4-1.9.8-2.9 1.2l-8 3.5c-16.4 7.3-29 21.2-34.7 38.2l-2.6 7.8c-5.6 16.8-23.7 25.8-40.5 20.2S12 246.5 17.6 229.7l2.6-7.8c11.4-34.1 36.6-61.9 69.4-76.5l8-3.5c20.8-9.2 43.3-14 66.1-14 44.6 0 84.8 26.8 101.9 67.9l15.4 36.9 21.4 10.7c15.8 7.9 22.2 27.1 14.3 42.9s-27.1 22.2-42.9 14.3L247 287.3c-10.3-5.2-18.4-13.8-22.8-24.5l-9.6-23-19.3 65.5 49.5 54c5.4 5.9 9.2 13 11.2 20.8l23 92.1c4.3 17.1-6.1 34.5-23.3 38.8s-34.5-6.1-38.8-23.3l-22-88.1-70.7-77.1c-14.8-16.1-20.3-38.6-14.7-59.7l16.9-63.5zM68.7 398l25-62.4c2.1 3 4.5 5.8 7 8.6l40.7 44.4-14.5 36.2c-2.4 6-6 11.5-10.6 16.1l-61.7 61.7c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L68.7 398z" />
                        </svg>
                        <p className='activity-type'>Walk</p>
                    </div>
                    <div className='activity-right-tab'>
                        <div className='detail'>
                            <p>Date</p>
                            <span>04/09/2023</span>
                        </div>
                        <div className='detail'>
                            <p>Duration</p>
                            <span>00:53:41</span>
                        </div>
                        <div className='detail'>
                            <p>Distance</p>
                            <span>4.0 KM</span>
                        </div>
                    </div>
                </div>
                <hr />
            </div>
        </div>
    );
}

export default ActivityCard