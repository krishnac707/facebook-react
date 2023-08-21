import React, { useContext } from 'react'
import Header from '../header/Header';
import './ProfilePage.css';
import { useNavigate } from 'react-router-dom';
import { DataContext } from '../../context/Data.context';
import EditProfile from '../edit-profile/EditProfile';

const ProfilePage = () => {
    const {setEditProfile} = useContext(DataContext);
    const router= useNavigate()
    return (
        <>
            <Header />
            <div className='profile-page-body'>
                <div className="profile-page-inside-body">
                    <div className="cover">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXEAAACICAMAAAAmsyvzAAAASFBMVEX////+/v4AAAB3d3chISHl5eUzMzOoqKhgYGA/Pz/5+flMTEyPj491dXUiICEZGRlvb2/u7u47OztFRUVQUFCIiIiZmZkVFRUhA/fkAAACHklEQVR4nO3d207CQBRA0TlFUPFCwdv//6kzUyEDTxjbPTHsFRP7oKVuT6ZoLaZBrDTsxpUo4y4XP+yTKPtDLr5ZhyjrTS2e8mbvb/4NKJWb4pHq2wm4/dtPjSs+5g8PO9PuL7enyKfiySE/WixEid4UFyAsznLGeXF8dmhxSKTto8VBYXGaxXkWR4XFaa4qNIvTLE6zOM3iNIvT2uI2J1icZnGa6zgrLA4r15LjzeKcevX+yeIwi9MsDnJV6cLiIGecZnGaxbuwOKhWtjgqryvvFieFM87yzEmzOC6v4xZHeeZETXe8WZz2YHGYxWkWp1mcZnGaxWkWp1mcZnGaxWkWp1mcZnGaxWkWJ5WbJCzOijRaHDNdA1pZnJQ7WxxU/9LT4jSLo9p13OaISC8W59SXCrY46Ly4EBZHOeM0i9MsTvP3Kh1YHFVXFYuDLN5BpA+Lc8rLZKVni3PqP72yOCnaGbc5wuI0i9MsTrM4zeI0i9N8Po46+5nT5IAIZxxncZQzTsvBtxYn1eucn545ObX4vTNOsjisnDktTrI4zeI0i9MsTrM4zeI0i9MsTrM4zeI0i9MsTrM4zeI0i9MsTrM4zeI0i9MsTrM4zeI0i9MsTrM4zeI0i9MsTrM4zeI0i9MsTrM4zeK0tjh3s1tUP+/mM+MOl/zit8fiZPK5H2uqPeceF1MOsxQ/rHsfye2YVpVhd/efvVa9j+JqX8M3DFsf6mIX3P4AAAAASUVORK5CYII=" alt="" />
                    </div>
                    <div className="circle">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAM1BMVEXk5ueutLeqsbTn6eqpr7PJzc/j5ebf4eLZ3N2wtrnBxsjN0NLGysy6v8HT1tissra8wMNxTKO9AAAFDklEQVR4nO2d3XqDIAxAlfivoO//tEOZWzvbVTEpic252W3PF0gAIcsyRVEURVEURVEURVEURVEURVEURVEURVEURVEURflgAFL/AirAqzXO9R7XNBVcy9TbuMHmxjN6lr92cNVVLKEurVfK/zCORVvW8iUBnC02dj+Wpu0z0Y6QlaN5phcwZqjkOkK5HZyPAjkIjSO4fIdfcOwFKkJlX4zPu7Ha1tIcwR3wWxyFhRG6g4Je0YpSPDJCV8a2Sv2zd1O1x/2WMDZCwljH+clRrHfWCLGK8REMiql//2si5+DKWKcWeAGcFMzzNrXC/0TUwQ2s6+LhlcwjTMlYsUIQzPOCb7YBiyHopyLXIEKPEkI/TgeuiidK/R9FniUDOjRDpvm0RhqjMyyXNjDhCfIMYl1gGjIMIuYsnGEYRMRZOMMunaLVwpWRW008v6fYKDIzxCwVAeNSO90BJW6emelYBRF/kHpYGVaoxTDAaxOFsfP9y8hpJ4xd7gOcij7JNGQ1EYFgkPJa1jQEiYZXRaRINKxSDUW9n+FT82lSKadkiru9/4XPqSLWOekGPoY05TAvLm9orm+YWuwHoBHkZKijNBJGmeb61eL6Ff/6q7bLr7yvv3vKGhpDRjvgjGaPz+gUg6YgcvpyAR2FIZ9U6nEEyZRTovmEU32KichpGn7C17XrfyH9gK/c0CMP05HZIM2uf9sEveizKveBy9/6Qt7o89ne33D525cfcIMW6ab+TMEukQbQbu+xu7X3A9bChmWaCeAkG17bpntwXgWxHaMzGPmUaR5dQZiKqRVeUZ3047fi3nAu28h4CHxCsZAgmEH8Y27jJAhm8c+5RQzRQNVGhVFSfxOYIjp/pP7RxzjevYXVGf4eLt+BJ1vCuLuLkrgABgCGXZ2wik5uty+oBvNirI6mkzhAf4Gsb58Hcm67Jzd+KwD10BYPLL3e0MjvKrgAULnOfveF/O4N2Xb9BZom3gJes3F9X5Zze8/6Yt09b4CrqsEjUv8oFBaR2rl+6CZr2xVrp24o/WitBKuGrrpl1+bFkmK2qXTON4VpbdfLa7o7y/WdLxG7lm2Lqh2clOwTegbvc/vj2U78CwhA87Bn8G5Nk3eOb0Nsr9flz3sG78UUtue4kpv1xvjg3TMay62BMlTlP+vrOMnJsRmt/ze0jsfkPPYdAH57hK+34PeOyc8XIXu5xT2HsUkdZz+adwg8HGFfQ3K5jtDvbUiO4Di9/ywHGrL88pDizZ++oTp+an+SMX/ndymUCwmHMdO7yuOx83pUx/eEMU0AvxWndwgidAqOZ8ypCwdEfvvEo6D9HwpA8wzvmOJEqAg9ySu8g4x0Hb9hSB/BANEKJ+LbPBU0lzbAJs4xt1AoshKkUGQmiH8/jJ0gdhTTLmSegHlPE0oOdXALnqDjKYh3px//fSgSWG8UqfrrIICzYYSJXRr9BSPbpNzw7gBjKjKOYI7ReIGqQRIap5+5MdjyvuDkExvGeXSlONWZAP3/AZBwJohU7QJRGU+cTVH18ELmRPNBmibW6MT/k1b0XhdkRBvyT6SB6EYv/GvhSmRNpGngRULsAlxMCGNXp7w3FfdEbTEEDdLI9TdIKRUzUesa3I461ER8cpNT7gMRhpKmYVS9ELOgCUQsa4SsulciKiLbY+AnHD8cpuhISsnxpamI84sbDq9qYJgf8wiiOBrC7Ml7M7ZECCqKoiiKoiiKoiiKoijv5AvJxlZRyNWWLwAAAABJRU5ErkJggg==" alt="" className="logo" />
                    </div>
                    <div className='profile-picture-user-name'>
                        <h2>Krishna Chaudhary</h2>
                    </div>
                    <div className='profile-page-add-to-story-button'>
                        <button onClick={()=>router("/create-story")}>Add to Story</button>
                    </div>
                    <div className="profile-page-profile-edit-button">
                        <button onClick={()=>setEditProfile(true)}>Edit Profile</button>
                    </div>
                </div>
            </div>
            <EditProfile />
        </>
    )
}

export default ProfilePage