import { createContext, useState } from "react";

type UserInfoType = {
    name: string,
    family: string,
    age: number
}
type UserContextType = {
    userInfo: UserInfoType
    setUserInfo: React.Dispatch<React.SetStateAction<UserInfoType>>
}
export const UserContext = createContext({} as UserContextType)

const UserContextProvider = ({children}: {children: React.ReactNode}) => {
    const [userInfo,setUserInfo] = useState({} as UserInfoType)
    return (
        <UserContext.Provider value={{
            userInfo,
            setUserInfo
        }}>
            {children}
        </UserContext.Provider>
    );
};


export default UserContextProvider;