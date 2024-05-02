import ProfileButtons from './components/ProfileButtons';
import Profile from "./profile";
import Library from "./Library";
import React, { useState } from 'react';
import Landing from './LandingPage';
import LibraryButton from './components/LibraryButton';

const App = () => {
    const [isAuth, setIsAuth] = useState(false);
    const [browseBooks, setBrowseBooks] = useState(false);

    const signIn = () => {
        setIsAuth(true);
    };
    const displayLibrary = () => {
        setBrowseBooks(true);
    };
    const displayProfile = () => {
        setBrowseBooks(false)
    };

    return (
        <React.StrictMode>
            {isAuth ? (
                browseBooks ? <div>
                    <LibraryButton displayProfile={displayProfile}/>
                    <Library  />
                    </div> : (
                    <div>
                        <ProfileButtons displayLibrary={displayLibrary} />
                        <Profile />
                    </div>
                )
            ) : <Landing signIn={signIn} />}
        </React.StrictMode>
    );
};

export default App;
