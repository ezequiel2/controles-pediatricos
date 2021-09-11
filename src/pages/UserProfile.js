import React from 'react';
import withRoot from '../withRoot';
import AppAppBar from '../views/AppAppBar';




const UserProfile = () =>{

    return (
        <React.Fragment>
            <AppAppBar />
        </React.Fragment>

    );
}

export default withRoot(UserProfile);