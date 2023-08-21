import React from 'react';
import './Header.css';
import fblogo from './../header/facebooklogo.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faHouse, faVideo,faStore,faPeopleGroup, faGamepad, faEllipsis, faCommentDots, faBell, faUser } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const router = useNavigate();
    return (
        <div className='header-body'>
            <div className="header-logo-image-div">
                <img src={fblogo} alt="" />
            </div>
            <div className="header-searchbar-div">
                <FontAwesomeIcon className='header-search-icon' icon={faMagnifyingGlass} />
                <input type="text" placeholder='Search FaceBook' />
            </div>
            <div className='header-menu-div'>
                <div className='header-home-div'>
                    <FontAwesomeIcon className='header-home-icon' icon={faHouse} />
                </div>
                <div className='header-home-div'>
                    <FontAwesomeIcon className='header-home-icon' icon={faVideo} />
                </div>
                <div className='header-home-div'>
                    <FontAwesomeIcon className='header-home-icon' icon={faStore} />
                </div>
                <div className='header-home-div'>
                    <FontAwesomeIcon className='header-home-icon' icon={faPeopleGroup} />
                </div>
                <div className='header-home-div'>
                    <FontAwesomeIcon className='header-home-icon' icon={faGamepad} />
                </div>
            </div>
            <div className='header-right-menu-div'>
                <div className='header-menu-icon-div'>
                    <FontAwesomeIcon className='header-menu-icon' icon={faEllipsis} />
                </div>
                <div className='header-menu-icon-div'>
                    <FontAwesomeIcon className='header-menu-icon' icon={faCommentDots} />
                </div>
                <div className='header-menu-icon-div'>
                    <FontAwesomeIcon className='header-menu-icon' icon={faBell} />
                </div>
                <div className='header-menu-icon-div' onClick={()=>router("/profile-page")}>
                    <FontAwesomeIcon className='header-menu-icon' icon={faUser} />
                </div>
            </div>
        </div>
    )
}

export default Header
