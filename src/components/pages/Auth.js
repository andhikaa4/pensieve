import React, { useState } from 'react'
import {
    MDBContainer,
    MDBTabsContent,
}
    from 'mdb-react-ui-kit';
import Login from '../auth/login';
import Register from '../auth/register';
import Navbar from '../navbar/navbar';

function Auth() {
    const [justifyActive, setJustifyActive] = useState('tab1');;

    const handleJustifyClick = (value) => {
        if (value === justifyActive) {
            return;
        }

        setJustifyActive(value);
    };
  return (
    <div className='h-100 bg-dark bg-opacity-75'>
        
        <Navbar/>
    <div className='h-100 d-flex align-items-center text-white'>
        <MDBContainer className='w-25 mt-5'>
            <MDBTabsContent>
                <Login justifyActive={justifyActive} handleJustifyClick={handleJustifyClick}/>
                <Register justifyActive={justifyActive} handleJustifyClick={handleJustifyClick} />
            </MDBTabsContent>

        </MDBContainer>
    </div>
    </div>
  )
}

export default Auth