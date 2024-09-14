import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const UserInfoComponent = () => {
    const {userInfo} = useContext(UserContext)
    return (
        <div>
            <h1>{userInfo?.name}</h1>
            <h2>{userInfo?.family}</h2>
            <h3>{userInfo?.age}</h3>           
        </div>
    );
};

export default UserInfoComponent;