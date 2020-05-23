import React from 'react';
import avatar from './Image/avatar.png';

const Left = () => (
    <div className="left-card">
        <div className="left-card-1">
            <div className="design-task">
            <button type="button" id="btn-name"> design task </button>
            <button type="button" id="btn-icon">  <i class="fas fa-sort-down"/> </button>
            
            </div>
            <div className="project">
                <button type="button"> + add project </button>
            </div>
        </div>
        <div className="left-card-2">
            <div className="circle-arrow">
            <h1><i class="fas fa-angle-left"></i></h1>
            </div>
            <div className="left-card-body">
                <div className="design-head">
                    <h1>design head</h1>
                    <div className="head-card">
                        <div className="head-card1">
                           <img src={avatar} alt=""/>
                           <div className="avatar-name">
                               <h1>saami al samad</h1>
                               <small>product designer & illustrator</small>
                           </div>
                           <i class="fas fa-minus-circle"></i>
                        </div>
                        <div className="head-card2">
                            <div id="hour-rate">
                            <h1>hourly rate</h1>
                            <small>45 $per hour</small>
                            </div>
                            <i class="fas fa-minus-circle"></i>
                        </div>
                        <div className="head-card3">
                            <div className="capacity">
                            <h1>working capacity</h1>
                        <div className="skill">
                            <div className="skill-level" ></div>
                        </div>
                            </div>
                            <button type="button">view resume</button>
                        </div>
                    </div>
                </div>
                <div className="screenshot-activity">
                    <div className="activity-head">
                        <h1>screenshot activity</h1>
                        <div className="change-card">
                        <i id="left-arrow" class="fas fa-arrow-left"></i>
                        <i id="right-arrow"class="fas fa-arrow-right"></i>
                        <button type="button">Today <i class="fas fa-sort-down"/></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
    </div>
)
export default Left;