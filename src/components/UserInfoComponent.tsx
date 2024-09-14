import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const UserInfoComponent = () => {
    const context = useContext(UserContext)
    return (
        <div>
            <h1>{context?.userInfo?.name}</h1>
            <h2>{context?.userInfo?.family}</h2>
            <h3>{context?.userInfo?.age}</h3>           
        </div>
    );
};

export default UserInfoComponent;