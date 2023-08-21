import React, { useContext } from 'react'
import { DataContext } from '../../context/Data.context';
import './EditProfile.css'

const EditProfile = () => {

    const { editProfile, setEditProfile } = useContext(DataContext);

    return editProfile &&
        <div id='edit-profile-main-div'>
            <div className="edit-profile-body">
                <div className="edit-profile-heading-body">
                    <h2>Edit Profile</h2>
                    <div>
                        <img src="https://www.tatacliq.com/src/mobile-number-login/images/close_icon.svg" alt="" onClick={() => setEditProfile(false)} />
                    </div>
                </div>
                <div className="edit-profile-profile-picture-div">
                    <h3>Profile Picture</h3>
                    <span>Edit</span>
                </div>
                <div className='circle-profile-picture-edit-profile'>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAM1BMVEXk5ueutLeqsbTn6eqpr7PJzc/j5ebf4eLZ3N2wtrnBxsjN0NLGysy6v8HT1tissra8wMNxTKO9AAAFDklEQVR4nO2d3XqDIAxAlfivoO//tEOZWzvbVTEpic252W3PF0gAIcsyRVEURVEURVEURVEURVEURVEURVEURVEURVEURflgAFL/AirAqzXO9R7XNBVcy9TbuMHmxjN6lr92cNVVLKEurVfK/zCORVvW8iUBnC02dj+Wpu0z0Y6QlaN5phcwZqjkOkK5HZyPAjkIjSO4fIdfcOwFKkJlX4zPu7Ha1tIcwR3wWxyFhRG6g4Je0YpSPDJCV8a2Sv2zd1O1x/2WMDZCwljH+clRrHfWCLGK8REMiql//2si5+DKWKcWeAGcFMzzNrXC/0TUwQ2s6+LhlcwjTMlYsUIQzPOCb7YBiyHopyLXIEKPEkI/TgeuiidK/R9FniUDOjRDpvm0RhqjMyyXNjDhCfIMYl1gGjIMIuYsnGEYRMRZOMMunaLVwpWRW008v6fYKDIzxCwVAeNSO90BJW6emelYBRF/kHpYGVaoxTDAaxOFsfP9y8hpJ4xd7gOcij7JNGQ1EYFgkPJa1jQEiYZXRaRINKxSDUW9n+FT82lSKadkiru9/4XPqSLWOekGPoY05TAvLm9orm+YWuwHoBHkZKijNBJGmeb61eL6Ff/6q7bLr7yvv3vKGhpDRjvgjGaPz+gUg6YgcvpyAR2FIZ9U6nEEyZRTovmEU32KichpGn7C17XrfyH9gK/c0CMP05HZIM2uf9sEveizKveBy9/6Qt7o89ne33D525cfcIMW6ab+TMEukQbQbu+xu7X3A9bChmWaCeAkG17bpntwXgWxHaMzGPmUaR5dQZiKqRVeUZ3047fi3nAu28h4CHxCsZAgmEH8Y27jJAhm8c+5RQzRQNVGhVFSfxOYIjp/pP7RxzjevYXVGf4eLt+BJ1vCuLuLkrgABgCGXZ2wik5uty+oBvNirI6mkzhAf4Gsb58Hcm67Jzd+KwD10BYPLL3e0MjvKrgAULnOfveF/O4N2Xb9BZom3gJes3F9X5Zze8/6Yt09b4CrqsEjUv8oFBaR2rl+6CZr2xVrp24o/WitBKuGrrpl1+bFkmK2qXTON4VpbdfLa7o7y/WdLxG7lm2Lqh2clOwTegbvc/vj2U78CwhA87Bn8G5Nk3eOb0Nsr9flz3sG78UUtue4kpv1xvjg3TMay62BMlTlP+vrOMnJsRmt/ze0jsfkPPYdAH57hK+34PeOyc8XIXu5xT2HsUkdZz+adwg8HGFfQ3K5jtDvbUiO4Di9/ywHGrL88pDizZ++oTp+an+SMX/ndymUCwmHMdO7yuOx83pUx/eEMU0AvxWndwgidAqOZ8ypCwdEfvvEo6D9HwpA8wzvmOJEqAg9ySu8g4x0Hb9hSB/BANEKJ+LbPBU0lzbAJs4xt1AoshKkUGQmiH8/jJ0gdhTTLmSegHlPE0oOdXALnqDjKYh3px//fSgSWG8UqfrrIICzYYSJXRr9BSPbpNzw7gBjKjKOYI7ReIGqQRIap5+5MdjyvuDkExvGeXSlONWZAP3/AZBwJohU7QJRGU+cTVH18ELmRPNBmibW6MT/k1b0XhdkRBvyT6SB6EYv/GvhSmRNpGngRULsAlxMCGNXp7w3FfdEbTEEDdLI9TdIKRUzUesa3I461ER8cpNT7gMRhpKmYVS9ELOgCUQsa4SsulciKiLbY+AnHD8cpuhISsnxpamI84sbDq9qYJgf8wiiOBrC7Ml7M7ZECCqKoiiKoiiKoiiKoijv5AvJxlZRyNWWLwAAAABJRU5ErkJggg==" alt="" />
                </div>
                <div className="edit-profile-profile-picture-div">
                    <h3>Cover Photo</h3>
                    <span>Edit</span>
                </div>
                <div className="profile-edit-cover-photo-div">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXEAAACICAMAAAAmsyvzAAAASFBMVEX////+/v4AAAB3d3chISHl5eUzMzOoqKhgYGA/Pz/5+flMTEyPj491dXUiICEZGRlvb2/u7u47OztFRUVQUFCIiIiZmZkVFRUhA/fkAAACHklEQVR4nO3d207CQBRA0TlFUPFCwdv//6kzUyEDTxjbPTHsFRP7oKVuT6ZoLaZBrDTsxpUo4y4XP+yTKPtDLr5ZhyjrTS2e8mbvb/4NKJWb4pHq2wm4/dtPjSs+5g8PO9PuL7enyKfiySE/WixEid4UFyAsznLGeXF8dmhxSKTto8VBYXGaxXkWR4XFaa4qNIvTLE6zOM3iNIvT2uI2J1icZnGa6zgrLA4r15LjzeKcevX+yeIwi9MsDnJV6cLiIGecZnGaxbuwOKhWtjgqryvvFieFM87yzEmzOC6v4xZHeeZETXe8WZz2YHGYxWkWp1mcZnGaxWkWp1mcZnGaxWkWp1mcZnGaxWkWJ5WbJCzOijRaHDNdA1pZnJQ7WxxU/9LT4jSLo9p13OaISC8W59SXCrY46Ly4EBZHOeM0i9MsTvP3Kh1YHFVXFYuDLN5BpA+Lc8rLZKVni3PqP72yOCnaGbc5wuI0i9MsTrM4zeI0i9N8Po46+5nT5IAIZxxncZQzTsvBtxYn1eucn545ObX4vTNOsjisnDktTrI4zeI0i9MsTrM4zeI0i9MsTrM4zeI0i9MsTrM4zeI0i9MsTrM4zeI0i9MsTrM4zeI0i9MsTrM4zeI0i9MsTrM4zeI0i9MsTrM4zeK0tjh3s1tUP+/mM+MOl/zit8fiZPK5H2uqPeceF1MOsxQ/rHsfye2YVpVhd/efvVa9j+JqX8M3DFsf6mIX3P4AAAAASUVORK5CYII=" alt="" />
                </div>
                <div className="edit-profile-profile-picture-div">
                    <h3>Avatar</h3>
                    <span>Create</span>
                </div>
                <div className="profile-edit-cover-photo-div">
                    <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yG/r/IkevDJ_fuvX.png" alt="" />
                </div>
                <div className="edit-profile-profile-picture-div">
                    <h3>Bio</h3>
                    <span>Add</span>
                </div>
                <div>
                    <p style={{ textAlign: "center", color: "#65676B" }}>Describe Yourself...</p>
                </div>

                <div className="edit-profile-profile-picture-div">
                    <h3>Customize Your intro</h3>
                    <span>Edit</span>
                </div>

                <div className="customize-your-intro-profile-edit">
                    <div className='customize-your-intro-profile-edit-inside'>
                        <div className="hat-icon-profile-edit-div">
                            <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yS/r/jV4o8nAgIEh.png" alt="" />
                        </div>
                        <p className='profile-edit-study-location'>Studied at Mumbai University</p>
                    </div>
                    <div className='customize-your-intro-profile-edit-inside'>
                        <div className="hat-icon-profile-edit-div">
                            <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yS/r/jV4o8nAgIEh.png" alt="" />
                        </div>
                        <p className='profile-edit-study-location'>Went to Fatima High School, Ambarnath</p>
                    </div>
                    <div className='customize-your-intro-profile-edit-inside'>
                        <div className="hat-icon-profile-edit-div">
                            <img src="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/VMZOiSIJIwn.png" alt="" />
                        </div>
                        <p className='profile-edit-study-location'>Lives in <span><b>Ambarnath</b></span></p>
                    </div>
                    <div className='customize-your-intro-profile-edit-inside'>
                        <div className="hat-icon-profile-edit-div">
                            <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yc/r/-e1Al38ZrZL.png" alt="" />
                        </div>
                        <p className='profile-edit-study-location'>From <span><b>Mumbai, Maharashtra</b></span></p>
                    </div>
                    <div className='customize-your-intro-profile-edit-inside'>
                        <div className="hat-icon-profile-edit-div">
                            <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yq/r/S0aTxIHuoYO.png" alt="" />
                        </div>
                        <p className='profile-edit-study-location'>Single</p>
                    </div>
                </div>

                <div className="edit-profile-profile-picture-div">
                    <h3>Hobbies</h3>
                    <span>Add</span>
                </div>

                <div className="edit-profile-profile-picture-div">
                    <h3>Featured</h3>
                    <span>Add</span>
                </div>

                <div className="profile-edit-cover-photo-div-1">
                    <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yN/r/gL1slwup025.png" alt="" />
                </div>

                <p style={{ textAlign: "center", color: "#65676B" }}>Feature your favourite photos and stories here for all of your friends to see.</p>

                <button className='profile-edit-about-info-button'>Edit Your About Info</button>

            </div>
        </div>

}

export default EditProfile
