import React, { useContext } from 'react';
import './CreatePost.css';
import shinchan from "./../home/shinchan.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis, faFaceSmile, faSmile } from '@fortawesome/free-solid-svg-icons';
import { DataContext } from '../../context/Data.context';


const CreatePost = () => {

    const { createPost, setCreatePost } = useContext(DataContext);

    return createPost && <div id='create-post-main-body'>
        <div className='create-post-body'>
            <div className='create-post-heading-div'>
                <h2>Create post</h2>
                <div>
                    <img src="https://www.tatacliq.com/src/mobile-number-login/images/close_icon.svg" alt="" onClick={()=>setCreatePost(false)} />
                </div>
            </div>
            <div className="create-post-content-div">
                <div className="create-post-profile-name-div">
                    <div className="create-post-profile-div">
                        <img src={shinchan} alt="" />
                    </div>
                    <div className="create-post-name-div">
                        <p>Shinchan</p>
                        <div>
                            <span>public</span>
                        </div>
                    </div>
                </div>
                <input type="text" className='create-post-whats-mind' placeholder="what's on your mind ?" />
                <FontAwesomeIcon icon={faFaceSmile} className='create-post-smile-emoji' />
                {/* <FontAwesomeIcon icon="fa-regular fa-face-smile" /> */}
                <div className="dropzone" >
                    <h4>Drag and Drop Files to Upload</h4>
                    <h4>Or</h4>
                    <input type="file" />
                    {/* <button >Select Files</button> */}
                </div>
                <div className='add-to-your-post'>
                    <div className="add-to-your-post-para">
                        <h4>Add to your post</h4>
                    </div>
                    <div className="add-to-your-post-para-images">
                        <div className='add-to-your-post-single-image-div'>
                            <img src="https://static.xx.fbcdn.net/rsrc.php/v3/y7/r/Ivw7nhRtXyo.png" alt="" />
                        </div>
                        <div className='add-to-your-post-single-image-div'>
                            <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yq/r/b37mHA1PjfK.png" alt="" />
                        </div>
                        <div className='add-to-your-post-single-image-div'>
                            <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yd/r/Y4mYLVOhTwq.png" alt="" />
                        </div>
                        <div className='add-to-your-post-single-image-div'>
                            <img src="https://static.xx.fbcdn.net/rsrc.php/v3/y1/r/8zlaieBcZ72.png" alt="" />
                        </div>
                        <div className='add-to-your-post-single-image-div'>
                            <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yT/r/q7MiRkL7MLC.png" alt="" />
                        </div>
                        <div className='add-to-your-post-single-image-div'>
                            {/* <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yT/r/q7MiRkL7MLC.png" alt="" /> */}
                            <FontAwesomeIcon icon={faEllipsis} className='font-awesome-menu-create-post-css' />
                        </div>

                    </div>
                </div>

                <button className='create-post-post-button-css'>Post</button>

            </div>
        </div>
    </div>
}

export default CreatePost