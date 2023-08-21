import { Route, Routes } from "react-router-dom";
import Login from "./components/login/Login";
import Home from "./components/home/Home";
import CreatePost from "./components/createpost/CreatePost";
import CreateStory from "./components/create-story/CreateStory";
import ProfilePage from "./components/profile-pictue/ProfilePage";
import SearchPage from "./components/search-page/SearchPage";

function App() {
    return (
        <div>
            <Routes>
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/" element={<Home />} />
                <Route exact path='/create-post' element={<CreatePost />} />
                <Route exact path="/create-story" element={<CreateStory />} />
                <Route exact path="/profile-page" element={<ProfilePage />} />
                <Route exact path="/search-page" element={<SearchPage />} />
            </Routes>
        </div>
    );
}

export default App;
