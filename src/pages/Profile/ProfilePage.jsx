import React from 'react';
import NB from "../../assets/NB.jpg";
import "./ProfilePage.css";
const ProfilePage = () => {
  return (
    <div className="profile-container">
      <div className="avatar-container">
        <img src={NB} alt="Avatar" className="avatar-img" />
      </div>
      <div className="user-info">
        <div className="user-name">Nguyễn Thành Đạt ( ダット ) </div>
        <div className="user-id">B20DCPT056</div>
        <div className="user-desc">私　は　ダット、エブサイト　開発者、よろしくお願いいたします。</div>

      </div>
      <div className="divider"></div>
      {/* <div className="description">
          <div className="skills-heading">Description</div>
          <p></p>
      </div>
      <div className="divider"></div> */}
      <div className="skills-container">
        <div className="skills">
          <div className="skills-heading">Skills</div>
          <ul className="skills-list">
            <li className="skill-item">HTML</li>
            <li className="skill-item">CSS</li>
            <li className="skill-item">Javascript</li>
            <li className="skill-item">ReactJs</li>
          </ul>
        </div>
        <div className="other-skills">
          <div className="skills-heading">Other Skills</div>
          <ul className="skills-list">
            <li className="skill-item">English</li>
            <li className="skill-item">Japanese</li>
          </ul>
        </div>
        
      </div>
    </div>
  );
  
};
export default ProfilePage;