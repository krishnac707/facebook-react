import React from 'react';
import fblogo from './../header/facebooklogo.jpg'
import './CreateStory.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faEllipsis, faGear } from '@fortawesome/free-solid-svg-icons';
import shinchan from './../home/shinchan.png'
import { useNavigate } from 'react-router-dom';

const CreateStory = () => {
    const router = useNavigate();
    return (
        <div className='create-story-body'>
            <div className="create-story-left-side-div">
                <div className='create-story-left-side-heading'>
                    <div className='create-story-close'>
                        <div className='create-story-close-main-div'>
                            <div>
                                <img onClick={()=>router('/')} src="https://www.tatacliq.com/src/mobile-number-login/images/close_icon.svg" alt="" />
                            </div>
                            <div>
                                <img src={fblogo} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className='create-story-your-story-main-div'>
                        <h2>Your Story</h2>
                        <div className='create-story-setting-icon-div'>
                            <FontAwesomeIcon icon={faGear} className='create-story-setting-icon' />
                        </div>
                    </div>
                    <div className="your-story-profile-picture-name-div">
                        <div className="your-story-profile-picture-div">
                            <img src={shinchan} alt="" />
                        </div>
                        <div className="your-story-name-div">
                            <span>Shinchan</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="create-story-right-side-div">
                <div className="create-story-right-side-heading-div">
                    <div>
                        <FontAwesomeIcon icon={faEllipsis} />
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faBell} />
                    </div>
                    <div>
                        <img src={shinchan} alt="" />
                    </div>
                </div>
                <div className='right-side-create-story-content-section'>
                    <div className='create-a-photo-story'>
                        <div className='create-story-gallery-icon-div'>
                            <div className='create-story-gallery-icon'></div>
                        </div>
                        <div className='create-story-text-icon-div'>
                            <p>create a photo story</p>
                        </div>
                    </div>
                    <div className='create-a-text-story'>
                        <div className='create-story-gallery-icon-div'>
                            <div className='create-story-gallery-icon'></div>
                        </div>
                        <div className='create-story-text-icon-div'>
                            <p>create a Text story</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateStory
