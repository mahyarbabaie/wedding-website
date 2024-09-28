import React, {useState} from "react";
import Home from "./Home.tsx";
import PasswordLogin from "./PasswordLogin.tsx";

const WeddingSiteManager: React.FC = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    const handleSetIsAuthenticated = (isSuccessful: boolean) => {
        setIsAuthenticated(isSuccessful)
    }

    return (
        <>
            { !isAuthenticated && <PasswordLogin handleSetIsAuthenticated={handleSetIsAuthenticated}/>}
            { isAuthenticated && <Home/>}
        </>

    );
};

export default WeddingSiteManager;