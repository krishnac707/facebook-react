import { createContext, useState } from "react";
export const DataContext = createContext();

export const DataProvider = ({children}) => {
    const [registerDiv,setRegisterdiv] = useState(false);
    const [createPost,setCreatePost] = useState(false);
    const [editProfile,setEditProfile] = useState(false);

    return (
        <DataContext.Provider value={{registerDiv,setRegisterdiv,createPost,setCreatePost,editProfile,setEditProfile}}>
            {children}
        </DataContext.Provider>
    )
}