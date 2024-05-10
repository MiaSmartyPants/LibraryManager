import ProfileButtons from './components/ProfileButtons';
import Profile from "./profile";
import Library from "./Library";
import React, { useState } from 'react';
import Landing from './LandingPage';
import LibraryButton from './components/LibraryButton';
import { useAuth0 } from "@auth0/auth0-react";
import Data from './data';


const App = () => {
    const [isAuth, setIsAuth] = useState(false);
    const [browseBooks, setBrowseBooks] = useState(false);
    const { isAuthenticated, loginWithRedirect } = useAuth0();

    const displayLibrary = () => {
        setBrowseBooks(true);
    };

    const displayProfile = () => {
        setBrowseBooks(false);
    };

    // Check if the user is authenticated and update the state accordingly
    React.useEffect(() => {
        setIsAuth(isAuthenticated);
    }, [isAuthenticated]);

    return (
        <React.StrictMode>
            {isAuth ? (
                browseBooks ? <div>
                    <LibraryButton displayProfile={displayProfile}/>
                    <Library LibraryData={Data.userData} />
                    </div> : (
                    <div>
                        <ProfileButtons displayLibrary={displayLibrary} />
                        <Profile UserData={Data.userData} />
                    </div>
                )
            ) : <Landing login={loginWithRedirect} />}
        </React.StrictMode>
    );
};

export default App;