import React, { useState } from 'react';
import '../activityCard/activityCard.css';
import walkImage from '../../assets/icon/walk.png';
import swimImage from '../../assets/icon/swim.png';
import runImage from '../../assets/icon/run.png';
import bikeImage from '../../assets/icon/bike.png';
import badmintonImage from '../../assets/icon/badminton.png';

const ActivityCard = ({ user }) => {

    // const card = user.user;
    // card.push(user);
    // console.log(user)

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear().toString().slice(-2);
        return `${day}/${month}/${year}`;
    };

    return (
      <div className='activities_card'>
        {user.map((item) => {
          let activityImage;
  
          if (item.activityType === "Running") {
            activityImage = runImage;
          } else if (item.activityType === "Walking") {
            activityImage = walkImage;
          } else if (item.activityType === "Biking") {
            activityImage = bikeImage;
          } else if (item.activityType === "Swimming") {
            activityImage = swimImage;
          } else {
            activityImage = badmintonImage;
          }
  
          return (
            <div className='activity-card' key={item._id}>
              <div className='header'>
                <h2 className='activity-name'>{item.firstName} {item.lastName}</h2>
                <span className="icon">
                  <a href='/edit_card'><ion-icon color="primary" size="large" name="create-outline"></ion-icon></a>
                  <ion-icon color="danger" size="large" name="trash-outline"></ion-icon>
                </span>
              </div>
  
              <div className='activity-card-detail'>
                <p className='name'>{item.activityName}</p>
                <hr /><br />
                <label className='description'>{item.description}</label>
  
                <div className='activity-tab'>
                  <div className='activity-left-tab'>
                    <img className='activity-image' src={activityImage} alt={item.activityType} />
                    <p className='activity-type'>{item.activityType}</p>
                  </div>
                  <div className='activity-right-tab detail'>
                    <p>Date</p>
                    {/* <span>{item.date.split('T')[0]}</span> */}
                    <span>{formatDate(item.date)}</span>
                  </div>
                  <div className='activity-right-tab detail'>
                    <p>Duration</p>
                    <span>{item.duration}</span>
                  </div>
                  <div className='activity-right-tab detail'>
                    <p>Distance</p>
                    <span>{item.distance}</span>
                  </div>
                </div>
                <hr />
              </div>
            </div>
          );
        })}
      </div>
    );
  };
  
export default ActivityCard;