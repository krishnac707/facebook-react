import React, { useContext } from 'react';
import './Home.css';
import Header from '../header/Header';
import shinchan from './shinchan.png';
import shinchan1 from './shinchan1.jpg';
import shinchan2 from './shinchan2.jpg';
import shinchan3 from './shinchan3.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdd, faComment, faShare, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import CreatePost from '../createpost/CreatePost';
import { DataContext } from '../../context/Data.context';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const { createPost, setCreatePost } = useContext(DataContext);
  const router = useNavigate()
  return (
    <>
      <Header></Header>
      <div className='home-body'>
        <div className="left-home-div">
          <div className='home-left-menu-image-div'>
            <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yz/r/4GR4KRf3hN2.png" alt="" />
          </div>
          <div className="home-left-side-menu">
            <p className='home-left-menu-content'>Fundraies</p>
            <p className='home-left-menu-content'>Groups</p>
            <p className='home-left-menu-content'>Play games</p>
            <p className='home-left-menu-content'>Pages</p>
            <p className='home-left-menu-content'>Fundraies</p>
            <p className='home-left-menu-content'>Saved</p>
            <p className='home-left-menu-content'>Building</p>
            <p className='home-left-menu-content'>Heart</p>
            <p className='home-left-menu-content'>Fundraies</p>
            <p className='home-left-menu-content'>Lives</p>
            <p className='home-left-menu-content'>Lives</p>
            <p className='home-left-menu-content'>Market Places</p>
            <p className='home-left-menu-content'>Memories</p>
            <p className='home-left-menu-content'>Fundraies</p>
            <p className='home-left-menu-content'>Videos</p>
          </div>
        </div>
        <div style={{ width: "40%" }}>
          <div className="add-story-add-post-div">
            <div className="add-post-home-page-div">
              <div className="home-add-post-profile-picture">
                <img src={shinchan} alt="" />
              </div>
              <input className='home-input-add-post-css' onClick={() => setCreatePost(true)} type="text" placeholder="What's on your mind?" />
            </div>
            <div className="add-post-multiple-content-div-home-page">
              <div>
                <span><img src="https://static.xx.fbcdn.net/rsrc.php/v3/yr/r/c0dWho49-X3.png" alt="" /></span>
                <span>Video</span>
              </div>
              <div>
                <span><img src="https://static.xx.fbcdn.net/rsrc.php/v3/y7/r/Ivw7nhRtXyo.png" alt="" /></span>
                <span>Photos</span>
              </div>
              <div>
                <span><img src="https://static.xx.fbcdn.net/rsrc.php/v3/yd/r/Y4mYLVOhTwq.png" alt="" /></span>
                <span>Feeling/Activity</span>
              </div>
            </div>
          </div>
          <div className="middle-home-div">
            <div className='newsfeed-home-div'>
              <div>
                <img src={shinchan} alt="" />
              </div>
              <div className="home-person-name-div">
                <span style={{ fontWeight: "700", fontSize: "20px" }}>Shinchan</span><span> is at</span><span style={{ fontWeight: "700", fontSize: "20px" }}> Japan</span>
                <p>1h. Japan</p>
              </div>
              <div className='home-close-button-div'>
                <img src="https://www.tatacliq.com/src/mobile-number-login/images/close_icon.svg" />
              </div>
            </div>
            <div className='home-main-picture-news-feed'>
              <img src={shinchan1} alt="" />
            </div>
            <div className="home-like-comment-div">
              <div>
                <FontAwesomeIcon icon={faThumbsUp} />
                <span> Like</span>
              </div>
              <div>
                <FontAwesomeIcon icon={faComment} />
                <span> Comment</span>
              </div>
              <div>
                <FontAwesomeIcon icon={faShare} />
                <span> Share</span>
              </div>
            </div>
          </div>



          <div className="middle-home-div">
            <div className='newsfeed-home-div'>
              <div>
                <img src={shinchan2} alt="" />
              </div>
              <div className="home-person-name-div">
                <span style={{ fontWeight: "700", fontSize: "20px" }}>Shinchan</span><span> is at</span><span style={{ fontWeight: "700", fontSize: "20px" }}> Japan</span>
                <p>1h. Japan</p>
              </div>
              <div className='home-close-button-div'>
                <img src="https://www.tatacliq.com/src/mobile-number-login/images/close_icon.svg" />
              </div>
            </div>
            <div className='home-main-picture-news-feed'>
              <img src={shinchan3} alt="" />
            </div>
            <div className="home-like-comment-div">
              <div>
                <FontAwesomeIcon icon={faThumbsUp} />
                <span> Like</span>
              </div>
              <div>
                <FontAwesomeIcon icon={faComment} />
                <span> Comment</span>
              </div>
              <div>
                <FontAwesomeIcon icon={faShare} />
                <span> Share</span>
              </div>
            </div>
          </div>
        </div >

        <div className="right-home-div">
          <h3 style={{ color: "#65676B" }}>Group Conversation</h3>
          <div>
            <div>
              <FontAwesomeIcon icon={faAdd} />
            </div>
            <h3>Create Group Conversation</h3>
          </div>
        </div>
      </div >
      <CreatePost />

    </>
  )
}

export default Home