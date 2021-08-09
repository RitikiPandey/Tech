import React from 'react';
import '../../App.css';
import './Profile.css'


export default function Profile() {
    return (
        <>
        <div className="container">
            <div className="card">
                  <div className="imgBx">
                      <img src="../images/bot.jpg" />
                  </div>
                  <div className="content">
                      <div className="details">
                          <h2>Ritiki Pandey</h2>
                          <ul className="social_icon">
                              <li><a href="#"><i class="fa fa-envelope" aria-hidden="true"></i></a></li>
                              <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                              <li><a href="#"><i className="fa fa-github" aria-hidden="true"></i></a></li>
                              <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                          </ul>
                      </div>
                  </div>
            </div>
        </div>
        </>
    )
}